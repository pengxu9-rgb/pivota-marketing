"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Clock3, SearchCheck, ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emitMarketingEvent } from "@/lib/analytics";
import { buildMerchantSignupRedirectUrl } from "@/lib/merchant-signup";
import {
  fetchPublicAuditRun,
  probeStoreForTeaser,
  type PublicAuditRun,
  type StoreAuditTeaser,
} from "@/lib/store-audit-teaser";

type AuditUrlCaptureFormProps = {
  page: string;
  placement: string;
};

const primaryButtonClass =
  "h-11 shrink-0 rounded-xl bg-[image:var(--pv-gradient-primary)] px-5 text-sm font-semibold text-white shadow-[var(--pv-shadow-glow)] transition-all hover:brightness-[1.03] focus-visible:ring-primary/30";
const inputClass =
  "h-11 rounded-xl border-slate-300 bg-white px-4 text-sm text-slate-900 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.18)] placeholder:text-slate-400 focus-visible:ring-primary/30";

function normalizeStoreUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withScheme);
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

type TeaserCard = "ready_positive" | "ready_negative" | "queued" | "inconclusive";

/**
 * Signals the deterministic tier can report, in the order a merchant would
 * read them. A signal appears only when we OBSERVED it — there is no "not
 * detected" here, because the backend does not record one and inventing it
 * would tell a store it lacks a checkout route we simply never saw.
 */
const SIGNAL_LABEL: Record<string, string> = {
  acceptance_signal: "Agent checkout endpoint advertised",
  commerce_platform: "Store platform identified",
  // OBSERVED, not achieved. The commerce probe writes these rows for every
  // outcome its status enum allows — "unavailable", "blocked",
  // "selection_required", "unknown" included — and the public projection
  // strips the payload, so presence reaches us without the verdict. Labels
  // that promised "reachable" or "could be built" would print a success for a
  // blocked checkout: the same presence-means-positive error the backend
  // avoids by never emitting a `detected: false`.
  commerce_checkout_route: "Checkout route observed",
  commerce_cartability: "Cart observed",
};

function dedupeSignals(
  signals: PublicAuditRun["observed_signals"],
): PublicAuditRun["observed_signals"] {
  const seen = new Set<string>();
  return signals.filter((entry) => {
    if (seen.has(entry.signal)) return false;
    seen.add(entry.signal);
    return true;
  });
}

const EVIDENCE_LABEL: Record<string, string> = {
  tested: "tested live",
  detected: "detected",
};

function cardForTeaser(teaser: StoreAuditTeaser): TeaserCard {
  if (teaser.state === "ready") {
    return teaser.agent_ready ? "ready_positive" : "ready_negative";
  }
  if (teaser.state === "inconclusive") return "inconclusive";
  // "pending" after the short poll, and "unknown", both read as queued: the
  // probe drains on a ~5-minute cadence, so the honest message is "queued".
  return "queued";
}

const CARD_COPY: Record<
  TeaserCard,
  { title: string; body: string; icon: React.ComponentType<{ className?: string }> }
> = {
  ready_positive: {
    title: "Agent-ready commerce detected",
    body: "Your store already advertises an agent checkout endpoint. Your full audit shows what AI shopping agents actually see — and what still blocks conversion.",
    icon: CheckCircle2,
  },
  ready_negative: {
    title: "No agent-ready checkout found yet",
    body: "Most stores don't have one today. Your full audit shows how AI systems read your store now, and the shortest path to agent-ready.",
    icon: SearchCheck,
  },
  queued: {
    title: "Live check queued",
    body: "We've queued a live agent-readiness check for your store. Create your free account and the result lands in your full audit.",
    icon: Clock3,
  },
  inconclusive: {
    title: "Quick check couldn't complete",
    body: "Your store may sit behind a bot challenge — common, and something the full audit accounts for with a deeper pass.",
    icon: ShieldQuestion,
  },
};

