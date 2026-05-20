import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnswerBlock from "@/components/AnswerBlock";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import workflowImage from "@/assets/workflow-steps.jpg";
import {
  aiReadinessSignupPath,
  buildMarketingMetadata,
  homepageFaqItems,
  homepageFaqPreviewItems,
  homepageHeroAnswerBlock,
  homepageMetaDescription,
  homepageResultStatements,
  homepageTitle,
  routePaths,
} from "@/lib/marketing";
import { appendSearchParamRecordToPath, type SearchParamRecord } from "@/lib/merchant-signup";
import { buildFaqJsonLd } from "@/lib/schema";

const executionSteps = [
  { label: "Demand from LLM and agent traffic", sub: "ChatGPT, Gemini, personal agents, branded AI" },
  { label: "Merchant discovery and offer resolution", sub: "Catalog, variants, and promotional offers resolved cleanly" },
  { label: "Link-out, feeds, or merchant-native checkout", sub: "Start lighter; go deeper when your stack is ready" },
  { label: "Payment routing and state sync", sub: "Routes to your existing PSP — no new payment contract" },
  { label: "Order authorization and write-back", sub: "Orders land back in your existing systems" },
  { label: "Measurement across execution", sub: "See what converted, where it broke, what to fix" },
] as const;

const commerceIndexCapabilities = [
  {
    label: "Product & offer search",
    body: "Query structured catalog and promotion data across merchants — variants, pricing, eligibility, and inventory state.",
  },
  {
    label: "Merchant discovery",
    body: "Find connected merchants by category, capability, or execution readiness. Resolve the right merchant path before checkout.",
  },
  {
    label: "Transaction execution",
    body: "Route from search result to merchant-native checkout, payment authorization, and order write-back in one continuous flow.",
  },
] as const;

const homepageProofItems = [
  "Where catalog, offers, checkout, or payments may be getting in the way",
  "Clear next steps operators can act on immediately",
  "The changes most likely to improve transaction continuity",
  "The safest next step across link-out, feeds, and merchant-native checkout",
] as const;

const downstreamAgentBenefits = [
  "Cleaner offer and product resolution",
  "Fewer ambiguities around checkout and payment paths",
  "Better merchant-native execution continuity",
  "Stronger order and write-back visibility",
] as const;

const homepagePlatformBullets = [
  "Keep your storefront",
  "Improve execution across agent surfaces",
  "No replatforming required",
] as const;

const homepageFaqJsonLd = buildFaqJsonLd(homepageFaqItems);

