import Link from "next/link";
import { ArrowRight, CreditCard, Database, RefreshCw, Store } from "lucide-react";
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

const executionLayerFunctions = [
  {
    icon: Database,
    title: "Commerce Index — structured and queryable",
    body: "Catalogs, offers, variants, and pricing across connected merchants are indexed so agents can search, resolve, and act — without scraping or polling.",
  },
  {
    icon: Store,
    title: "Routes demand into merchant-native checkout",
    body: "Connects LLM and agent traffic to merchant-controlled checkout and payment flows. Merchants keep their storefront; agents get a clean execution path.",
  },
  {
    icon: CreditCard,
    title: "Payment routing and authorization",
    body: "Works with existing PSP relationships instead of replacing the merchant payment stack. Payment state stays synchronized across execution.",
  },
  {
    icon: RefreshCw,
    title: "Order write-back and measurement",
    body: "Keeps order state, payment state, and post-purchase continuity connected back to merchant systems. What converted, where it broke, what to fix.",
  },
] as const;

const heroCapabilityCards = [
  {
    icon: Database,
    label: "Commerce Index",
    desc: "Structured, queryable catalog of products, offers, variants, and pricing across connected merchants. Agents search and resolve — no scraping, no polling.",
    iconStyle: "text-primary bg-primary/15 border-primary/30",
    cardStyle: "border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
    glow: "shadow-[0_0_24px_rgba(22,163,184,0.12)]",
  },
  {
    icon: Store,
    label: "Merchant-native checkout",
    desc: "Agent demand routes into merchant-controlled checkout and payment flows. Merchants keep their storefront; agents get a clean, reliable execution path.",
    iconStyle: "text-accent bg-accent/15 border-accent/30",
    cardStyle: "border-accent/25 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent",
    glow: "shadow-[0_0_24px_rgba(99,102,241,0.10)]",
  },
  {
    icon: CreditCard,
    label: "Payment & write-back",
    desc: "Works with your existing PSP. Payment authorization, state sync, and order write-back all flow back into your systems — no new payment contract required.",
    iconStyle: "text-lime-100 bg-lime-200/10 border-lime-200/20",
    cardStyle: "border-white/20 bg-white/[0.055]",
    glow: "shadow-[0_0_24px_rgba(190,242,100,0.08)]",
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
  title: "Commerce Execution Layer for Agentic Demand | Pivota",
  description:
    "Pivota is the commerce execution and optimization layer for agentic demand. It maintains a structured Commerce Index agents can search, routes demand into merchant-native checkout and payment flows, and writes execution state back into existing merchant systems.",
  path: routePaths.merchantGateway,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Commerce execution layer", path: routePaths.merchantGateway },
]);

export default function MerchantGatewayCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="merchant-gateway-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="marketing-hero relative">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Commerce execution layer" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What we build
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    The commerce execution &amp; optimization layer for agentic demand
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the execution layer between LLM or agent demand and
                      merchant-native transactions.
                    </p>
                    <p className="mt-2">
                      It maintains a structured Commerce Index agents can search, routes
                      demand into merchant-native checkout and payment flows, and writes
                      execution state back into existing merchant systems — without requiring
                      merchants to rebuild or replatform.
                    </p>
                  </AnswerBlock>
                  <p className="max-w-3xl text-sm leading-7 text-foreground/90">
                    Store platforms such as Shopify, Wix, WooCommerce, and BigCommerce provide
                    useful native access where available. Pivota adds execution continuity,
                    Commerce Index queryability, and fallback across checkout, payments, and
                    write-back.
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

                <div className="flex flex-col gap-3 lg:pt-2">
                  {heroCapabilityCards.map((card) => (
                    <div
                      key={card.label}
                      className={`flex items-start gap-4 rounded-2xl border px-5 py-4 ${card.cardStyle} ${card.glow}`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${card.iconStyle}`}
                      >
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{card.label}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">{card.desc}</p>
                      </div>
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
                      The missing layer is a structured Commerce Index and execution path that
                      merchants and agents can reliably route through.
                    </p>
                    <p>
                      That is the infrastructure layer that makes agentic commerce executable
                      for merchants instead of leaving demand stranded at the interface layer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Products</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Execution layer plus application layer
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Pivota Gateway is the core execution layer product. Shopping Agent is the
                    application-layer product.
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
                        {card.body ? (
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            {card.body}
                          </p>
                        ) : null}
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
                  Pivota with Shopify and other store platforms
                </Link>
              </div>

              <div id="pivota-gateway-details" className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">What Pivota does</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    One execution layer across Commerce Index, checkout, and payment.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {executionLayerFunctions.map((item) => (
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
                    What makes an execution layer different
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
