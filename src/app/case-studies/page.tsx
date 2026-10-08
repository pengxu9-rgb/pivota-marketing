import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths, siteUrl } from "@/lib/marketing";
import { airMindsReapPilot, pressLastUpdatedLabel } from "@/lib/press";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "Case studies | Pivota",
  description:
    "Pivota case studies, each with its status, the role of every party, and links to primary sources. Outcomes are reported only once they are published.",
  path: routePaths.caseStudies,
});

const caseStudies = [
  {
    path: airMindsReapPilot.path,
    title: airMindsReapPilot.title,
    status: `Announced ${airMindsReapPilot.announcedLabel} · demonstration planned`,
    summary:
      "A proposed architecture for a Minds agent buying for a verified user: AIR for identity, Reap for scoped payment credentials, Pivota for the product, merchant and transaction path. The merchant remains the merchant of record.",
  },
] as const;

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Case studies", path: routePaths.caseStudies },
]);

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pivota case studies",
  url: `${siteUrl}${routePaths.caseStudies}`,
  about: { "@id": `${siteUrl}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${item.path}`,
      name: item.title,
    })),
  },
} as const;

const linkClass = "text-foreground underline underline-offset-4 hover:decoration-primary";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="case-studies-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="case-studies-collection-jsonld" data={collectionJsonLd} />

      <main id="main-content" className="overflow-hidden">
        <section className="marketing-hero relative">
          <div className="bg-site-grid absolute inset-0 opacity-15" />
          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome items={[{ label: "Home", href: routePaths.home }, { label: "Case studies" }]} />
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Case studies</p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Pivota case studies</h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  Each case study states its status, what each party does, and links to its primary
                  sources. Outcomes are reported only once they are published. Last updated{" "}
                  {pressLastUpdatedLabel}.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-6">
            {caseStudies.map((item) => (
              <article key={item.path} className="section-frame space-y-3 px-6 py-8 sm:px-10">
                <p className="text-sm uppercase tracking-[0.18em] text-primary-ink">{item.status}</p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  <Link href={item.path} className={linkClass}>
                    {item.title}
                  </Link>
                </h2>
                <p className="text-base leading-8 text-muted-foreground">{item.summary}</p>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">
              Announcements and source links are on the{" "}
              <Link href={routePaths.press} className={linkClass}>
                press page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
