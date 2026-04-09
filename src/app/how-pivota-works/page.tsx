import Link from "next/link";
import { ArrowRight, BarChart3, CreditCard, RefreshCw, Search, ShoppingCart, Sparkles } from "lucide-react";
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

const flowSteps = [
  {
    icon: Sparkles,
    title: "Demand",
    body: "User intent appears across LLM and agent surfaces.",
  },
  {
    icon: Search,
    title: "Discovery",
    body: "Pivota makes catalogs, offers, and variants queryable to LLMs and agents.",
  },
  {
    icon: ShoppingCart,
    title: "Execution",
    body: "Demand resolves into an executable merchant path instead of a brittle handoff.",
  },
  {
    icon: CreditCard,
    title: "Checkout",
    body: "The path routes into merchant-native checkout rather than a separate commerce stack.",
  },
  {
    icon: RefreshCw,
    title: "Payment",
    body: "Payment routing, payment-state sync, and authorization stay connected to merchant systems.",
  },
  {
    icon: BarChart3,
    title: "Measurement",
    body: "Execution outcomes become measurable across discovery, checkout, payment, and write-back.",
  },
] as const;

const merchantControls = [
  "Storefront stays with the merchant",
  "Existing payment relationships stay in place",
  "Order and payment state write back into merchant systems",
] as const;

export const metadata = buildMarketingMetadata({
  title: "How Pivota Works | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota connects agent-native demand to merchant-native execution through a shared gateway across catalog, checkout, payment, and post-purchase systems.",
  path: routePaths.howPivotaWorks,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "How Pivota works", path: routePaths.howPivotaWorks },
]);

export default function HowPivotaWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="how-pivota-works-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "How Pivota works" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Execution model
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    How Pivota works
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota connects agent-native demand to merchant-native execution through a
                      shared gateway across catalog, checkout, payment, and post-purchase systems.
                    </p>
                    <p className="mt-2">
                      The workflow runs from demand to discovery to execution to checkout to payment
                      to measurement, while merchant systems stay in control.
                    </p>
                  </AnswerBlock>
                  <p className="max-w-3xl text-sm leading-7 text-foreground/90">
                    Store platforms such as Shopify, Wix, WooCommerce, and BigCommerce are useful
                    for storefront operations and native AI-channel access where available. Pivota
                    adds the merchant-controlled layer that keeps execution, continuity, and
                    fallback working across more agent surfaces.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={merchantSignupPath}>
                        Merchant signup
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.agentIntegration}>Agent Integration</Link>
                    </Button>
                  </div>
                  <Link
                    href={routePaths.skincareBeautyMerchants}
                    className="inline-flex w-fit text-sm text-primary hover:underline"
                  >
                    Skincare & beauty merchants
                  </Link>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    What stays merchant-native
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm">
                    {merchantControls.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Workflow</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Demand to discovery to execution to checkout to payment to measurement
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    This sequence is the merchant-controlled workflow that turns agentic commerce
                    into an execution model instead of a buzzword.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {flowSteps.map((step, index) => (
                    <article key={step.title} className="section-frame px-5 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                          {index + 1}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h2 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.body}</p>
                    </article>
                  ))}
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
