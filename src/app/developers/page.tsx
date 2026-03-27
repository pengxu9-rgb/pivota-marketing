import Link from "next/link";
import { ArrowRight, BookText, Boxes, Code2, CreditCard, RefreshCw } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/schema";

const docSurfaces = [
  {
    icon: Boxes,
    title: "Catalog and discovery",
    body: "Learn how product data, offers, and variants become queryable to LLMs and agents.",
  },
  {
    icon: CreditCard,
    title: "Merchant-native checkout",
    body: "See how agent demand routes into merchant-controlled checkout and payment flows.",
  },
  {
    icon: RefreshCw,
    title: "Payment and write-back",
    body: "Review the execution state model across authorization, payment-state sync, and write-back.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Docs Home | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota is the merchant gateway for agent-native commerce. This docs home explains the public workflow and API surfaces behind merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  path: routePaths.developers,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Docs", path: routePaths.developers },
]);

const softwareJsonLd = buildSoftwareApplicationJsonLd({
  name: "Pivota Docs",
  description:
    "Public docs for the merchant gateway for agent-native commerce across catalog, checkout, payment, and post-purchase systems.",
  path: routePaths.developers,
  featureList: [
    "Catalog and offer queryability",
    "Merchant-native checkout workflows",
    "Payment-state sync and write-back",
  ],
});

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="developers-software-jsonld" data={softwareJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Docs" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Public docs</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Docs home for the merchant gateway for agent-native commerce.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the merchant gateway for agent-native commerce.
                    </p>
                    <p className="mt-2">
                      The developer surface explains how LLM and agent traffic connects to
                      merchant-native transactions across catalog, checkout, payment, and
                      post-purchase systems.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.apiOverview}>
                        API overview
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <a href="https://developer.pivota.cc/login">Developer Login</a>
                    </Button>
                  </div>
                </div>

                <div className="section-frame p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <BookText className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">What this docs home covers</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Core definitions, workflow explanations, and API framing stay public so LLMs,
                    agents, and human readers can inspect the execution model behind agentic
                    commerce directly in raw HTML.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                      Category page
                    </Link>
                    <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                      Workflow page
                    </Link>
                    <Link href={routePaths.faq} className="text-primary hover:underline">
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {docSurfaces.map((surface) => (
                  <article key={surface.title} className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <surface.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold tracking-tight">{surface.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{surface.body}</p>
                  </article>
                ))}
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">Public workflow first</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
                      This docs home starts with the category definition before deeper API detail.
                      Read the workflow model, then go to the API overview for the public
                      integration surfaces.
                    </p>
                  </div>
                  <Link href={routePaths.apiOverview} className="text-sm text-primary hover:underline">
                    Open API overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
