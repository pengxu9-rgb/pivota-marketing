export type MarketingEventPayload = {
  event: string;
  page: string;
  placement: string;
  href?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function emitMarketingEvent(payload: MarketingEventPayload) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("pivota:marketing-event", {
      detail: payload,
    }),
  );

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}
