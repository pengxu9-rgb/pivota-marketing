import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

type UseCase = {
  slug: string;
  category: string;
  cardTitle: string;
  summary: string;
  merchantContext: string;
  readinessGap: string;
  upstreamChange: string;
  downstreamAgents: string;
  rolloutStage: string;
  proof: string;
  homepageShortVersion: string;
  quote: string;
  attribution: string;
  mobileQuote: string;
};

const useCases: UseCase[] = [
  {
    slug: "ingredient-and-variant-clarity",
    category: "Discoverability and variant readiness",
    cardTitle: "Ingredient and variant clarity",
    summary:
      "A specialty skin care brand improved catalog and variant readiness so downstream agents could compare products with less ambiguity.",
    merchantContext:
      "A specialty skin care brand with dense ingredient claims, concern mapping, bundle logic, and closely related variants.",
    readinessGap:
      "Catalog queryability and variant readiness were weak. The merchant could be discovered, but not consistently understood.",
    upstreamChange:
      "Pivota improved product normalization, concern and ingredient mapping, variant structure, and the query surfaces exposed to downstream workflows. It then recommended a staged rollout starting with feeds.",
    downstreamAgents:
      "Agents could resolve products and variants with less ambiguity, compare options more confidently, and route users into a cleaner merchant-native path.",
    rolloutStage: "Feeds first, then merchant-native checkout.",
    proof: "Better readiness for agent-driven recommendation and cleaner downstream variant resolution.",
    homepageShortVersion:
      "A specialty skin care brand cleaned up ingredient and variant structure so downstream agents could recommend products more reliably.",
    quote:
      "Pivota helped turn a catalog that was technically live but operationally hard for agents to interpret into a cleaner merchant path. The biggest shift was not visibility alone, but making products, variants, and offer context much easier to resolve downstream.",
    attribution: "Maya, Product Director, specialty skin care brand",
    mobileQuote:
      "Pivota made products, variants, and offer context much easier for agents to resolve downstream.",
  },
  {
    slug: "seasonal-promo-complexity",
    category: "Offer and promotion readiness",
    cardTitle: "Seasonal promo complexity",
    summary:
      "A mid-market fashion merchant reduced offer ambiguity across seasonal discounts, cart thresholds, and shipping incentives.",
    merchantContext:
      "A mid-market fashion merchant with seasonal promotions, auto discounts, cart thresholds, and shipping incentives.",
    readinessGap:
      "Visible offers were not the same as executable offers. Promotion logic was too fragmented across the merchant stack.",
    upstreamChange:
      "Pivota reviewed discount structures, auto promos, eligibility logic, and checkout behavior during onboarding, then highlighted the highest-priority promotion blockers.",
    downstreamAgents:
      "Agents got a cleaner, better-matched offer and checkout path without guessing across fragmented promotion surfaces.",
    rolloutStage: "Link-out or feeds first, then merchant-native checkout after readiness fixes.",
    proof: "Cleaner offer matching and fewer downstream ambiguities before deeper checkout integration.",
    homepageShortVersion:
      "A fashion merchant tightened fragmented promo logic so downstream agents could stop guessing which offer really applied.",
    quote:
      "We already had promotions across the site, but that did not mean agents could identify the right offer path with confidence. Pivota helped us tighten promotion readiness upstream, so downstream traffic arrived with cleaner offer matching and a more executable checkout path.",
    attribution: "Carl, Marketing Director, mid-market fashion merchant",
    mobileQuote:
      "Pivota tightened promotion readiness upstream so downstream traffic arrived with cleaner offer matching.",
  },
  {
    slug: "eligibility-sensitive-pricing",
    category: "Offer and promotion readiness",
    cardTitle: "Eligibility-sensitive pricing",
    summary:
      "A specialty beauty brand clarified membership and incentive logic before exposing downstream price paths.",
    merchantContext:
      "A specialty beauty brand with gated membership pricing, first-order incentives, and loyalty-linked promotions.",
    readinessGap:
      "Eligibility conditions were not clear enough for consistent downstream execution.",
    upstreamChange:
      "Pivota mapped visible offers against eligibility conditions, tightened readiness around membership and checkout handoff, and clarified what could be exposed as executable versus conditional.",
    downstreamAgents:
      "Agents stopped over-claiming discounts and instead routed to more reliable price and checkout paths with clearer qualification logic.",
    rolloutStage: "Feeds first, then merchant-native checkout when eligibility handling is ready.",
    proof: "Clearer qualification logic and more reliable downstream price paths.",
    homepageShortVersion:
      "A merchant with membership pricing clarified what was executable versus conditional before scaling AI traffic.",
    quote:
      "One of the hardest issues for us was the gap between what looked visible on site and what was actually valid once eligibility rules were involved. Pivota gave us a much clearer way to separate conditional pricing from executable pricing, which made our agent-facing path more credible.",
    attribution: "Nina, Product Director, specialty beauty brand",
    mobileQuote:
      "Pivota helped separate conditional pricing from executable pricing so the agent-facing path became more credible.",
  },
  {
    slug: "wallet-and-financing-readiness",
    category: "Checkout and payment execution",
    cardTitle: "Wallet and financing readiness",
    summary:
      "A regional electronics retailer improved payment-aware checkout readiness for agent-driven traffic.",
    merchantContext:
      "A regional electronics retailer with wallet-heavy checkout behavior, financing options, and payment-linked incentives.",
    readinessGap:
      "Payment readiness and checkout execution logic were not agent-ready.",
    upstreamChange:
      "Pivota analyzed payment setup, PSP-linked logic, and checkout path readiness, then recommended a path toward merchant-native checkout with cleaner payment orchestration.",
    downstreamAgents:
      "Agents got a more stable payment-aware execution path instead of handing users off into ambiguous checkout logic.",
    rolloutStage: "Link-out or feeds initially, then merchant-native checkout.",
    proof: "A more reliable merchant-native path for payment-aware execution.",
    homepageShortVersion:
      "An electronics retailer cleaned up wallet and financing logic before moving toward merchant-native checkout.",
    quote:
      "The real bottleneck was not discovery. It was whether agent demand could reliably move through payment-aware checkout logic without breaking. Pivota helped us identify where execution was fragile and gave us a more structured path toward merchant-native checkout.",
    attribution: "David, Director of Engineering, regional electronics retailer",
    mobileQuote:
      "Pivota showed us where payment-aware execution was fragile and gave us a clearer path toward merchant-native checkout.",
  },
  {
    slug: "shipping-and-cart-rule-alignment",
    category: "Checkout and payment execution",
    cardTitle: "Shipping and cart-rule alignment",
    summary:
      "A DTC home goods merchant reduced late-stage surprises from shipping thresholds, bundles, and cart logic.",
    merchantContext:
      "A DTC home goods merchant with large baskets, shipping thresholds, bundle promotions, and fulfillment-sensitive checkout behavior.",
    readinessGap:
      "Cart, shipping, and checkout logic were not cleanly exposed for downstream execution.",
    upstreamChange:
      "Pivota evaluated how cart rules, shipping thresholds, bundle logic, and merchant-native handoff behaved, then identified the readiness blockers most likely to affect conversion.",
    downstreamAgents:
      "Agents received a more dependable path from recommendation to checkout, with fewer late-stage surprises.",
    rolloutStage: "Feeds first, then merchant-native checkout.",
    proof: "Cleaner handoff and fewer checkout-path surprises.",
    homepageShortVersion:
      "A home goods merchant improved cart and shipping readiness so recommended paths stayed closer to final checkout reality.",
    quote:
      "Cart thresholds, shipping qualification, and bundle logic were creating too much uncertainty too late in the flow. Pivota helped us see where those rules disrupted downstream execution and what needed to be fixed first to make the path more dependable.",
    attribution: "Carl, Product Director, DTC home goods brand",
    mobileQuote:
      "Pivota showed us where cart and shipping rules disrupted downstream execution and what needed to be fixed first.",
  },
  {
    slug: "reliability-and-write-back-visibility",
    category: "Measurement and write-back",
    cardTitle: "Reliability and write-back visibility",
    summary:
      "A footwear brand strengthened measurement and write-back continuity before scaling agent-driven traffic.",
    merchantContext:
      "A footwear brand with strict size and variant complexity, high return sensitivity, and multiple execution paths across storefront and payment systems.",
    readinessGap:
      "Measurement readiness and downstream execution signals were weak, limiting confidence in scaling AI traffic.",
    upstreamChange:
      "Pivota connected upstream merchant analysis to execution measurement, highlighted write-back and operational signal gaps, and recommended the right next integration stage for cleaner measurement.",
    downstreamAgents:
      "Agents routed through a more measurable, more reliable path, while the merchant gained clearer attribution and better visibility into where execution broke.",
    rolloutStage:
      "Link-out first if measurement is weak; merchant-native checkout later for stronger reliability signals.",
    proof: "Stronger measurement and write-back continuity before scaling agent-driven demand.",
    homepageShortVersion:
      "A footwear merchant improved execution visibility before scaling agent-driven demand.",
    quote:
      "We did not just need more AI traffic. We needed a way to understand whether that traffic could move through a measurable, reliable merchant path. Pivota helped connect readiness, execution, and write-back into a system we could actually operate and improve over time.",
    attribution: "Elena, Director of Engineering, footwear brand",
    mobileQuote:
      "Pivota connected readiness, execution, and write-back into a path we could actually operate and improve.",
  },
];

