import Link from "next/link";
import { ArrowRight, Bot, Building2, Workflow } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  merchantSignupPath,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const explanationCards = [
  {
    icon: Bot,
    title: "Agentic commerce is the broader market term",
    body: "It describes commerce shaped by LLMs, AI agents, and agent-mediated buying flows.",
  },
  {
    icon: Workflow,
    title: "Agent-native commerce is the execution framing",
    body: "It describes how that demand becomes merchant-native transactions across merchant systems.",
  },
  {
    icon: Building2,
    title: "The merchant gateway is the missing layer",
    body: "Pivota connects discovery, checkout, payment, and write-back so merchants stay in control.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "What Is Agentic Commerce for Merchants? | Pivota",
  description:
    "Agentic commerce is the broader market term for commerce shaped by LLMs and AI agents. Pivota's product category is the merchant gateway for agent-native commerce, which turns that demand into merchant-native transactions.",
  path: routePaths.whatIsAgenticCommerce,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "What is agentic commerce?", path: routePaths.whatIsAgenticCommerce },
]);

export default function WhatIsAgenticCommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="what-is-agentic-commerce-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "What is agentic commerce?" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Educational term
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    What is agentic commerce for merchants?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Agentic commerce is the broader market term for commerce shaped by LLMs, AI
                      agents, and agent-mediated buying flows.
                    </p>
                    <p className="mt-2">
                      Pivota&apos;s product category is more specific: the merchant gateway for
                      agent-native commerce, which turns that demand into merchant-native
                      transactions across catalog, checkout, payment, and post-purchase systems.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.merchantGateway}>
                        Category page
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={merchantSignupPath}>Merchant signup</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    How to read the terms
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Market term: agentic commerce
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Product category: merchant gateway for agent-native commerce
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Merchant outcome: merchant-native transactions
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why the distinction matters
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Merchants need a product category, not just a market label.
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {explanationCards.map((card) => (
                    <article key={card.title} className="section-frame px-5 py-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    What this means for Pivota
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Pivota does not need to replace its category language to be discoverable around
                    agentic commerce. The stronger position is to keep the merchant gateway anchor
                    while using agentic commerce as the broader market context.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <Link href={routePaths.whatIsAgentNativeCommerce} className="text-primary hover:underline">
                    What is agent-native commerce?
                  </Link>
                  <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                    How Pivota works
                  </Link>
                  <Link href={routePaths.faq} className="text-primary hover:underline">
                    FAQ
                  </Link>
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
