import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agentic Commerce API: MCP, ACP & AP2 Integration | Pivota",
  description:
    "Build e-commerce into your AI. Use Pivota's API to integrate MCP (product data), ACP (orders), and AP2 (payments) in minutes. Get started now.",
  alternates: {
    canonical: "/developers",
    languages: {
      en: "/developers",
      "zh-Hans": "/zh/developers",
      "x-default": "/developers",
    },
  },
  openGraph: {
    title: "Agentic Commerce API: MCP, ACP & AP2 Integration | Pivota",
    description:
      "Build e-commerce into your AI. Use Pivota's API to integrate MCP (product data), ACP (orders), and AP2 (payments) in minutes.",
    images: [
      {
        url: "/og-developers.svg",
        width: 1200,
        height: 630,
        alt: "Pivota – Agentic Commerce API (MCP, ACP, AP2)",
      },
    ],
  },
};

export default function DevelopersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Pivota? How is it different from a payment API?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pivota is a complete Agentic Commerce API, not just payments. We provide the full stack: AI agent access to product data (MCP), unified ordering (ACP), and direct-to-merchant payment settlement (AP2).",
        },
      },
      {
        "@type": "Question",
        name: "Which Agentic Commerce protocols do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We are built on the new industry standards. Our APIs unify MCP (Model Context Protocol), ACP (Agentic Commerce Protocol), and AP2 (Agent Payments Protocol) into a single, easy-to-use integration.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get access to merchant products for my AI agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Once you integrate the Pivota API, you get access to our entire network of federated merchants. You can pull product details, check inventory, and place orders with any merchant on our platform.",
        },
      },
      {
        "@type": "Question",
        name: "How does the payment flow work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The user pays within your agent portal. Pivota's API (using AP2) handles the transaction, which flows directly to the merchant's account. The merchant is the seller of record; Pivota is the infrastructure.",
        },
      },
    ],
  } as const;
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="faq-jsonld-developers"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Agentic Commerce API
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Integrate MCP (product data), ACP (orders), and AP2 (payments) to
            enable AI agents to discover products, place orders, and process
            payments—through one unified API.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">MCP</h3>
              <p className="text-sm text-muted-foreground">
                Product catalog, inventory, and pricing—normalized across Shopify,
                WooCommerce, and custom stores.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">ACP</h3>
              <p className="text-sm text-muted-foreground">
                Create carts, place and track orders with built-in fraud checks
                and fulfillment events.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">AP2</h3>
              <p className="text-sm text-muted-foreground">
                Direct, compliant payments between agents and merchants with
                payouts and reconciliations.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            If you want to see how this Agentic Commerce stack shows up inside LLMs,
            explore the{" "}
            <Link href="/shopping-agent" className="underline underline-offset-4">
              Pivota Shopping Agent entry point
            </Link>
            {" "}to understand the AI-facing shopping layer.
            {" "}Want a creator-facing surface?{" "}
            <Link href="/creator-agents" className="underline underline-offset-4">
              Explore Creator Agents
            </Link>
            .
          </p>
          <div className="mt-10 flex gap-3">
            <a
              href="https://agents.pivota.cc/integration"
              className="btn-hero inline-flex items-center justify-center rounded-lg px-5 py-3"
            >
              Read the Integration Guide
            </a>
            <a
              href="https://agents.pivota.cc/signup"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-primary/40 hover:border-primary bg-primary/10 text-primary transition"
            >
              Get API Access
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
