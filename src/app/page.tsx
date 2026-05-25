import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import workflowImage from "@/assets/workflow-steps.jpg";
import {
  aiReadinessSignupPath,
  buildMarketingMetadata,
  homepageFaqItems,
  homepageFaqPreviewItems,
  homepageMetaDescription,
  homepageTitle,
  routePaths,
} from "@/lib/marketing";
import { appendSearchParamRecordToPath, type SearchParamRecord } from "@/lib/merchant-signup";
import { buildFaqJsonLd } from "@/lib/schema";

const trustLayerItems = [
  {
    eyebrow: "Identity",
    title: "Merchant-controlled paths",
    body: "Keep storefront, PSP, fulfillment, and operations in the merchant stack agents already need to reach.",
  },
  {
    eyebrow: "Policy",
    title: "Deterministic offer logic",
    body: "Resolve product, variant, price, promotion, and checkout eligibility before an agent sends demand forward.",
  },
  {
    eyebrow: "Observability",
    title: "Audit-ready execution",
    body: "Track search, checkout, payment state, order write-back, and breakpoints across the agent-to-order path.",
  },
] as const;

const heroMeteors = ["meteor-a", "meteor-b", "meteor-c", "meteor-d"] as const;

const agentUseCases = [
  {
    title: "Route qualified agent demand",
    body: "A shopping assistant finds the right merchant offer and hands off to a controlled checkout path.",
  },
  {
    title: "Preserve the right promotion",
    body: "Offer rules stay attached as an agent moves from recommendation to cart, checkout, and payment.",
  },
  {
    title: "Recover from checkout drift",
    body: "When a path is not ready for deeper execution, Pivota falls back to feeds, link-out, or the next safest route.",
  },
  {
    title: "Measure what actually converted",
    body: "Operators see where the flow succeeded, where it broke, and what to fix before scaling agent demand.",
  },
] as const;

const capabilityItems = [
  {
    eyebrow: "Search",
    title: "Product and offer resolution",
    body: "Expose structured catalog, variant, price, inventory, and incentive data in a form agents can call reliably.",
  },
  {
    eyebrow: "Checkout",
    title: "Merchant-native execution",
    body: "Route from intent to checkout while keeping payment contracts and operational control with the merchant.",
  },
  {
    eyebrow: "Sync",
    title: "Order state and write-back",
    body: "Carry payment and order lifecycle events back into merchant systems so downstream agents have clean state.",
  },
] as const;

const executionSignals = [
  "Catalog queryability",
  "Offer eligibility",
  "Checkout handoff",
  "Payment-state sync",
  "Order write-back",
  "Fallback routing",
] as const;

const homepageFaqJsonLd = buildFaqJsonLd(homepageFaqItems);

export const metadata = buildMarketingMetadata({
  title: homepageTitle,
  description: homepageMetaDescription,
  path: routePaths.home,
  ogTitle: "Pivota - Commerce Index and Decision Layer for Agents",
  ogDescription: homepageMetaDescription,
});

