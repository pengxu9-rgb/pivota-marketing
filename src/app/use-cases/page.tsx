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
  intendedBenefit: string;
  homepageShortVersion: string;
};

const useCases: UseCase[] = [
  {
    slug: "ingredient-and-variant-clarity",
    category: "Discoverability and variant readiness",
    cardTitle: "Ingredient and variant clarity",
    summary:
      "A specialty skin care brand could improve catalog and variant readiness so downstream agents compare products with less ambiguity.",
    merchantContext:
      "A specialty skin care brand with dense ingredient claims, concern mapping, bundle logic, and closely related variants.",
    readinessGap:
      "Catalog queryability and variant readiness are weak. The merchant can be discovered, but not consistently understood.",
    upstreamChange:
      "Pivota would work on product normalization, concern and ingredient mapping, variant structure, and the query surfaces exposed to downstream workflows, then recommend a staged rollout starting with feeds.",
    downstreamAgents:
      "Agents could resolve products and variants with less ambiguity, compare options more confidently, and route users into a cleaner merchant-native path.",
    rolloutStage: "Feeds first, then merchant-native checkout.",
    intendedBenefit: "Better readiness for agent-driven recommendation and cleaner downstream variant resolution.",
    homepageShortVersion:
      "A specialty skin care brand could clean up ingredient and variant structure so downstream agents recommend products more reliably.",
  },
  {
    slug: "seasonal-promo-complexity",
    category: "Offer and promotion readiness",
    cardTitle: "Seasonal promo complexity",
    summary:
      "A mid-market fashion merchant could reduce offer ambiguity across seasonal discounts, cart thresholds, and shipping incentives.",
    merchantContext:
      "A mid-market fashion merchant with seasonal promotions, auto discounts, cart thresholds, and shipping incentives.",
    readinessGap:
      "Visible offers are not the same as executable offers. Promotion logic is too fragmented across the merchant stack.",
    upstreamChange:
      "Pivota would review discount structures, auto promos, eligibility logic, and checkout behavior during onboarding, then highlight the highest-priority promotion blockers.",
    downstreamAgents:
      "Agents could get a cleaner, better-matched offer and checkout path without guessing across fragmented promotion surfaces.",
    rolloutStage: "Link-out or feeds first, then merchant-native checkout after readiness fixes.",
    intendedBenefit: "Cleaner offer matching and fewer downstream ambiguities before deeper checkout integration.",
    homepageShortVersion:
      "A fashion merchant could tighten fragmented promo logic so downstream agents stop guessing which offer really applies.",
  },
  {
    slug: "eligibility-sensitive-pricing",
    category: "Offer and promotion readiness",
    cardTitle: "Eligibility-sensitive pricing",
    summary:
      "A specialty beauty brand could clarify membership and incentive logic before exposing downstream price paths.",
    merchantContext:
      "A specialty beauty brand with gated membership pricing, first-order incentives, and loyalty-linked promotions.",
    readinessGap:
      "Eligibility conditions are not clear enough for consistent downstream execution.",
    upstreamChange:
      "Pivota would map visible offers against eligibility conditions, tighten readiness around membership and checkout handoff, and clarify what can be exposed as executable versus conditional.",
    downstreamAgents:
      "Agents could stop over-claiming discounts and instead route to more reliable price and checkout paths with clearer qualification logic.",
    rolloutStage: "Feeds first, then merchant-native checkout when eligibility handling is ready.",
    intendedBenefit: "Clearer qualification logic and more reliable downstream price paths.",
    homepageShortVersion:
      "A merchant with membership pricing could clarify what is executable versus conditional before scaling AI traffic.",
  },
  {
    slug: "wallet-and-financing-readiness",
    category: "Checkout and payment execution",
    cardTitle: "Wallet and financing readiness",
    summary:
      "A regional electronics retailer could improve payment-aware checkout readiness for agent-driven traffic.",
    merchantContext:
      "A regional electronics retailer with wallet-heavy checkout behavior, financing options, and payment-linked incentives.",
    readinessGap:
      "Payment readiness and checkout execution logic are not agent-ready.",
    upstreamChange:
      "Pivota would analyze payment setup, PSP-linked logic, and checkout path readiness, then recommend a path toward merchant-native checkout with cleaner payment routing through the merchant's own providers.",
    downstreamAgents:
      "Agents could get a more stable payment-aware execution path instead of handing users off into ambiguous checkout logic.",
    rolloutStage: "Link-out or feeds initially, then merchant-native checkout.",
    intendedBenefit: "A more reliable merchant-native path for payment-aware execution.",
    homepageShortVersion:
      "An electronics retailer could clean up wallet and financing logic before moving toward merchant-native checkout.",
  },
  {
    slug: "shipping-and-cart-rule-alignment",
    category: "Checkout and payment execution",
    cardTitle: "Shipping and cart-rule alignment",
    summary:
      "A DTC home goods merchant could reduce late-stage surprises from shipping thresholds, bundles, and cart logic.",
    merchantContext:
      "A DTC home goods merchant with large baskets, shipping thresholds, bundle promotions, and fulfillment-sensitive checkout behavior.",
    readinessGap:
      "Cart, shipping, and checkout logic are not cleanly exposed for downstream execution.",
    upstreamChange:
      "Pivota would evaluate how cart rules, shipping thresholds, bundle logic, and merchant-native handoff behave, then identify the readiness blockers most likely to affect conversion.",
    downstreamAgents:
      "Agents could receive a more dependable path from recommendation to checkout, with fewer late-stage surprises.",
    rolloutStage: "Feeds first, then merchant-native checkout.",
    intendedBenefit: "Cleaner handoff and fewer checkout-path surprises.",
    homepageShortVersion:
      "A home goods merchant could improve cart and shipping readiness so recommended paths stay closer to final checkout reality.",
  },
  {
    slug: "reliability-and-write-back-visibility",
    category: "Measurement and write-back",
    cardTitle: "Reliability and write-back visibility",
    summary:
      "A footwear brand could strengthen measurement and write-back continuity before scaling agent-driven traffic.",
    merchantContext:
      "A footwear brand with strict size and variant complexity, high return sensitivity, and multiple execution paths across storefront and payment systems.",
    readinessGap:
      "Measurement readiness and downstream execution signals are weak, limiting confidence in scaling AI traffic.",
    upstreamChange:
      "Pivota would connect upstream merchant analysis to execution measurement, highlight write-back and operational signal gaps, and recommend the next integration stage for cleaner measurement.",
    downstreamAgents:
      "Agents could route through a more measurable, more reliable path, while the merchant gains clearer attribution and better visibility into where execution breaks.",
    rolloutStage:
      "Link-out first if measurement is weak; merchant-native checkout later for stronger reliability signals.",
    intendedBenefit: "Stronger measurement and write-back continuity before scaling agent-driven demand.",
    homepageShortVersion:
      "A footwear merchant could improve execution visibility before scaling agent-driven demand.",
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
  title: "Use Cases | Pivota",
  description:
    "Illustrative merchant scenarios for the commerce execution layer across discoverability, promotion readiness, checkout, payments, write-back, and execution.",
  path: routePaths.useCases,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Use cases", path: routePaths.useCases },
]);

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="use-cases-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="marketing-hero relative">
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
                  How merchants could use Pivota to improve downstream agent execution.
                </h1>
                <AnswerBlock className="max-w-3xl">
                  <p>
                    These illustrative merchant scenarios show how a merchant could fix upstream
                    execution gaps so downstream agents could get cleaner offer resolution, checkout
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
                  Illustrative merchant scenarios
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  These are illustrative planning scenarios, not customer testimonials or measured
                  outcomes. They describe issues to investigate and possible rollout paths.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Scenario summaries
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Six illustrative merchant scenarios.
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link
                      href={routePaths.skincareBeautyMerchants}
                      className="inline-flex text-primary hover:underline"
                    >
                      See the skincare & beauty page
                    </Link>
                    <Link
                      href={routePaths.makeProductsDiscoverable}
                      className="inline-flex text-primary hover:underline"
                    >
                      How to make products discoverable to AI shopping agents
                    </Link>
                    <Link
                      href={routePaths.startBeforeMerchantNativeCheckout}
                      className="inline-flex text-primary hover:underline"
                    >
                      Can I start before merchant-native checkout?
                    </Link>
                  </div>
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
                                  Example merchant profile
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.merchantContext}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  What could be breaking the path
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.readinessGap}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  Possible upstream changes
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.upstreamChange}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                                <p className="text-sm font-semibold text-foreground">
                                  Intended downstream behavior
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.downstreamAgents}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-border/70 bg-background/55 p-4 md:col-span-2">
                                <p className="text-sm font-semibold text-foreground">
                                  Intended benefit, not a measured result
                                </p>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {useCase.intendedBenefit}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/8 px-4 py-4 text-sm leading-7 text-foreground">
                            <span className="block font-semibold">Suggested rollout stage</span>
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
