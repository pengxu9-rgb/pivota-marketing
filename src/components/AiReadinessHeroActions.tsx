"use client";

import { ArrowRight } from "lucide-react";
import TrackedMerchantCtaLink from "@/components/TrackedMerchantCtaLink";
import { Button } from "@/components/ui/button";
import { emitMarketingEvent } from "@/lib/analytics";
import { routePaths } from "@/lib/marketing";

type AiReadinessHeroActionsProps = {
  signupHref: string;
};

const AiReadinessHeroActions = ({ signupHref }: AiReadinessHeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedMerchantCtaLink
        href={signupHref}
        eventName="ai_readiness_hero_primary_click"
        page={routePaths.aiReadiness}
        placement="hero_primary"
        className="btn-hero h-11 px-5 text-sm"
      >
        Get your readiness analysis
        <ArrowRight className="h-4 w-4" />
      </TrackedMerchantCtaLink>

      <Button
        type="button"
        variant="outline"
        className="h-11 px-5 text-sm"
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
