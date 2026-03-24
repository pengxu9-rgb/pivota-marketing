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
  buildMarketingMetadata,
  defaultOgDescription,
  defaultOgTitle,
  homepageFaqItems,
  homepageFaqPreviewItems,
  homepageHeroAnswerBlock,
  homepageMetaDescription,
  homepageResultStatements,
  homepageTitle,
  merchantSignupPath,
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
                    Agent-native commerce infrastructure
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    The merchant gateway for agent-native commerce.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>{homepageHeroAnswerBlock[0]}</p>
                    <p className="mt-2">{homepageHeroAnswerBlock[1]}</p>
                  </AnswerBlock>
                  <p className="max-w-3xl text-sm leading-7 text-foreground/90">
                    Shopify is merchants&apos; shopping layer for search. Pivota is merchants&apos;
                    gateway for LLMs and agents.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-hero h-11 px-5 text-sm">
                    <Link href={merchantSignupPath}>
                      Merchant signup
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 px-5 text-sm">
                    <Link href={routePaths.howPivotaWorks}>See how it works</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                    Category definition
                  </Link>
                  <Link href={routePaths.developers} className="text-primary hover:underline">
                    Docs home
                  </Link>
                  <Link href={routePaths.useCases} className="text-primary hover:underline">
                    Use cases
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

            <div className="container-max mt-6 grid gap-4 lg:grid-cols-3">
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
                LLMs can generate demand. Merchants still need a gateway to serve it.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Product catalogs are fragmented. Merchants are not uniformly queryable across agent
                surfaces. Checkout, payment, and post-purchase execution still break when demand
                moves from LLMs into merchant systems.
              </p>
              <p className="text-base leading-8 text-foreground/90">
                The missing layer is a merchant gateway that LLMs and agents can reliably route
                through.
              </p>
            </div>

            <div className="section-frame overflow-hidden p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
                <Image
                  src={workflowImage}
                  alt="Workflow from demand to merchant-native execution"
                  className="h-[260px] w-full object-cover sm:h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
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
                One execution path from demand to merchant-native transactions.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Pivota connects demand, discovery, execution, checkout, payment, and measurement
                into one merchant-controlled path.
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
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Common questions</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Five short answers for merchants and AI systems.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Short answers stay readable on the page, while fuller category definitions remain
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
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