const categoryOrder = [
  "Discoverability and variant readiness",
  "Offer and promotion readiness",
  "Checkout and payment execution",
  "Measurement and write-back",
] as const;

const rolloutStages = [
  {
    title: "Link-out",
    body: "Use when a merchant needs a lighter first stage while measurement, handoff, or eligibility logic is still improving.",
  },
  {
    title: "Feeds",
    body: "Use when catalog, offer, and queryability work is already paying off, but deeper checkout logic is not ready yet.",
  },
  {
    title: "Merchant-native checkout",
    body: "Use when checkout, payments, and downstream execution continuity are ready for the deepest integration stage.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Use Cases | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Representative merchant patterns for the merchant gateway for agent-native commerce across discoverability, promotion readiness, checkout, payments, write-back, and execution.",
  path: routePaths.useCases,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Use cases", path: routePaths.useCases },
]);

function QuoteBlock({
  quote,
  attribution,
  mobileQuote,
}: {
  quote: string;
  attribution: string;
  mobileQuote: string;
}) {
  return (
    <div className="rounded-3xl border border-primary/20 bg-primary/6 px-5 py-5 sm:px-6">
      <p className="text-sm uppercase tracking-[0.18em] text-primary">Representative quote</p>
      <p className="mt-3 text-lg font-medium leading-8 tracking-tight text-foreground md:hidden">
        “{mobileQuote}”
      </p>
      <p className="mt-3 hidden text-lg font-medium leading-8 tracking-tight text-foreground md:block">
        “{quote}”
      </p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">— {attribution}</p>
    </div>
  );
}

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="use-cases-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Use cases" },
                ]}
              />

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Use cases</p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                  How merchants use Pivota to improve downstream agent execution.
                </h1>
                <AnswerBlock className="max-w-3xl">
                  <p>
                    These representative merchant patterns show how merchants fix upstream
                    execution gaps so downstream agents get cleaner offer resolution, checkout
                    paths, payment handling, and write-back continuity.
                  </p>
                  <p className="mt-2">
                    Merchant onboarding happens first, merchants fix upstream gaps once, and
                    downstream LLM and agent calls get a cleaner, more executable merchant-native
                    path.
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
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                    Merchant onboarding
                  </Link>
                  <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                    Agent integration
                  </Link>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Representative merchant patterns
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  These examples reflect real merchant patterns Pivota sees across merchant
                  onboarding, promotion logic, checkout execution, and write-back continuity.
                  Names are representative and merchant identities are intentionally generalized to
                  preserve partner confidentiality.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Homepage-friendly summaries
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Six representative merchant patterns, not generic category restatement.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {useCases.map((useCase) => (
                    <article key={useCase.slug} className="section-frame px-5 py-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-primary">
                        {useCase.category}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight">
                        {useCase.cardTitle}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {useCase.homepageShortVersion}
                      </p>
                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-primary">
                        {useCase.rolloutStage}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {categoryOrder.map((category) => {
                const categoryCases = useCases.filter((useCase) => useCase.category === category);

                return (
                  <div key={category} className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.18em] text-primary">
                        {category}
                      </p>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {category}
                      </h2>
                    </div>
                    <div className="grid gap-4">
                      {categoryCases.map((useCase) => (
                        <article key={useCase.slug} className="section-frame px-6 py-6 sm:px-7">
                          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                            <div className="space-y-4">
                              <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-primary">
                                  {useCase.category}
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                  {useCase.cardTitle}
                                </h3>
                              </div>
                              <p className="text-sm leading-7 text-muted-foreground">
                                {useCase.summary}
                              </p>
                              <p className="text-sm leading-7 text-muted-foreground">
                                {useCase.homepageShortVersion}
                              </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  Merchant context
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.merchantContext}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  What was breaking the path
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.readinessGap}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  What changed upstream
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.upstreamChange}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  What downstream agents got
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.downstreamAgents}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4 md:col-span-2">
                                <p className="text-sm font-semibold text-foreground">
                                  Soft proof statement
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.proof}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <QuoteBlock
                              quote={useCase.quote}
                              attribution={useCase.attribution}
                              mobileQuote={useCase.mobileQuote}
                            />
                          </div>
                          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/8 px-4 py-4 text-sm leading-7 text-foreground">
                            <span className="block font-semibold">Recommended rollout stage</span>
                            <span className="mt-1 block">{useCase.rolloutStage}</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      How rollout stages differ
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Not every merchant should start at the same stage.
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      Pivota uses onboarding outputs to recommend the right rollout stage. The goal
                      is cleaner downstream execution, not forcing every merchant into the deepest
                      integration on day one.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {rolloutStages.map((stage) => (
                      <div key={stage.title} className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {stage.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Ready to see which pattern looks closest to your merchant setup?
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Start with an agent-to-revenue path analysis, then use Merchant Onboarding
                      and Agent Integration to understand how upstream fixes improve downstream
                      execution.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.aiReadiness} className="inline-flex items-center text-primary hover:underline">
                      See what to fix first
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                      Merchant onboarding
                    </Link>
                    <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                      Agent integration
                    </Link>
                  </div>
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
