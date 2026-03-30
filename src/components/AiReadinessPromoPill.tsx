"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { emitMarketingEvent } from "@/lib/analytics";
import { appendCurrentSearchParamsToPath } from "@/lib/merchant-signup";
import { routePaths } from "@/lib/marketing";

const DISMISSED_UNTIL_KEY = "pivota_ai_readiness_promo_dismissed_until";
const CLICKED_SESSION_KEY = "pivota_ai_readiness_promo_clicked_session";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

const AiReadinessPromoPill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [href, setHref] = useState<string>(routePaths.aiReadiness);
  const impressionTrackedRef = useRef(false);

  useEffect(() => {
    try {
      const dismissedUntil = Number(localStorage.getItem(DISMISSED_UNTIL_KEY) ?? "0");
      const clickedThisSession = sessionStorage.getItem(CLICKED_SESSION_KEY) === "true";
      const now = Date.now();

      setHref(
        appendCurrentSearchParamsToPath(
          routePaths.aiReadiness,
          new URLSearchParams(window.location.search),
        ),
      );
      setIsVisible(!clickedThisSession && dismissedUntil < now);
    } catch {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible || impressionTrackedRef.current) return;

    impressionTrackedRef.current = true;
    emitMarketingEvent({
      event: "ai_readiness_promo_impression",
      page: routePaths.home,
      placement: "homepage_floating_promo",
      href,
    });
  }, [href, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 w-[min(calc(100vw-1.25rem),22rem)] -translate-x-1/2 sm:bottom-6 sm:w-[21.5rem] lg:left-auto lg:right-6 lg:w-[22rem] lg:translate-x-0">
      <div className="motion-safe:animate-float motion-reduce:animate-none">
        <div className="relative rounded-full border border-primary/25 bg-background/90 p-1 shadow-[0_16px_40px_rgba(5,10,18,0.55)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.18),rgba(17,24,39,0))] opacity-80 blur-2xl motion-safe:animate-glow motion-reduce:animate-none" />

          <div className="relative flex items-center gap-2 rounded-full border border-white/6 bg-card/85 px-2 py-2.5">
            <Link
              href={href}
              className="group pointer-events-auto flex min-w-0 flex-1 items-center gap-3 rounded-full px-2 py-1 text-left outline-none transition-transform duration-300 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open the AI readiness landing page"
              onClick={() => {
                try {
                  sessionStorage.setItem(CLICKED_SESSION_KEY, "true");
                } catch {
                  // Ignore storage failures and still allow navigation.
                }

                emitMarketingEvent({
                  event: "ai_readiness_promo_click",
                  page: routePaths.home,
                  placement: "homepage_floating_promo",
                  href,
                });
              }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/12 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">
                  Free AI Readiness Analysis
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  Connect your store and get a clear optimization plan
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              className="pointer-events-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Dismiss AI readiness promotion"
              onClick={() => {
                try {
                  localStorage.setItem(
                    DISMISSED_UNTIL_KEY,
                    String(Date.now() + DISMISS_DURATION_MS),
                  );
                } catch {
                  // Ignore storage failures and still hide the promo for this view.
                }
                setIsVisible(false);
              }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiReadinessPromoPill;