export const metadata = buildMarketingMetadata({
  title: homepageTitle,
  description: homepageMetaDescription,
  path: routePaths.home,
  ogTitle: "Pivota — The Merchant Gateway for Agent-Native Commerce",
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
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="homepage-faq-jsonld" data={homepageFaqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card pt-1 sm:pt-2">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[8%] top-14 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[10%] top-8 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                    The commerce execution &amp; optimization layer for agentic demand
                  </h1>
                  <AnswerBlock className="max-w-2xl">
                    <p>{homepageHeroAnswerBlock[0]}</p>
                    <p className="mt-2">{homepageHeroAnswerBlock[1]}</p>
                  </AnswerBlock>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-hero h-11 px-5 text-sm">
                    <Link href={onboardingHref}>
                      Check your store&apos;s AI readiness
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 px-5 text-sm">
                    <Link href={routePaths.agentIntegration}>View agent integration</Link>
                  </Button>
                </div>

              </div>

              <div className="section-frame overflow-hidden p-3 sm:p-4 lg:mt-4 xl:mt-5">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
                  <Image
                    src={heroImage}
                    alt="Pivota dashboard for merchant-native transactions"
                    priority
                    className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">
                      Merchant commerce layer
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-foreground">
                      From discovery and link-out to deeper merchant-native transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-max mt-6">
              <div className="section-frame px-5 py-4 sm:px-6">
                <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Works with your existing store platform
                    </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                      Whether you run on Shopify, Wix, WooCommerce, BigCommerce, or another
                      stack, Pivota works on top of your existing setup.
                    </p>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                      It layers on top. Your storefront, PSP, and ops stay exactly where they are.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {homepagePlatformBullets.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="container-max mt-6 grid gap-4 lg:grid-cols-4">
              {homepageResultStatements.map((item) => (
                <div key={item.title} className="section-frame px-5 py-5">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Why this layer exists</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Commerce won&apos;t live in one AI app
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                AI-driven commerce won&apos;t flow through one app. As personal agents, messaging
                assistants, and branded AI experiences multiply, merchants need one layer all of
                them can call — for product resolution, checkout, payment routing, and write-back.
                That&apos;s what Pivota does. Merchants connect once. Downstream agents get a
                cleaner path.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                  Agent integration
                </Link>
                <Link href={routePaths.useCases} className="text-primary hover:underline">
                  Use cases
                </Link>
              </div>
            </div>

            <div className="section-frame overflow-hidden p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
                <Image
                  src={workflowImage}
                  alt="Workflow from demand to merchant-native execution"
                  className="h-[260px] w-full object-cover sm:h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/30 via-accent/20 to-background/85 px-4 py-3 shadow-[0_14px_30px_rgba(22,163,184,0.18)] backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/95">
                    Celestial Pivot Engine
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Catalog queryability",
                  "Merchant-native checkout",
                  "Payment-state sync",
                  "Order write-back",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Six stages. One merchant-controlled path.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Pivota connects demand to merchant execution, but merchants can enter at lighter
                or deeper stages depending on readiness.
              </p>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                Many merchants start with discovery, feeds, or link-out. Deeper checkout,
                payment, order, and webhook continuity usually require more merchant-specific
                work.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {executionSteps.map((step, index) => (
                <div key={step.label} className="section-frame px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  </div>
                  <p className="mt-2 pl-12 text-xs leading-5 text-muted-foreground">{step.sub}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                Read the full execution model
              </Link>
              <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                Explore merchant-native checkout
              </Link>
              <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                Read the category page
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Commerce Index</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Search products, offers, and merchants. Execute transactions. One API.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Pivota maintains a structured index of merchant catalogs, active offers, variants,
                and pricing across connected merchants. Agents and developers can search the index,
                resolve the right product and offer combination for a given context, and route
                directly into merchant-native checkout — without scraping, polling, or stitching
                together multiple merchant APIs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {commerceIndexCapabilities.map((item) => (
                <div key={item.label} className="section-frame px-5 py-5">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                View agent integration docs
              </Link>
              <Link href={routePaths.apiOverview} className="text-primary hover:underline">
                See the API
              </Link>
              <Link href={routePaths.faq} className="text-primary hover:underline">
                What can agents call today?
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What merchants get after onboarding
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Merchant outcomes upstream. Cleaner calls downstream.
                  </h2>
                  <p className="text-base leading-8 text-muted-foreground">
                    After you connect, you get a concrete operating view — not just a score.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                      Merchant onboarding
                    </Link>
                    <Link href={routePaths.useCases} className="text-primary hover:underline">
                      Use cases
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.7rem] border border-border/70 bg-background/60 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Sample merchant output
                    </p>
                    <div className="mt-4 space-y-3">
                      {homepageProofItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-border/70 bg-background/60 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      What downstream agents get
                    </p>
                    <div className="mt-4 space-y-3">
                      {downstreamAgentBenefits.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How Pivota works, in plain language.
              </h2>
            </div>

            <QuestionAnswerList items={homepageFaqPreviewItems} columns={2} />

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.faq} className="inline-flex items-center text-primary hover:underline">
                Read the full FAQ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href={routePaths.whatIsAgentNativeCommerce} className="text-primary hover:underline">
                What is agent-native commerce?
              </Link>
              <Link href={routePaths.whatIsAgenticCommerce} className="text-primary hover:underline">
                What is agentic commerce?
              </Link>
              <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                Agent Integration
              </Link>
              <Link href={routePaths.makeProductsDiscoverable} className="text-primary hover:underline">
                How to make products discoverable to AI shopping agents
              </Link>
              <Link href={routePaths.doINeedToRebuildMyStore} className="text-primary hover:underline">
                Do I need to rebuild my store?
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
