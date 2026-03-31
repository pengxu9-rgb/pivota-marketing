import Link from "next/link";
import { ArrowRight, CreditCard, RefreshCw, Search, Store } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  comparisonRows,
  merchantSignupPath,
  productCards,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const gatewayFunctions = [
  {
    icon: Search,
    title: "Makes catalogs queryable to LLMs and agents",
    body: "Structures products, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    icon: Store,
    title: "Routes demand into merchant-native checkout",
    body: "Connects LLM and agent traffic to merchant-controlled checkout and payment flows.",
  },
  {
    icon: CreditCard,
    title: "Supports payment routing and authorization",
    body: "Works with existing PSP relationships instead of replacing the merchant payment stack.",
  },
  {
    icon: RefreshCw,
    title: "Writes execution state back",
    body: "Keeps order state, payment state, and post-purchase continuity connected to merchant systems.",
  },
] as const;

const boundaries = [
  "Not a marketplace",
  "Not an inventory holder",
  "Not a warehousing or logistics operator",
  "Not a checkout-only tool",
  "Not a service business disguised as infrastructure",
] as const;

export const metadata = buildMarketingMetadata({
  title: "What Is a Merchant Gateway for Agent-Native Commerce? | Pivota",
  description:
    "A merchant gateway is the execution layer between LLM or agent demand and merchant-native transactions. Pivota makes merchants more queryable across agent surfaces, routes demand into merchant-native checkout and payment flows, and writes execution state back into existing merchant systems.",
  path: routePaths.merchantGateway,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  {
    name: "Merchant gateway for agent-native commerce",
    path: routePaths.merchantGateway,
  },
]);

export default function MerchantGatewayCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="merchant-gateway-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Merchant gateway for agent-native commerce" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Category definition
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    What is a merchant gateway for agent-native commerce?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      A merchant gateway is the execution layer between LLM or agent demand and
                      merchant-native transactions.
                    </p>
                    <p className="mt-2">
                      Pivota makes merchants more queryable across agent surfaces, routes demand
                      into merchant-native checkout and payment flows, and writes execution state
                      back into existing merchant systems.
                    </p>
                  </AnswerBlock>
                  <p className="max-w-3xl text-sm leading-7 text-foreground/90">
                    Shopify is strong for default AI-channel selling paths. Pivota is the
                    commerce layer that agents can call across merchant-native checkout, payments,
                    and write-back.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={merchantSignupPath}>
                        Merchant signup
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.howPivotaWorks}>How Pivota works</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Merchant discovery",
                    "Merchant-native checkout",
                    "Payment and write-back",
                  ].map((item) => (
                    <div key={item} className="section-frame px-5 py-5">
                      <p className="text-sm font-semibold text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Why this layer exists
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      Merchant execution is still fragmented.
                    </h2>
                  </div>
                  <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>
                      LLMs and agents can generate demand, but product data, variant logic,
                      checkout, payment routing, and post-purchase state are not uniformly
                      available across agent surfaces.
                    </p>
                    <p className="text-foreground/90">
                      The missing layer is a merchant gateway that merchants and agents can
                      reliably route through.
                    </p>
                    <p>
                      In market language, that is the infrastructure layer that makes agentic
                      commerce executable for merchants instead of leaving demand stranded at the
                      interface layer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Products</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Core gateway plus application layer
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Pivota Gateway is the core merchant gateway product. Custom Brand Agent is an
                    application-layer product powered by Aurora on Pivota.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {productCards.map((card) => {
                    const href = card.href;
                    const isExternal = href.startsWith("https://");

                    return (
                      <article key={card.title} className="section-frame px-5 py-5">
                        {card.eyebrow ? (
                          <p className="text-xs uppercase tracking-[0.16em] text-primary">
                            {card.eyebrow}
                          </p>
                        ) : null}
                        <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                          {card.title}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
                        <Button asChild variant="outline" className="mt-5 h-10 px-4 text-sm">
                          {isExternal ? (
                            <a href={href}>
                              {card.ctaLabel}
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          ) : (
                            <Link href={href}>
                              {card.ctaLabel}
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          )}
                        </Button>
                      </article>
                    );
                  })}
                </div>
                <Link href={routePaths.pivotaVsShopify} className="inline-flex text-sm text-primary hover:underline">
                  When to choose Pivota vs Shopify
                </Link>
              </div>

              <div id="pivota-gateway-details" className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">What Pivota does</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    One gateway across discovery, execution, and payment.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {gatewayFunctions.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Comparison</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    What makes a merchant gateway different
                  </h2>
                </div>
                <ComparisonTable rows={comparisonRows} />
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">What Pivota is not</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {boundaries.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground"
                    >
                      {item}
                    </div>
                  ))}
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
