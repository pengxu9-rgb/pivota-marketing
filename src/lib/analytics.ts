export type MarketingEventPayload = {
  event: string;
  page: string;
  placement: string;
  href?: string;
  interest?: string;
  /** Hostname only. GA4 truncates parameter values at 100 chars and a full
   *  signup href already burns ~70, so the funnel's most important dimension
   *  gets its own short param instead of being cut off mid-URL. */
  store_domain?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function emitMarketingEvent(payload: MarketingEventPayload) {
  if (typeof window === "undefined") return;

  // Snapshot the params BEFORE the dataLayer push: gtag.js annotates pushed
  // objects in place (gtm.uniqueEventId), and that key would otherwise ride
  // along to GA4 as a junk event parameter.
  const { event, ...params } = payload;

  window.dispatchEvent(
    new CustomEvent("pivota:marketing-event", {
      detail: payload,
    }),
  );

  // Tag Manager convention, kept for any future GTM/pixel layering. The gtag
  // runtime annotates this object but never dispatches a plain push as an
  // event, so it does NOT double-count today — if GTM is ever added, drop one
  // of these two paths or every event fires twice.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // GA4 (gtag.js) — the path that actually reports. Explicit because gtag
  // dispatches only its own command queue, never a raw dataLayer push; this
  // is what makes audit_url_submitted (funnel stage 1) a real GA4 event.
  // No-ops when the measurement id is unset (preview/dev): gtag never loads.
  window.gtag?.("event", event, params);
}
