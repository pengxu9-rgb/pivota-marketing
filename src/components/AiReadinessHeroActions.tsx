"use client";

import { ArrowRight } from "lucide-react";
import TrackedMerchantCtaLink from "@/components/TrackedMerchantCtaLink";
import { Button } from "@/components/ui/button";
import { emitMarketingEvent } from "@/lib/analytics";
import { routePaths } from "@/lib/marketing";

type AiReadinessHeroActionsProps = {
  signupHref: string;
};

const primaryButtonClass =
  "h-11 rounded-xl bg-gradient-to-r from-primary via-cyan-400 to-accent px-5 text-sm font-semibold text-slate-950 shadow-[0_20px_36px_-22px_rgba(14,165,233,0.4)] transition-all hover:brightness-[1.03] focus-visible:ring-primary/30";
const secondaryButtonClass =
  "h-11 rounded-xl border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.18)] transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900";

const AiReadinessHeroActions = ({ signupHref }: AiReadinessHeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedMerchantCtaLink
        id="ai-readiness-hero-primary-cta"
        href={signupHref}
        eventName="ai_readiness_hero_primary_click"
        page={routePaths.aiReadiness}
        placement="hero_primary"
        className={primaryButtonClass}
      >
        Check my store
        <ArrowRight className="h-4 w-4" />
      </TrackedMerchantCtaLink>

      <Button
        type="button"
        variant="outline"
        className={`${secondaryButtonClass} hidden sm:inline-flex`}
        onClick={() => {
          emitMarketingEvent({
            event: "ai_readiness_hero_secondary_click",
            page: routePaths.aiReadiness,
            placement: "hero_secondary",
            href: "#how-it-works",
          });

          const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          document.getElementById("how-it-works")?.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }}
      >
        How it works
      </Button>
    </div>
  );
};

export default AiReadinessHeroActions;
