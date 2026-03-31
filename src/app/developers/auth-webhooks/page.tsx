import Link from "next/link";
import { ChevronRight, KeyRound, ShieldCheck, Webhook } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const signatureSnippet = `import crypto from "crypto";

export function verifyPivotaSignature({ rawBody, timestamp, signature, secret }) {
  const payload = \`${"${timestamp}.${rawBody}"}\`;
  const digest = crypto
    .createHmac("sha256", secret)
    .update(payload, "utf8")
    .digest("hex");

  return signature === \`v1=\${digest}\`;
}`;

const webhookEvents = [
  "order.created",
  "order.payment_attempted",
  "order.payment_succeeded",
  "order.payment_failed",
  "order.completed",
  "order.refunded",
  "order.cancelled",
  "api.rate_limited",
  "api.request_failed",
  "webhook.test",
] as const;

export const metadata = buildMarketingMetadata({
  title: "Auth & Webhooks | Pivota Agent Integration",
  description:
    "Public auth and webhook model for Pivota, including X-API-Key usage, managed webhook receiver patterns, signature verification, and event delivery guidance.",
  path: routePaths.developersAuthWebhooks,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
  { name: "Auth & Webhooks", path: routePaths.developersAuthWebhooks },
]);

export default function DevelopersAuthWebhooksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-auth-webhooks-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "Auth & Webhooks" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Auth & webhooks</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Keep authentication and downstream delivery on the core production contract.
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    The public integration model uses API keys for authenticated requests and
                    webhooks for downstream delivery, status visibility, and operational sync. This
                    is the default production surface even when higher-level protocol layers exist.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      API key auth
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Send your key in the <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">X-API-Key</code> header for authenticated production requests.
                    </p>
                  </div>
                  <div className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Webhook className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      Webhook lifecycle
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Configure destination URL, subscribe to events, send a test delivery, inspect delivery history, and retry failures from the same operational model.
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Signature verification
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Verify incoming deliveries with <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">X-Pivota-Timestamp</code> and <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">X-Pivota-Signature</code>. The full signing secret is shown only once when rotated.
                </p>
                <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                  <code>{signatureSnippet}</code>
                </pre>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Managed receiver pattern
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The branded managed receiver pattern follows
                    {" "}
                    <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">
                      https://api.pivota.cc/agents/{"{agent_id}"}/webhooks/managed-inbox
                    </code>
                    {" "}
                    and can be used to validate delivery before switching to a merchant or partner endpoint.
                  </p>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                      Core event catalog
                    </h2>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {webhookEvents.map((eventType) => (
                      <div key={eventType} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                        <p className="font-mono text-sm text-foreground">{eventType}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.developersFirstCall} className="text-primary hover:underline">
                  First call
                </Link>
                <Link href={routePaths.developersRequestTypes} className="text-primary hover:underline">
                  Request types
                </Link>
                <Link href={routePaths.developersProtocols} className="inline-flex items-center text-primary hover:underline">
                  Protocols & compatibility
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
