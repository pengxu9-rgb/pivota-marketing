import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Through AI: Connect Your Store to the Agentic Network | Pivota",
  description:
    "Open a new sales channel. Connect your e-commerce store to Pivota and let hundreds of AI agents and chatbots sell your products for you.",
  alternates: {
    canonical: "/merchants",
    languages: {
      en: "/merchants",
      "zh-Hans": "/zh/merchants",
      "x-default": "/merchants",
    },
  },
  openGraph: {
    title: "Sell Through AI: Connect Your Store to the Agentic Network | Pivota",
    description:
      "Open a new sales channel. Connect your store to Pivota and let AI agents sell your products.",
    images: [
      { url: "/og-merchants.svg", width: 1200, height: 630, alt: "Pivota – Sell Through AI" },
    ],
  },
};

export default function MerchantsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is 'Agentic Commerce'?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It's a new sales channel. Agentic Commerce allows AI-powered agents (like advanced chatbots) to discover your products and sell them to users. Pivota connects your store to this new network.",
        },
      },
      {
        "@type": "Question",
        name: "How do I connect my store to Pivota?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We provide simple plugins for major platforms like Shopify, Magento, and WooCommerce. For custom stores, you can use our lightweight Merchant API. Setup is typically under 30 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Who handles shipping and customer service?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You do. You remain the merchant of record. Orders from AI agents appear in your existing dashboard just like any other sale. You ship the product and handle after-sale service as normal.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Instantly. When a user buys your product through an AI agent, the payment flows directly into your connected merchant account. There is no 'payout' delay.",
        },
      },
    ],
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Script
        id="faq-jsonld-merchants"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Sell Through AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Connect your store to the agentic network and open a new sales
            channel. Let AI agents and chatbots discover your products and sell
            them to users—while you stay merchant of record.
          </p>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            The{" "}
            <Link href="/shopping-agent" className="underline underline-offset-4">
              Pivota Shopping Agent
            </Link>
            {" "}is the AI-facing entry point that makes your products discoverable by ChatGPT, Claude,
            Perplexity, Gemini and other LLMs.
            {" "}Looking to activate creators with AI storefronts?{" "}
            <Link href="/creator-agents" className="underline underline-offset-4">
              Explore Creator Agents
            </Link>
            .
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">New Demand</h3>
              <p className="text-sm text-muted-foreground">
                Tap into AI-native traffic from assistants and agents integrating
                Pivota’s API.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">No New Tools</h3>
              <p className="text-sm text-muted-foreground">
                Orders appear in your existing dashboard and workflows. You ship
                and support customers as usual.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">Instant Payment</h3>
              <p className="text-sm text-muted-foreground">
                Payment flows directly into your merchant account—no payout
                delays.
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <a
              href="https://merchant.pivota.cc/signup"
              className="btn-hero inline-flex items-center justify-center rounded-lg px-5 py-3"
            >
              Connect Your Store
            </a>
            <a
              href="https://merchant.pivota.cc/login"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-accent/40 hover:border-accent bg-accent/10 text-accent transition"
            >
              Go to Dashboard
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
