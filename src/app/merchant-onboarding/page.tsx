import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Link2,
  RefreshCw,
  Store,
  Wrench,
} from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const onboardingSteps = [
  {
    title: "Create the merchant account",
    body: "Pivota creates one merchant record that carries from signup into dashboard setup and later merchant-native execution.",
  },
  {
    title: "Set up payments and KYB",
    body: "Merchants complete payment setup and verification so checkout, payment routing, and settlement can resolve through the same merchant identity.",
  },
  {
    title: "Finish integrations setup",
    body: "The dashboard then guides merchants through sales channels, payment setup, routing, and API or webhook surfaces without replacing the existing stack.",
  },
  {
    title: "Review readiness outputs",
    body: "Pivota returns issue overview, recommended actions, prioritized fixes, and a rollout path for the next execution stage.",
  },
] as const;

const readinessDimensions = [
  "Catalog structure, product data, and variant readiness",
  "Offers, discounts, and executable promotion logic",
  "Checkout path and merchant-native handoff readiness",
  "Payment setup, orchestration, and payment-state sync",
  "Measurement, execution signals, and downstream rollout fit",
] as const;

const merchantOutputs = [
  {
    title: "Issue overview",
    body: "Spot the merchant-specific issues most likely to block discovery, conversion, and execution before traffic scales.",
  },
  {
    title: "Recommended actions",
    body: "See the concrete actions your team can take across product data, checkout, payments, and execution flow.",
  },
  {
    title: "Prioritized fixes",
    body: "Focus first on the issues most likely to improve downstream agent calls and checkout completion.",
  },
  {
    title: "Rollout path",
    body: "Understand whether the right next stage is link-out, feeds, or merchant-native checkout.",
  },
] as const;

const sampleIssueOverview = [
  "Variant structure is too ambiguous for confident downstream comparison.",
  "Promo eligibility logic is fragmented across cart and checkout.",
  "Wallet incentive is visible on site but not preserved reliably in execution.",
] as const;

const sampleRecommendedActions = [
  "Normalize variant and bundle mapping before more AI-driven traffic reaches checkout.",
  "Tighten executable-offer rules so visible promos and checkout logic stay aligned.",
  "Fix payment incentive handoff before deeper merchant-native checkout rollout.",
] as const;

const rolloutStages = [
  {
    title: "Link-out",
    body: "Use when the merchant needs a lighter first stage while measurement and handoff are still improving.",
  },
  {
    title: "Feeds",
    body: "Use when catalog, offer, and variant readiness are improving but checkout logic still needs work.",
  },
  {
    title: "Merchant-native checkout",
    body: "Use when checkout, payments, and execution continuity are ready for the deepest rollout stage.",
  },
] as const;

const integrationSurfaces = [
  {
    icon: Store,
    title: "Sales channels",
    body: "Connect storefront and feed surfaces without replacing the storefront itself.",
  },
  {
    icon: CreditCard,
    title: "Payment setup",
    body: "Keep the existing PSP path and improve live readiness for downstream checkout execution.",
  },
  {
    icon: RefreshCw,
    title: "Routing",
    body: "Keep primary and fallback execution logic aligned before agent-native demand scales.",
  },
  {
    icon: Link2,
    title: "API & webhooks",
    body: "Expose cleaner merchant-native execution and sync surfaces on top of the current stack.",
  },
] as const;

const downstreamBenefits = [
  "Cleaner offer and product matching for downstream agent calls",
  "Fewer checkout failures caused by ambiguous merchant logic",
  "Better payment and write-back continuity through merchant systems",
  "A stronger path from prompt to merchant-native transaction",
] as const;

const whatMerchantsKeep = [
  "Storefront and merchandising surfaces",
  "PSP relationships and payment operations",
  "Fulfillment systems and customer support workflows",
] as const;

const whatPivotaImproves = [
  "Readiness analysis across catalog, offers, checkout, and payments",
  "Execution routing, API and webhook surfaces, and rollout guidance",
] as const;

export const metadata = buildMarketingMetadata({
  title: "Merchant Onboarding | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Connect once, improve readiness upstream, and get issue overview, recommended actions, prioritized fixes, and a rollout path for downstream agent-native commerce.",
  path: routePaths.merchantOnboarding,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Merchant onboarding", path: routePaths.merchantOnboarding },
]);

