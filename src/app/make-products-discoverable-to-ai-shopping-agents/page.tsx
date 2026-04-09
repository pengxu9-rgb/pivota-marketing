import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

const summaryBullets = [
  "AI-agent discoverability is more than SEO or indexing alone.",
  "Products, variants, bundles, and offers need clear resolution paths.",
  "Merchants can improve discoverability before deeper checkout integration.",
  "Pivota works on top of the current stack without replatforming.",
  "Better discoverability does not mean every flow is fully in-chat.",
] as const;

const fitItems = [
  "Shoppers ask by use case, need, or natural-language prompt instead of exact product name.",
  "Your catalog has close variants, bundles, kits, or subscription logic.",
  "Products are visible online but do not resolve cleanly in AI-agent flows.",
  "You want to improve AI-agent readiness without rebuilding the stack.",
] as const;

const faqItems = [
  {
    question: "Is this just SEO?",
    answer:
      "No. This is also about product resolution, variant clarity, offer logic, and whether an agent can route a shopper into a real merchant path instead of only seeing a page.",
  },
  {
    question: "Do I need to rebuild my store?",
    answer:
      "No. Pivota works on top of the existing stack and helps merchants improve queryability and execution continuity without replatforming.",
  },
  {
    question: "Does better discoverability guarantee in-chat checkout?",
    answer:
      "No. Better discoverability improves how products and offers resolve, but checkout depth is a separate rollout decision and does not guarantee every flow stays fully inside chat.",
  },
  {
    question: "Is this only relevant for beauty merchants?",
    answer:
      "No. Beauty is one strong-fit category, but discoverability, variant clarity, and offer resolution are cross-category merchant problems.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "How Do I Make My Products Discoverable to AI Shopping Agents? | Pivota",
  description:
    "Pivota helps merchants make products, variants, bundles, and offers more queryable and more executable for AI shopping agents without replatforming.",
  path: routePaths.makeProductsDiscoverable,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  {
    name: "How to make products discoverable to AI shopping agents",
    path: routePaths.makeProductsDiscoverable,
  },
]);

const faqJsonLd = buildFaqJsonLd(faqItems);

export default function MakeProductsDiscoverablePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="discoverable-products-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="discoverable-products-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "How to make products discoverable to AI shopping agents" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Discovery and resolution
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    How do I make my products discoverable to AI shopping agents?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Making products discoverable to AI shopping agents is not only about being
                      visible online. Products, variants, offers, and execution paths need to be
                      clear enough for agents to resolve correctly. Pivota works on top of
                      existing merchant stacks to make that path more queryable, more executable,
                      and more merchant-controlled.
                    </p>
                    <p className="mt-2">
                      AI agents interpret natural-language demand, not only taxonomy. Visibility
                      alone is not enough if products and offers do not resolve cleanly.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Summary
                  </p>
                  <div className="mt-4 grid gap-3 text-sm">
                    {summaryBullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this matters
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Discoverability only works when products and offers can resolve cleanly.
                  </h2>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                    A merchant can be visible online and still be hard for an AI shopping agent
                    to resolve correctly. The problem often appears when a shopper asks by use
                    case, product type, bundle need, or price constraint, but the catalog,
                    variant structure, and offer logic do not map cleanly to that intent.
                    Pivota tightens the path between query, recommendation, offer resolution, and
                    merchant execution.
                  </p>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      When this is a fit
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Use this page when resolution quality is the bottleneck.
                    </h2>
                    <div className="grid gap-3">
                      {fitItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      When to start lighter vs deeper
                    </p>
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Start lighter when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          Queryability, product resolution, offer matching, or traffic routing are
                          the main issues. Discovery, feeds, and link-out are often the right
                          first move.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Go deeper when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          The transaction path is also ready and the merchant wants stronger
                          continuity across checkout, payment, orders, and write-back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Discoverability FAQ
                  </h2>
                </div>
                <QuestionAnswerList items={faqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">CTA</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Ready to see what is making products harder for AI agents to resolve?
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.useCases} className="text-primary hover:underline">
                  Use cases
                </Link>
                <Link href={routePaths.faq} className="text-primary hover:underline">
                  FAQ
                </Link>
                <Link href={routePaths.skincareBeautyMerchants} className="text-primary hover:underline">
                  Skincare, beauty, and cosmetics merchants
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
