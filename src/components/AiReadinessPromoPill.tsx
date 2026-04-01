"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { emitMarketingEvent } from "@/lib/analytics";
import { appendCurrentSearchParamsToPath } from "@/lib/merchant-signup";
import { routePaths } from "@/lib/marketing";

const DISMISSED_AT_KEY = "pivota_ai_readiness_promo_dismissed_at";
const DISMISSED_VIEWS_REMAINING_KEY = "pivota_ai_readiness_promo_dismissed_views_remaining";
const LEGACY_CLICKED_SESSION_KEY = "pivota_ai_readiness_promo_clicked_session";
const LEGACY_DISMISSED_UNTIL_KEY = "pivota_ai_readiness_promo_dismissed_until";
const DISMISS_VIEWS = 10;
const DISMISS_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

const AiReadinessPromoPill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [href, setHref] = useState<string>(routePaths.aiReadiness);
  const impressionTrackedRef = useRef(false);

  useEffect(() => {
    try {
      const dismissedAt = Number(localStorage.getItem(DISMISSED_AT_KEY) ?? "0");
      const dismissedViewsRemaining = Number(
        localStorage.getItem(DISMISSED_VIEWS_REMAINING_KEY) ?? "0",
      );

      setHref(
        appendCurrentSearchParamsToPath(
          routePaths.aiReadiness,
          new URLSearchParams(window.location.search),
        ),
      );

      if (localStorage.getItem(LEGACY_DISMISSED_UNTIL_KEY)) {
        localStorage.removeItem(LEGACY_DISMISSED_UNTIL_KEY);
      }

      if (sessionStorage.getItem(LEGACY_CLICKED_SESSION_KEY)) {
        sessionStorage.removeItem(LEGACY_CLICKED_SESSION_KEY);
      }

      const stillInDismissWindow =
        dismissedAt > 0 && Date.now() - dismissedAt < DISMISS_WINDOW_MS;

      if (!stillInDismissWindow) {
        localStorage.removeItem(DISMISSED_AT_KEY);
        localStorage.removeItem(DISMISSED_VIEWS_REMAINING_KEY);
        setIsVisible(true);
        return;
      }

      if (dismissedViewsRemaining > 0) {
        localStorage.setItem(
          DISMISSED_VIEWS_REMAINING_KEY,
          String(dismissedViewsRemaining - 1),
        );
        setIsVisible(false);
        return;
      }

      setIsVisible(true);
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
        <div className="relative rounded-[1.35rem] border border-white/20 bg-gradient-to-r from-primary via-cyan-400 to-accent p-[1px] shadow-[0_18px_45px_rgba(14,165,233,0.32)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),rgba(17,24,39,0))] opacity-90 blur-2xl motion-safe:animate-glow motion-reduce:animate-none" />

          <div className="relative flex items-center gap-2 rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(8,15,24,0.9),rgba(16,24,40,0.84))] px-2 py-2.5">
            <Link
              href={href}
              className="group pointer-events-auto flex min-w-0 flex-1 items-center gap-3 rounded-[1.1rem] px-2 py-1 text-left outline-none transition-transform duration-300 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Open the AI readiness landing page"
              onClick={() => {
                emitMarketingEvent({
                  event: "ai_readiness_promo_click",
                  page: routePaths.home,
                  placement: "homepage_floating_promo",
                  href,
                });
              }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/14 text-white shadow-[0_0_18px_rgba(45,212,191,0.28)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">
                  See what to fix first
                </span>
                <span className="block truncate text-xs text-white/80">
                  Check your path from agent demand to transaction
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              className="pointer-events-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/12 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Dismiss AI readiness promotion"
              onClick={() => {
                try {
                  localStorage.setItem(DISMISSED_AT_KEY, String(Date.now()));
                  localStorage.setItem(DISMISSED_VIEWS_REMAINING_KEY, String(DISMISS_VIEWS));
                  localStorage.removeItem(LEGACY_DISMISSED_UNTIL_KEY);
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
