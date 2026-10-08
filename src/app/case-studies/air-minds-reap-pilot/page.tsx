import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths, siteUrl } from "@/lib/marketing";
import { airMindsReapPilot as pilot, founder, pressLastUpdatedIso, pressLastUpdatedLabel } from "@/lib/press";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const description =
  "How AIR, Minds by Animoca Brands, Reap and Pivota plan to let an AI agent buy for a verified user: who does what, the proposed transaction lifecycle, and what has and has not happened yet.";

export const metadata = buildMarketingMetadata({
  title: "AIR, Minds, Reap and Pivota pilot: case study | Pivota",
  description,
  path: pilot.path,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Case studies", path: routePaths.caseStudies },
  { name: "AIR, Minds, Reap and Pivota pilot", path: pilot.path },
]);

const openApiUrl = "https://api.pivota.cc/agent/docs/openapi.json";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pilot.title,
  description,
  url: `${siteUrl}${pilot.path}`,
  datePublished: pilot.announcedIso,
  dateModified: pressLastUpdatedIso,
  author: { "@id": `${siteUrl}/#organization` },
  publisher: { "@id": `${siteUrl}/#organization` },
  about: [
    { "@type": "Organization", name: "Animoca Brands" },
    { "@type": "Organization", name: "Reap" },
    { "@id": `${siteUrl}/#organization` },
  ],
  citation: [pilot.releaseUrl, pilot.airBlogUrl, openApiUrl],
} as const;

const linkClass = "text-foreground underline underline-offset-4 hover:decoration-primary";
const cardClass = "rounded-2xl border border-border/70 bg-background/55 px-4 py-3";

export default function AirMindsReapPilotPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="case-study-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="case-study-article-jsonld" data={articleJsonLd} />

      <main id="main-content" className="overflow-hidden">
        <section className="marketing-hero relative">
          <div className="bg-site-grid absolute inset-0 opacity-15" />
          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Case studies", href: routePaths.caseStudies },
                  { label: "AIR, Minds, Reap and Pivota pilot" },
                ]}
              />
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Case study · Announced {pilot.announcedLabel}
                </p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{pilot.title}</h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  AIR and Minds by Animoca Brands, Reap and Pivota announced a partnership that aims to let
                  an AI agent buy on behalf of a verified user: proving whom it represents, using benefits
                  the user has earned, and spending only within limits the user approved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-6">
            <div className="section-frame space-y-3 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">Status</h2>
              <p className="text-base leading-8 text-muted-foreground">
                Announced on {pilot.announcedLabel}. The partnership will start with a controlled
                demonstration featuring a single merchant integration. As of {pressLastUpdatedLabel},
                no transaction results have been published, so this page reports no outcomes, volumes
                or revenue.
              </p>
            </div>

            <div className="section-frame space-y-4 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">The problem</h2>
              <p className="text-base leading-8 text-muted-foreground">
                An agent shopping for a person has two jobs that discovery alone does not cover. It
                has to act with that person&apos;s verified authority, including the offers and
                benefits they are entitled to, without exposing their personal data. And it has to
                decide where and how the purchase should actually be executed: which product, which
                merchant and which transaction path.
              </p>
            </div>

            <div className="section-frame space-y-4 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">Who does what in the proposed architecture</h2>
              <dl className="grid gap-3 text-sm leading-7">
                {pilot.roles.map((item) => (
                  <div key={item.party} className={cardClass}>
                    <dt className="font-semibold text-foreground">{item.party}</dt>
                    <dd className="mt-1 text-muted-foreground">{item.role}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="section-frame space-y-4 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">The proposed transaction lifecycle</h2>
              <ol className="list-decimal space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                {pilot.lifecycle.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-sm leading-7 text-muted-foreground">
                This is the lifecycle the announcement describes for the demonstration. It is not a
                record of a completed purchase.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="section-frame space-y-4 px-6 py-8 sm:px-8">
                <h2 className="text-2xl font-semibold tracking-tight">Boundaries</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                  <li>The merchant remains the merchant of record.</li>
                  <li>Pivota does not touch the funds flow: it does not hold customer funds, issue cards or process payments.</li>
                  <li>Payment credentials come from Reap and are scoped to a merchant, an amount and a timeframe.</li>
                  <li>Users will choose which identity credentials their agent can present, through AIR.</li>
                </ul>
              </div>
              <div className="section-frame space-y-4 px-6 py-8 sm:px-8">
                <h2 className="text-2xl font-semibold tracking-tight">Integration contract</h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Pivota&apos;s public{" "}
                  <a href={openApiUrl} className={linkClass}>
                    OpenAPI
                  </a>{" "}
                  documents Reap purchase routes under{" "}
                  <code className="font-mono text-foreground">/agent/v2/commerce/reap/purchases</code>: prepare,
                  start, resume, recover and read. They define how the integration is called. They are
                  not evidence of completed purchases.
                </p>
              </div>
            </div>

            <div className="section-frame space-y-4 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">What this case study does not claim</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                <li>It does not name the merchant in the demonstration.</li>
                <li>It does not say the flow is generally available, or in which markets.</li>
                <li>It reports no transaction count, conversion rate, order value or revenue.</li>
              </ul>
            </div>

            <figure className="section-frame space-y-3 px-6 py-8 sm:px-10">
              <blockquote className="text-lg italic leading-8 text-foreground">&ldquo;{pilot.peng.quote}&rdquo;</blockquote>
              <figcaption className="text-sm text-muted-foreground">
                {founder.name}, {founder.jobTitle}, Pivota ({pilot.peng.source})
              </figcaption>
            </figure>

            <div className="section-frame space-y-3 px-6 py-8 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight">Sources</h2>
              <ul className="space-y-2 text-sm leading-7">
                <li>
                  <a href={pilot.releaseUrl} className={linkClass}>
                    Animoca Brands press release, {pilot.announcedLabel}
                  </a>
                </li>
                <li>
                  <a href={pilot.airBlogUrl} className={linkClass}>
                    AIR blog (Moca Network), {pilot.announcedLabel}
                  </a>
                </li>
                <li>
                  <a href={openApiUrl} className={linkClass}>
                    Pivota public OpenAPI
                  </a>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                More announcements are on the{" "}
                <Link href={routePaths.press} className={linkClass}>
                  press page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