type HomePageProps = {
  searchParams?: Promise<SearchParamRecord>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const onboardingHref = appendSearchParamRecordToPath(
    aiReadinessSignupPath,
    resolvedSearchParams,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <JsonLd id="homepage-faq-jsonld" data={homepageFaqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-[#11100f] text-white">
          <div className="hero-dot-field absolute inset-0 opacity-80" />
          <div className="hero-meteor-field absolute inset-0" aria-hidden="true">
            {heroMeteors.map((meteor) => (
              <span key={meteor} className={`hero-meteor ${meteor}`} />
            ))}
          </div>

          <div className="section-padding relative pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-24 lg:pt-20">
            <div className="container-max">
              <div className="max-w-5xl">
                <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                  How AI agents buy from merchants, reliably.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                  Pivota is the{" "}
                  <span className="font-medium text-lime-200">
                    Commerce Index and decision layer
                  </span>{" "}
                  for agentic demand. It helps agents decide what to recommend, resolve
                  offers, and route transactions through merchant-controlled systems.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 bg-white px-6 text-sm font-semibold text-[#11100f] hover:bg-lime-100">
                    <Link href={onboardingHref}>
                      Check readiness
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 border-white/20 bg-white/5 px-6 text-sm text-white hover:bg-white/12 hover:text-white"
                  >
                    <Link href={routePaths.agentIntegration}>Agent integration</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section-padding bg-[#11100f] text-white">
          <div className="container-max">
            <div className="section-rule border-white/10 pb-10">
              <p className="kicker text-lime-200">Governance</p>
              <div className="mt-5 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <h2 className="font-serif text-4xl font-medium tracking-normal text-white sm:text-5xl">
                  The decision layer for agentic commerce.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-white/68">
                  Merchants need agent demand to be queryable and executable, but still governed
                  by their own systems. Pivota gives agents a clean path while merchants keep the
                  controls that matter.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {trustLayerItems.map((item, index) => (
                <article key={item.title} className="trust-card bg-white/[0.075] p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <p className="kicker text-lime-200">{item.eyebrow}</p>
                    <span className="font-mono text-xs text-lime-200/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-9 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-max grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="section-rule border-border/80 pt-6">
              <p className="kicker text-primary">Agent Demand</p>
              <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-foreground sm:text-5xl">
                How agents get commerce done.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                Agent-driven commerce will not live in one app. Pivota gives every agent surface
                the same reliable route into merchant-native execution.
              </p>
              <div className="mt-7 flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="commerce-link">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.useCases} className="commerce-link">
                  Use cases
                </Link>
              </div>
            </div>

            <div className="divide-y divide-border/80 border-y border-border/80">
              {agentUseCases.map((item, index) => (
                <article key={item.title} className="grid gap-4 py-6 sm:grid-cols-[2.1rem_1fr]">
                  <span className="pt-1 font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#f7f3ea]">
          <div className="container-max">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <p className="kicker text-primary">Functionality</p>
                <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-foreground sm:text-5xl">
                  Execution capabilities for your agents.
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Pivota connects the parts agents need to complete a transaction: discovery,
                product and offer resolution, checkout routing, payment-state sync, and
                post-purchase write-back.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {capabilityItems.map((item, index) => (
                <article key={item.title} className="section-frame p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="kicker text-primary">{item.eyebrow}</p>
                    <span className="font-mono text-xs text-primary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#11100f] text-white">
          <div className="container-max grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <h2 className="font-serif text-5xl font-medium leading-none tracking-normal text-white sm:text-6xl">
                Agent action.
                <br />
                Merchant control.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Agents can search, resolve, and initiate the right path. Humans and merchant
                systems stay in charge of policies, payment behavior, approval, and recovery.
              </p>
              <div className="mt-7 flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.howPivotaWorks} className="text-lime-200 hover:text-white">
                  Read the execution model
                </Link>
                <Link href={routePaths.merchantNativeCheckout} className="text-lime-200 hover:text-white">
                  Merchant-native checkout
                </Link>
              </div>
            </div>

            <div className="surface-panel border-white/12 bg-white/[0.06] p-4">
              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-3">
                  {executionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.055] px-3 py-3 text-sm text-white/78"
                    >
                      <Check className="h-4 w-4 text-lime-200" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>

                <div className="relative min-h-[25rem] overflow-hidden rounded-lg border border-white/10 bg-[#171514]">
                  <Image
                    src={workflowImage}
                    alt="Workflow from agent demand to merchant execution"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-[#11100f]/48 to-[#11100f]/10" />
                  <div className="relative flex h-full min-h-[25rem] flex-col justify-end p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime-200">
                      execution_intent
                    </p>
                    <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                      Resolve product, preserve offer, route checkout, sync state.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      One call path for downstream agents. Existing merchant systems remain the
                      source of truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-max grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="kicker text-primary">FAQ</p>
              <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal sm:text-5xl">
                Plain answers before you onboard.
              </h2>
              <Link href={routePaths.faq} className="commerce-link mt-7 inline-flex">
                Read the full FAQ
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-border/80 border-y border-border/80">
              {homepageFaqPreviewItems.map((item) => (
                <article key={item.question} className="py-6">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
