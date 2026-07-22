"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emitMarketingEvent } from "@/lib/analytics";
import { buildMerchantSignupRedirectUrl } from "@/lib/merchant-signup";

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

const AuditUrlCaptureForm = ({ page, placement }: AuditUrlCaptureFormProps) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storeUrl = normalizeStoreUrl(value);
    if (!storeUrl) {
      setError("Enter your store URL, e.g. yourstore.com");
      return;
    }

    const signupUrl = buildMerchantSignupRedirectUrl("ai-readiness-audit", {
      store_url: storeUrl,
    });

    emitMarketingEvent({
      event: "audit_url_submitted",
      page,
      placement,
      href: signupUrl,
    });

    window.location.assign(signupUrl);
  };

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
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) setError(null);
          }}
          className={inputClass}
        />
        <Button type="submit" className={primaryButtonClass}>
          Audit my store
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      {error ? (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : (
        <p className="text-sm leading-6 text-slate-600">
          Free — sign up in under a minute, then your first audit runs on this URL.
        </p>
      )}
    </form>
  );
};

export default AuditUrlCaptureForm;
