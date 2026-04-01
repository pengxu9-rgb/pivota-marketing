import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnswerBlock from "@/components/AnswerBlock";
import ContactSection from "@/components/ContactSection";
import AiReadinessPromoPill from "@/components/AiReadinessPromoPill";
import JsonLd from "@/components/JsonLd";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import {
  buildMarketingMetadata,
  defaultOgDescription,
  defaultOgTitle,
  homepageFaqItems,
  homepageFaqPreviewItems,
  homepageHeroAnswerBlock,
  homepageMetaDescription,
  homepageResultStatements,
  homepageTitle,
  routePaths,
} from "@/lib/marketing";
import { buildFaqJsonLd } from "@/lib/schema";

const executionSteps = [
  "Demand from LLM and agent traffic",
  "Merchant discovery and offer resolution",
  "Merchant-native checkout",
  "Payment routing and state sync",
  "Order authorization and write-back",
  "Measurement across execution",
] as const;

const homepageProofItems = [
  "What is blocking conversion from agent-driven traffic",
  "What to fix first to improve the path from recommendation to transaction",
  "Where product resolution, offer logic, checkout, or payment continuity breaks",
  "The safest next path: link-out, feeds, or merchant-native checkout",
] as const;

const downstreamAgentBenefits = [
  "Cleaner offer and product resolution",
  "Safer checkout continuity",
  "Payment-aware execution",
  "Stronger write-back and measurement",
] as const;

const storePlatformCards = [
  {
    title: "Access is not control",
    body: "Store platforms can open useful AI selling paths. Pivota adds a merchant-controlled layer across offers, checkout continuity, payments, and write-back.",
  },
  {
    title: "Presence is not understanding",
    body: "Being visible in a surface does not mean agents can resolve the right product, variant, price, or offer path with confidence.",
  },
  {
    title: "Native paths are not fallback paths",
    body: "As surfaces fragment, merchants still need a platform-independent fallback path that keeps execution continuity intact.",
  },
  {
    title: "Platform examples are not platform limits",
    body: "Shopify and Wix are visible examples today, but the control problem also spans WooCommerce, BigCommerce, custom stacks, and future agent surfaces.",
  },
] as const;

const keepStackItems = [
  "Keep your storefront",
  "Keep your PSP",
  "Keep your fulfillment systems",
  "Keep your customer operations",
] as const;

const pivotaAddsItems = [
  "Merchant control across fragmented agent surfaces",
  "Fallback when native paths are not enough",
  "Safer checkout and payment continuity",
  "Clearer write-back and measurement across execution",
] as const;

const homepageFaqJsonLd = buildFaqJsonLd(homepageFaqItems);

export const metadata = buildMarketingMetadata({
  title: homepageTitle,
  description: homepageMetaDescription,
  path: routePaths.home,
  ogTitle: defaultOgTitle,
  ogDescription: defaultOgDescription,
});

export default function Home() {
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
            <div className="container-max grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 uppercase tracking-[0.2em] text-primary">
                    Works with Shopify, Wix, WooCommerce, BigCommerce, and more
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Work with any store platform. Turn agent demand into revenue.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>{homepageHeroAnswerBlock[0]}</p>
                    <p className="mt-2">{homepageHeroAnswerBlock[1]}</p>
                  </AnswerBlock>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-hero h-11 px-5 text-sm">
                    <Link href={routePaths.aiReadiness}>
                      Analyze your agent-to-revenue path
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 px-5 text-sm">
                    <Link href={routePaths.howPivotaWorks}>See how Pivota works</Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground">
                    <span className="block font-semibold text-foreground">Merchant path</span>
                    Revenue-path analysis → onboarding plan → safest next integration stage
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-muted-foreground">
                    <span className="block font-semibold text-foreground">Builder path</span>
                    How Pivota works → agent integration → orders, webhooks, and execution
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                    Merchant onboarding
                  </Link>
                  <Link href={routePaths.useCases} className="text-primary hover:underline">
                    Use cases
                  </Link>
                  <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                    How Pivota works
                  </Link>
                  <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                    Agent integration
                  </Link>
                  <Link href="/#contact" className="text-primary hover:underline">
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="section-frame overflow-hidden p-3 sm:p-4">
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
                      Execution layer
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-foreground">
                      From queryable catalogs to merchant-native transactions.
                    </p>
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
              <p className="text-sm uppercase tracking-[0.18em] text-primary">
                Store platforms and control
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your store platform is part of the answer, not the whole answer.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Store platforms can help merchants reach some AI-driven buying surfaces. Shopify
                and Wix are visible examples of that broader shift, and WooCommerce and
                BigCommerce also matter anywhere merchants already run storefront operations.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                That access is useful. It is not the same as merchant control across fragmented
                agent surfaces.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                Pivota gives merchants a platform-independent execution layer and fallback layer
                across product resolution, offers, checkout continuity, payments, write-back, and
                measurement.
              </p>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                Use the store platform for storefront operations and native access where
                available. Use Pivota for control, continuity, and fallback across many AI buying
                surfaces.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.pivotaVsShopify} className="text-primary hover:underline">
                  Pivota with Shopify and other store platforms
                </Link>
                <Link href={routePaths.faq} className="text-primary hover:underline">
                  Read the FAQ
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {storePlatformCards.map((item) => (
                <div key={item.title} className="section-frame px-5 py-5">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-6">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Compatibility
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Built to layer on top of your existing store platform
                  </h2>
                  <p className="text-base leading-8 text-muted-foreground">
                    Pivota works with Shopify, Wix, WooCommerce, BigCommerce, and other merchant
                    storefront stacks. It layers on top of the systems merchants already use
                    instead of replacing them.
                  </p>
                  <p className="text-base leading-8 text-foreground/90">
                    Store platforms provide access. Pivota provides control, continuity, and
                    fallback.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.7rem] border border-border/70 bg-background/60 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Merchants keep
                    </p>
                    <div className="mt-4 space-y-3">
                      {keepStackItems.map((item) => (
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
                      Pivota adds
                    </p>
                    <div className="mt-4 space-y-3">
                      {pivotaAddsItems.map((item) => (
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

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                One execution path from demand to merchant-native transactions.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Pivota connects demand, discovery, execution, checkout, payment, and measurement
                into one merchant-controlled path across store platforms and agent surfaces.
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
                    What merchants see after connection
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    See where the agent-to-revenue path breaks before traffic scales.
                  </h2>
                  <p className="text-base leading-8 text-muted-foreground">
                    Pivota shows merchants what is blocking conversion from agent-driven traffic,
                    what to fix first, and which rollout stage is safest for the current stack.
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
                      What merchants see first
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
                      What improves downstream
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
                Short answers to the store-platform and AI-commerce objections merchants ask first.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Short answers stay visible in raw HTML while fuller explanations remain available
                in the FAQ, metadata, and structured page content.
              </p>
            </div>

            <QuestionAnswerList items={homepageFaqPreviewItems} columns={2} />

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.faq} className="inline-flex items-center text-primary hover:underline">
                Read the full FAQ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href={routePaths.pivotaVsShopify} className="text-primary hover:underline">
                Pivota with Shopify and other store platforms
              </Link>
              <Link href={routePaths.whatIsAgentNativeCommerce} className="text-primary hover:underline">
                What is agent-native commerce?
              </Link>
              <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                Agent Integration
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <AiReadinessPromoPill />
    </div>
  );
}
