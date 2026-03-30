"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import TrackedMerchantCtaLink from "@/components/TrackedMerchantCtaLink";
import { emitMarketingEvent } from "@/lib/analytics";
import { routePaths } from "@/lib/marketing";

type AiReadinessMobileStickyCtaProps = {
  signupHref: string;
};

const stickyButtonClass =
  "h-12 w-full rounded-xl bg-gradient-to-r from-primary via-cyan-400 to-accent px-5 text-sm font-semibold text-slate-950 shadow-[0_20px_36px_-22px_rgba(14,165,233,0.4)] transition-all hover:brightness-[1.03] focus-visible:ring-primary/30";

const AiReadinessMobileStickyCta = ({ signupHref }: AiReadinessMobileStickyCtaProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [hasTrackedImpression, setHasTrackedImpression] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 639px)");
    const sync = () => setIsMobile(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isMobile || typeof window === "undefined") return;

    const heroCta = document.getElementById("ai-readiness-hero-primary-cta");
    if (!heroCta) {
      setHeroCtaVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCtaVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, [isMobile]);

  const shouldShow = isMobile && !heroCtaVisible;

  useEffect(() => {
    if (!shouldShow || hasTrackedImpression) return;

    emitMarketingEvent({
      event: "ai_readiness_mobile_sticky_cta_impression",
      page: routePaths.aiReadiness,
      placement: "mobile_sticky_cta",
      href: signupHref,
    });
    setHasTrackedImpression(true);
  }, [hasTrackedImpression, shouldShow, signupHref]);

  if (!shouldShow) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+0.5rem)] z-40 px-3 sm:hidden">
      <div className="pointer-events-auto rounded-2xl border border-slate-200/90 bg-white/94 p-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.26)] backdrop-blur motion-safe:transition-transform motion-safe:duration-200">
        <TrackedMerchantCtaLink
          href={signupHref}
          eventName="ai_readiness_mobile_sticky_cta_click"
          page={routePaths.aiReadiness}
          placement="mobile_sticky_cta"
          className={stickyButtonClass}
          aria-label="Check my store"
        >
          Check my store
          <ArrowRight className="h-4 w-4" />
        </TrackedMerchantCtaLink>
      </div>
    </div>
  );
};

export default AiReadinessMobileStickyCta;
