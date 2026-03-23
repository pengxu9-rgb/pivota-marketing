import Link from "next/link";
import { ArrowRight, Boxes, CreditCard, RefreshCw, ShieldCheck } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  lastUpdatedLabel,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/schema";

const apiSurfaces = [
  {
    icon: Boxes,
    title: "Catalog and offer queryability",
    body: "The API model starts with product, offer, and variant structure so LLM and agent traffic can resolve into a merchant path.",
  },
  {
    icon: CreditCard,
    title: "Merchant-native execution",
    body: "Execution APIs connect demand to merchant-native checkout and payment flows instead of moving merchants into a separate stack.",
  },
  {
    icon: RefreshCw,
    title: "Payment-state sync and write-back",
    body: "Order state, authorization state, and payment state stay connected to merchant systems over time.",
  },
  {
    icon: ShieldCheck,
    title: "Shared authorization and orchestration",
    body: "The workflow keeps merchant systems in control while providing one execution layer across LLM surfaces.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "API Overview | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota is the merchant gateway for agent-native commerce. This API overview explains the workflow across catalog queryability, merchant-native checkout, payment-state sync, and execution write-back.",
  path: routePaths.apiOverview,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Docs", path: routePaths.developers },
  { name: "API overview", path: routePaths.apiOverview },
]);

const softwareJsonLd = buildSoftwareApplicationJsonLd({
  name: "Pivota API Overview",
  description:
    "API overview for the merchant gateway for agent-native commerce.",
  path: routePaths.apiOverview,
  featureList: [
    "Catalog queryability",
    "Merchant-native checkout workflows",
    "Payment-state sync",
    "Execution write-back",
  ],
});

export default function ApiOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="api-overview-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="api-overview-software-jsonld" data={softwareJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-8">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Docs", href: routePaths.developers },
                  { label: "API overview" },
                ]}
                updatedLabel={lastUpdatedLabel}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Public API overview
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    API overview for the merchant gateway for agent-native commerce.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the merchant gateway for agent-native commerce.
                    </p>
                    <p className="mt-2">
                      The API model connects catalog queryability, merchant-native checkout,
                      payment-state sync, and write-back into one merchant-controlled workflow.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <a href="https://developer.pivota.cc/login">
                        Developer Login
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.howPivotaWorks}>Workflow page</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Workflow before endpoints
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    This API overview starts with the workflow model because the important point is
                    not an isolated endpoint. The important point is how discovery, execution,
                    checkout, payment, and write-back connect into one merchant-native transaction
                    path.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {apiSurfaces.map((surface) => (
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
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Example workflow shape
                </p>
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-foreground">
                  <code>{`{
  "demand": "LLM or agent request",
  "discovery": "catalog, offers, variants",
  "execution": "merchant-native checkout path",
  "payment": "routing and payment-state sync",
  "write_back": "order and payment state"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
