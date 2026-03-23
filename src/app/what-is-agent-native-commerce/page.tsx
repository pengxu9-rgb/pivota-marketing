import Link from "next/link";
import { ArrowRight, Bot, CreditCard, Search, Workflow } from "lucide-react";
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

const merchantNeeds = [
  {
    icon: Search,
    title: "Fragmented product data",
    body: "Agent-native demand fails when catalogs, offers, and variants are not queryable or executable across LLM surfaces.",
  },
  {
    icon: CreditCard,
    title: "Disconnected execution",
    body: "Demand does not become a merchant-native transaction unless checkout, payment, and post-purchase systems stay connected.",
  },
  {
    icon: Workflow,
    title: "Missing middle layer",
    body: "Merchants need a gateway that LLMs and agents can reliably route through instead of a brittle stack of point integrations.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "What Is Agent-Native Commerce? | Pivota Merchant Gateway",
  description:
    "Agent-native commerce is commerce initiated by LLMs and agents. Pivota is the merchant gateway for agent-native commerce, turning LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  path: routePaths.whatIsAgentNativeCommerce,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "What is agent-native commerce?", path: routePaths.whatIsAgentNativeCommerce },
]);

export default function WhatIsAgentNativeCommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="what-is-agent-native-commerce-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "What is agent-native commerce?" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Category context
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    What is agent-native commerce?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Agent-native commerce is commerce initiated by LLMs and agents instead of by
                      a user navigating a merchant site directly.
                    </p>
                    <p className="mt-2">
                      Pivota is the merchant gateway for agent-native commerce, which means it
                      turns LLM and agent traffic into merchant-native transactions across catalog,
                      checkout, payment, and post-purchase systems.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.merchantGateway}>
                        Read the category page
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={merchantSignupPath}>Merchant signup</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Bot className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                    Where Pivota fits
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Agent-native commerce creates demand through LLMs and agents. Pivota provides
                    the execution layer that makes that demand merchant-native, queryable, and
                    measurable for merchants.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why merchants need a gateway
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Agent-native demand still needs merchant-native execution.
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {merchantNeeds.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                    Merchant gateway definition
                  </Link>
                  <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                    How Pivota works
                  </Link>
                  <Link href={routePaths.developers} className="text-primary hover:underline">
                    Docs home
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
