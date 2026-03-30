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
  "h-11 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-[0_18px_34px_-22px_rgba(15,23,42,0.42)] transition-all hover:bg-slate-800 focus-visible:ring-slate-900/30";
const secondaryButtonClass =
  "h-11 rounded-xl border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.18)] transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900";

const AiReadinessHeroActions = ({ signupHref }: AiReadinessHeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedMerchantCtaLink
        href={signupHref}
        eventName="ai_readiness_hero_primary_click"
        page={routePaths.aiReadiness}
        placement="hero_primary"
        className={primaryButtonClass}
      >
        Get your readiness analysis
        <ArrowRight className="h-4 w-4" />
      </TrackedMerchantCtaLink>

      <Button
        type="button"
        variant="outline"
        className={secondaryButtonClass}
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
        Connect your store
      </Button>
    </div>
  );
};

export default AiReadinessHeroActions;
