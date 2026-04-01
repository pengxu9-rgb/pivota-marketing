import Link from "next/link";
import { ArrowRight, Bot, CreditCard, Store, Workflow } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

const shopifyStrengths = [
  "storefront operations and merchandising",
  "native channel access where available",
  "single-platform workflows",
  "default platform-supported selling rails",
] as const;

const pivotaArchitecture = [
  "shopping orchestration",
  "discovery & decisioning",
  "commerce execution",
] as const;

const pivotaCapabilities = [
  "catalog normalization",
  "offer & variant retrieval",
  "recommendations",
  "checkout & payments",
  "order write-back",
  "support sync + signals",
] as const;

const chooseShopifyList = [
  "storefront operations and a standard platform selling path",
  "a single-platform setup with simpler operational needs",
  "native AI-channel access where that path is already enough",
  "faster platform-first rollout with less need for fallback across surfaces",
] as const;

const choosePivotaList = [
  {
    title: "You need merchant control across more surfaces",
    body: "You need one layer that can carry product resolution, offer logic, and execution continuity beyond a single platform-native path.",
  },
  {
    title: "You need safer checkout continuity",
    body: "You want checkout to resolve through merchant-native rails, not only through a platform's embedded path.",
  },
  {
    title: "You need payment orchestration",
    body: "You need PSP routing, payment-state sync, and reconciliation across agent-driven transactions.",
  },
  {
    title: "You need order authorization and write-back",
    body: "You need transaction outcomes to sync back into merchant systems reliably.",
  },
  {
    title: "You need cross-surface measurement and fallback",
    body: "You expect commerce to originate from many surfaces over time, not just one front-end AI platform or one native path.",
  },
  {
    title: "You want branded agent experiences",
    body: "You want your own AI shopping and recommendation experience, built on top of your merchant stack.",
  },
];

const futureAgentSurfaces = [
  "ChatGPT",
  "Gemini",
  "local agents",
  "Telegram bots",
  "WhatsApp assistants",
  "WeChat-based agents",
  "branded shopping agents",
] as const;

const gatewayNeeds = [
  "connect to merchant systems",
  "understand commerce intent",
  "recommend products",
  "route checkout and payments",
  "write outcomes back into existing systems",
] as const;

const comparisonFaqItems = [
  {
    question: "Do I need Pivota if I already use Shopify?",
    answer:
      "Not always. If Shopify's default AI commerce path is enough for your business, Shopify may be the right first step. Pivota matters when you need merchant control, continuity, payments handling, write-back, or fallback across more agent surfaces.",
  },
  {
    question: "Does Pivota replace Shopify, Wix, WooCommerce, or BigCommerce?",
    answer:
      "No. Pivota works with store platforms such as Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. It adds a merchant-controlled layer on top of the store platform instead of replacing it.",
  },
  {
    question: "Why connect Pivota if my store platform already supports AI commerce?",
    answer:
      "Store-platform access can help merchants reach some AI buying surfaces, whether the storefront runs on Shopify, Wix, WooCommerce, BigCommerce, or another stack. Pivota adds merchant control across product resolution, offer logic, checkout continuity, payments, write-back, measurement, and fallback when native paths are not enough.",
  },
  {
    question: "Is Pivota only for ChatGPT or Gemini?",
    answer:
      "No. Pivota is built for agent-native commerce across surfaces. The long-term need is not only AI-channel visibility, but an execution layer that different agents can call.",
  },
  {
    question: "What makes Pivota different from catalog-only AI commerce solutions?",
    answer:
      "Pivota goes beyond discoverability. It helps merchants turn prompts into recommendations, merchant-native checkout flows, payments handling, order write-back, and measurement.",
  },
] as const;

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Pivota with Shopify and other store platforms", path: routePaths.pivotaVsShopify },
]);

const faqJsonLd = buildFaqJsonLd(comparisonFaqItems);

export const metadata = buildMarketingMetadata({
  title: "Pivota vs Shopify | Store platform access plus merchant-controlled continuity",
  description:
    "Shopify is one example of a store platform with growing AI commerce support. Pivota works alongside Shopify, Wix, WooCommerce, BigCommerce, and similar stacks to add merchant control, continuity, and fallback across AI buying surfaces.",
  path: routePaths.pivotaVsShopify,
});

