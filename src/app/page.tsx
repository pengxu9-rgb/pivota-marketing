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
  "Demand from LLM and agent traffic",
  "Merchant discovery and offer resolution",
  "Link-out, feeds, or merchant-native checkout",
  "Payment routing and state sync",
  "Order authorization and write-back",
  "Measurement across execution",
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
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex max-w-full rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.72rem] uppercase leading-[1.25] tracking-[0.16em] text-primary sm:px-4 sm:text-sm sm:tracking-[0.2em]">
                    The commerce execution &amp; optimization layer for agentic demand
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                    The merchant gateway for agent-native commerce
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>{homepageHeroAnswerBlock[0]}</p>
                    <p className="mt-2">{homepageHeroAnswerBlock[1]}</p>
                  </AnswerBlock>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-hero h-11 px-5 text-sm">
                    <Link href={onboardingHref}>
                      See what to fix first
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 px-5 text-sm">
                    <Link href={routePaths.agentIntegration}>View agent integration</Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground">
                    <span className="block font-semibold text-foreground">Merchant path</span>
                    Connect existing stack -&gt; see what to fix first -&gt; choose link-out, feeds, or merchant-native checkout
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground">
                    <span className="block font-semibold text-foreground">Builder path</span>
                    Merchant rollout stage -&gt; first call -&gt; orders, webhooks, and deeper execution when ready
                  </div>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Lighter start: discovery, feeds, link-out. Deeper rollout: checkout,
                  payments, orders, and webhooks usually require more merchant-specific work.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                  <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                    Merchant onboarding
                  </Link>
                  <Link href={routePaths.useCases} className="text-primary hover:underline">
                    Use cases
                  </Link>
                  <Link
                    href={routePaths.skincareBeautyMerchants}
                    className="text-primary hover:underline"
                  >
                    Skincare & beauty merchants
                  </Link>
                  <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                    Agent integration
                  </Link>
                  <Link href="/#contact" className="text-primary hover:underline">
                    Talk to us
                  </Link>
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
                      It does not replace your storefront.
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
                Users won&apos;t only interact through ChatGPT, Copilot, or Gemini. Over time, more
                commerce will be initiated by personal agents, messaging-based assistants, local
                agents, and branded AI experiences.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                Front-end agents need a commerce skill they can call for product recommendation,
                checkout, payments, and post-purchase execution.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                Merchants need more than discoverability in a few AI channels. They need a
                commerce layer that different agents can call.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                Merchants connect once, Pivota improves readiness upstream, and downstream agents
                get a cleaner merchant-native path.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                That does not mean every merchant starts with merchant-native checkout on day one.
                Many start with discovery, feeds, or link-out first, then deepen into
                merchant-native checkout when their stack is ready.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                Build against the same merchant-native path that onboarding improves upstream.
              </p>
              <p className="text-base leading-8 text-foreground/90">That is where Pivota fits.</p>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                From prompt to recommendation to merchant-native execution.
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
                One merchant-controlled path, with lighter and deeper rollout stages.
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
                <div key={step} className="section-frame px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-foreground">{step}</p>
                  </div>
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
                    Pivota does not stop at a category story. After connection, merchants get a
                    concrete operating output their teams can act on before agent-driven traffic
                    scales.
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
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Common questions</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Short answers about the commerce layer agents call.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Short answers stay readable on the page while fuller category definitions remain
                available in the FAQ, metadata, and structured HTML.
              </p>
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
