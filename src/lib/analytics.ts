export type MarketingEventPayload = {
  event: string;
  page: string;
  placement: string;
  href?: string;
  interest?: string;
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

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // GA4 (gtag.js). A raw dataLayer.push is Tag Manager's convention and gtag
  // ignores it, so forward the event explicitly — this is what makes
  // audit_url_submitted (funnel stage 1) a real GA4 event. No-ops when the
  // measurement id is unset (preview/dev) since gtag never loads.
  window.gtag?.("event", event, { ...params });
}