export default function PivotaVsShopifyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="pivota-vs-shopify-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="pivota-vs-shopify-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Pivota with Shopify and other store platforms" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Store platforms and merchant control
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Use your store platform for access. Add Pivota for control, continuity, and fallback.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Shopify is one example of a store platform with growing AI commerce support.
                      Wix, WooCommerce, BigCommerce, and similar stacks matter too.
                    </p>
                    <p className="mt-2">
                      Store platforms help merchants run storefront operations and native selling
                      paths where available. Pivota adds a merchant-controlled layer for product
                      resolution, checkout continuity, payments, write-back, and fallback across
                      fragmented agent surfaces.
                    </p>
                    <p className="mt-2">
                      Store platform access is useful. It is not the same as merchant control.
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
                      <Link href={routePaths.howPivotaWorks}>See how Pivota works</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Different layers, different jobs
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Store platforms such as Shopify, Wix, WooCommerce, and BigCommerce:
                      storefront operations, merchandising, and native selling paths where
                      available
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Pivota: merchant-controlled layer across product resolution, offers,
                      checkout continuity, payments, and merchant write-back
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Aurora and branded agent experiences sit above the Pivota gateway, not beside
                      it as a competing gateway
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Store platform access is useful, but not the whole stack
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <p>
                    Platform-native AI paths matter, especially when they reduce friction and give
                    merchants a faster way into new buying surfaces.
                  </p>
                  <p>
                    But as agent surfaces fragment, merchants still need a platform-independent
                    control layer that keeps recommendation, checkout, payment, and write-back
                    continuity aligned across more than one surface.
                  </p>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Store platforms and Pivota solve different layers
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                  <p>
                    Shopify is increasingly strong at getting merchants into major AI shopping
                    channels. That same pattern is spreading across store platforms more broadly.
                  </p>
                  <div>
                    <p className="text-foreground">That makes store platforms a strong answer for:</p>
                    <ul className="mt-3 space-y-2">
                      {shopifyStrengths.map((item) => (
                        <li key={item} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>But that still leaves a different problem unsolved:</p>
                  <p className="text-foreground/90">
                    How does an agent turn a real user prompt into the right recommendation,
                    payment flow, merchant-native transaction, and system write-back across many
                    different agent surfaces?
                  </p>
                  <p>That is the layer Pivota is built to serve.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What Pivota is really for
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Pivota is the commerce layer for agents
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <article className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Workflow className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Pivota is not just a path into LLMs. Pivota is the merchant-controlled
                      commerce layer for agents.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/90">
                      Pivota helps merchants move from prompt to recommendation to transaction with
                      stronger continuity across systems.
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-foreground">
                        Across its architecture, Pivota already spans:
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                        {pivotaArchitecture.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  <article className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-foreground">
                        And across those layers, Pivota provides:
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                        {pivotaCapabilities.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                      <p>That is why Pivota is better described as:</p>
                      <ul className="space-y-2">
                        <li>• a commerce sub-agent</li>
                        <li>• a commerce skill</li>
                        <li>• a merchant gateway for agent-native commerce</li>
                      </ul>
                      <p className="text-foreground/90">
                        not just an AI channel enablement tool.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Use your store platform first when</p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                    <p>Use the store platform first if your business mainly needs:</p>
                    <ul className="space-y-2">
                      {chooseShopifyList.map((item) => (
                        <li key={item} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-foreground/90">
                      If your main goal is faster platform-native access and the default path is
                      already enough, the store platform is often the fastest answer.
                    </p>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Add Pivota when</p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                    <p>Add Pivota when your business needs more than platform access.</p>
                    <div className="space-y-3">
                      {choosePivotaList.map((item, index) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                        >
                          <p className="font-semibold text-foreground">
                            {index + 1}. {item.title}
                          </p>
                          <p className="mt-2">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Why this is a better long-term architecture
                </p>
                <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>In an agentic world, the front end may change constantly:</p>
                    <ul className="space-y-2">
                      {futureAgentSurfaces.map((item) => (
                        <li key={item} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <article className="rounded-3xl border border-border/70 bg-background/55 px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                      <p>Merchants do not want to rebuild commerce logic for each of them.</p>
                      <p>They need one layer that can:</p>
                      <ul className="space-y-2">
                        {gatewayNeeds.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                      <p>That is the role of a merchant-controlled fallback and execution layer.</p>
                      <p className="text-foreground/90">
                        That is the role Pivota is designed to play.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  The simplest way to say it
                </p>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>Store platforms help merchants enter native AI selling paths.</p>
                    <p className="text-foreground/90">
                      Pivota helps merchants keep control, continuity, and fallback across systems.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-primary/20 bg-primary/8 px-5 py-5 text-sm leading-7 text-foreground">
                    <p className="font-semibold">Store platform access is not the same as merchant control.</p>
                    <p className="mt-2">
                      Use your store platform for storefront operations and native access where
                      available. Use Pivota for control, continuity, and fallback across fragmented
                      agent surfaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
                </div>
                <QuestionAnswerList items={comparisonFaqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">Final CTA</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Want a merchant-controlled path on top of your store platform?
                    </h2>
                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                      Talk to Pivota about product resolution, checkout continuity, payments,
                      write-back, and fallback across AI buying surfaces.
                    </p>
                  </div>
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
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                  Merchant gateway category page
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