const AuditUrlCaptureForm = ({ page, placement }: AuditUrlCaptureFormProps) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [card, setCard] = React.useState<TeaserCard | null>(null);
  const [signupUrl, setSignupUrl] = React.useState<string | null>(null);
  const [auditRun, setAuditRun] = React.useState<PublicAuditRun | null>(null);
  const abortRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => () => abortRef.current?.abort(), []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const storeUrl = normalizeStoreUrl(value);
    if (!storeUrl) {
      setError("Enter your store URL, e.g. yourstore.com");
      return;
    }

    // "ai-readiness-audit" (not the page's generic "ai-readiness") so the
    // URL-capture funnel stays separately attributable downstream.
    const nextSignupUrl = buildMerchantSignupRedirectUrl("ai-readiness-audit", {
      store_url: storeUrl,
    });
    const storeDomain = new URL(storeUrl).hostname;

    setSubmitting(true);
    setCard(null);
    emitMarketingEvent({
      event: "audit_url_submitted",
      page,
      placement,
      href: nextSignupUrl,
      // Short, un-truncatable dimension for the funnel report (GA4 caps
      // parameter values at 100 chars and the href alone nearly hits it).
      store_domain: storeDomain,
    });

    abortRef.current = new AbortController();
    const teaser = await probeStoreForTeaser(storeUrl, abortRef.current.signal);

    if (!teaser) {
      // Teaser lane dark or unreachable: the funnel must behave exactly as it
      // did before the lane existed — straight to signup.
      emitMarketingEvent({
        event: "audit_teaser_shown",
        page,
        placement,
        store_domain: storeDomain,
        teaser_state: "fallback",
      });
      window.setTimeout(() => {
        window.location.assign(nextSignupUrl);
      }, 150);
      return;
    }

    const nextCard = cardForTeaser(teaser);

    // The visitor's own run. Threading it into the signup URL is the whole
    // conversion mechanic: the portal claims THIS run after registration, so
    // the check they just watched becomes their audit instead of a throwaway.
    // Absent on the paths that reuse another lane's route — the funnel never
    // hands out a run id it does not own.
    const runId = teaser.audit_run_id ?? null;
    const signupWithRun = runId
      ? buildMerchantSignupRedirectUrl("ai-readiness-audit", {
          store_url: storeUrl,
          audit_run_id: runId,
        })
      : nextSignupUrl;

    emitMarketingEvent({
      event: "audit_teaser_shown",
      page,
      placement,
      store_domain: storeDomain,
      teaser_state: nextCard,
      // Distinguishes a visitor who leaves with a claimable audit from one who
      // leaves with only a teaser — the funnel's actual conversion split.
      signup_carries_run: runId ? "true" : "false",
    });
    setAuditRun(null);
    setSignupUrl(signupWithRun);
    setCard(nextCard);
    setSubmitting(false);

    // AFTER the card is on screen, never before it. The signals only decorate
    // a card that is already correct without them, so blocking the render on
    // this call bought nothing and made every id-bearing submit wait on a
    // second round trip — with a hung upstream stalling the button until the
    // load balancer gave up.
    if (runId) {
      const run = await fetchPublicAuditRun(runId, abortRef.current.signal);
      if (run && !abortRef.current.signal.aborted) setAuditRun(run);
    }
  };

  if (card && signupUrl) {
    const copy = CARD_COPY[card];
    const Icon = copy.icon;
    return (
      <div
        role="status"
        className="max-w-xl space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.18)]"
      >
        <div className="flex items-start gap-3">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold text-slate-900">{copy.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{copy.body}</p>
          </div>
        </div>
        {auditRun && auditRun.observed_signals.length > 0 ? (
          <dl className="space-y-1.5 rounded-xl bg-slate-50 px-4 py-3">
            {/* Deduped by signal: the projection does not dedup, and the
                reprobe job deposits onto the same run with a fresh
                idempotency key, so a run can hold two acceptance_signal rows
                — which would render the line twice under a duplicate key. */}
            {dedupeSignals(auditRun.observed_signals).map((signal) => (
              <div
                key={signal.signal}
                className="flex items-baseline justify-between gap-3 text-sm"
              >
                <dt className="text-slate-700">
                  {SIGNAL_LABEL[signal.signal] ?? signal.signal}
                </dt>
                <dd className="shrink-0 text-xs uppercase tracking-wide text-slate-500">
                  {signal.evidence_level
                    ? EVIDENCE_LABEL[signal.evidence_level]
                    : "observed"}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
        {auditRun?.claimable ? (
          <p className="text-sm leading-6 text-slate-600">
            This check is saved as your audit. Create your free account and it
            becomes yours — we pick up from here rather than starting over.
          </p>
        ) : null}
        <Button asChild className={primaryButtonClass}>
          <a
            href={signupUrl}
            onClick={() =>
              emitMarketingEvent({
                event: "audit_teaser_cta_clicked",
                page,
                placement,
                href: signupUrl,
                teaser_state: card,
              })
            }
          >
            Get your full free audit
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          inputMode="url"
          autoComplete="url"
          name="store_url"
          placeholder="yourstore.com"
          aria-label="Your store URL"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "audit-url-capture-error" : undefined}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) setError(null);
          }}
          className={inputClass}
        />
        <Button type="submit" disabled={submitting} className={primaryButtonClass}>
          {submitting ? "Checking your store…" : "Audit my store"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      {error ? (
        <p id="audit-url-capture-error" role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : (
        <p className="text-sm leading-6 text-slate-600">
          Free — we run a live agent-readiness check on this URL, then your full
          audit is one signup away.
        </p>
      )}
    </form>
  );
};

export default AuditUrlCaptureForm;
