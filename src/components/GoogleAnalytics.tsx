import Script from "next/script";

/** GA4 (gtag.js) loader.
 *
 * Renders nothing unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so preview
 * deploys and local dev never pollute production analytics. `afterInteractive`
 * keeps the tag off the critical render path.
 *
 * We load gtag.js directly rather than via Tag Manager: every event this site
 * emits is already funnelled through `emitMarketingEvent` (src/lib/analytics.ts),
 * which forwards to gtag — so GTM's dataLayer indirection would buy nothing but
 * a second account and a publish step. Revisit if third-party pixels (ads,
 * LinkedIn) ever need to be managed without a deploy.
 */
export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