export default function MerchantOnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="merchant-onboarding-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Merchant onboarding" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Merchant onboarding
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Connect once. Improve every downstream agent call.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Merchant onboarding happens first. Pivota improves readiness upstream across
                      catalog, offers, checkout, and payments before demand reaches live
                      agent-native execution.
                    </p>
                    <p className="mt-2">
                      Merchants get issue overview, recommended actions, prioritized fixes, and a
                      rollout path that operators can act on without replatforming storefront, PSP,
                      fulfillment, or customer operations.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        Get your readiness analysis
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
                    What happens after store connection
                  </p>
                  <div className="mt-4 space-y-3">
                    {onboardingSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What Pivota analyzes
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Readiness is checked before traffic scales.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                    Public readiness pages already set the expectation. Merchant onboarding is where
                    Pivota makes that expectation concrete and turns it into merchant-specific
                    issues, fixes, and rollout guidance.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {readinessDimensions.map((item) => (
                    <div key={item} className="section-frame px-5 py-5 text-sm leading-7 text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What merchants get back
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    More than a score. A working output for operators.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {merchantOutputs.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <div className="flex items-center gap-3">
                        <Wrench className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                <div className="section-frame p-6 sm:p-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Sample readiness output
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    Public-safe example of what an operator can act on
                  </h2>
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                      <p className="text-sm font-semibold text-foreground">Issue overview</p>
                      <div className="mt-3 space-y-3">
                        {sampleIssueOverview.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 p-4">
                      <p className="text-sm font-semibold text-foreground">Recommended actions</p>
                      <div className="mt-3 space-y-3">
                        {sampleRecommendedActions.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                            <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-frame p-6 sm:p-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Recommended rollout path
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    Start with the integration stage that fits current readiness
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Merchant onboarding is where Pivota turns readiness findings into a rollout
                    recommendation. Many merchants should not jump straight to merchant-native
                    checkout on day one.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {rolloutStages.map((stage) => (
                      <div
                        key={stage.title}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                      >
                        <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {stage.body}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/8 px-4 py-4 text-sm leading-7 text-foreground">
                    Sample recommendation: start with feeds, improve payment and cart logic, then
                    deepen into merchant-native checkout when execution blockers are resolved.
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      No replatforming in practice
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Keep the stack you already run.
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      Merchants keep storefront, PSP, fulfillment stack, and customer operations.
                      Pivota improves the merchant-native execution layer by connecting setup,
                      routing, and sync surfaces on top of the current stack.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4">
                        <p className="text-sm font-semibold text-foreground">Merchants keep</p>
                        <div className="mt-3 space-y-2">
                          {whatMerchantsKeep.map((item) => (
                            <p key={item} className="text-sm leading-6 text-muted-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4">
                        <p className="text-sm font-semibold text-foreground">Pivota improves</p>
                        <div className="mt-3 space-y-2">
                          {whatPivotaImproves.map((item) => (
                            <p key={item} className="text-sm leading-6 text-muted-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {integrationSurfaces.map((surface) => (
                      <article key={surface.title} className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <surface.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                          {surface.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {surface.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Downstream benefit
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Upstream merchant setup improves downstream agent execution.
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    Merchants do the work once during onboarding. Later, external LLMs and agents
                    do not need to guess across fragmented merchant systems to find the right path.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {downstreamBenefits.map((item) => (
                    <div key={item} className="section-frame px-5 py-5 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Ready to connect once and improve every downstream agent path?
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Start with readiness analysis, then use Merchant Onboarding to understand what
                      Pivota analyzes, what merchants get back, and how that work improves later
                      callable execution.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.aiReadiness} className="text-primary hover:underline">
                      Get your readiness analysis
                    </Link>
                    <Link href={routePaths.promotionReadiness} className="text-primary hover:underline">
                      Promotion readiness
                    </Link>
                    <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                      Merchant-native checkout
                    </Link>
                    <Link href={routePaths.useCases} className="text-primary hover:underline">
                      Use cases
                    </Link>
                    <Link href={routePaths.agentIntegration} className="inline-flex items-center text-primary hover:underline">
                      View agent integration
                      <ChevronRight className="ml-1 h-4 w-4" />
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
