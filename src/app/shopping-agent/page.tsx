import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentSurfacesSwitcher from "@/components/AgentSurfacesSwitcher";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { creatorAgentDemos } from "@/config/creatorAgentDemos";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pivota Shopping Agent: AI-Ready Shopping Layer for LLMs",
  description:
    "Pivota Shopping Agent is an AI-ready shopping layer that exposes normalized product catalog APIs and ordering flows for ChatGPT, Claude, Perplexity, Gemini and other LLMs.",
  alternates: {
    canonical: "/shopping-agent",
    languages: {
      en: "/shopping-agent",
      "zh-Hans": "/zh/shopping-agent",
      "x-default": "/shopping-agent",
    },
  },
  openGraph: {
    title: "Pivota Shopping Agent: AI-Ready Shopping Layer for LLMs",
    description:
      "Expose an AI-friendly shopping layer for ChatGPT, Claude, Perplexity, Gemini and more via Pivota Shopping Agent.",
    url: "https://pivota.cc/shopping-agent",
    siteName: "Pivota",
    type: "website",
    images: [
      {
        url: "/og-shopping-agent-en.svg",
        width: 1200,
        height: 630,
        alt: "Pivota Shopping Agent – AI-ready shopping layer for LLMs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivota Shopping Agent: AI-Ready Shopping Layer for LLMs",
    description:
      "Normalize merchant catalogs and expose them as AI-friendly APIs and agents via Pivota Shopping Agent.",
    images: ["/og-shopping-agent-en.svg"],
  },
};

const shoppingAgentSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pivota Shopping Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://agent.pivota.cc",
  description:
    "An AI-ready shopping agent that exposes normalized product catalog APIs and ordering flows for LLMs like ChatGPT, Claude, Perplexity and Gemini.",
  provider: {
    "@type": "Organization",
    name: "Pivota",
    url: "https://pivota.cc",
  },
} as const;

const shoppingAgentFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Pivota Shopping Agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The Pivota Shopping Agent is an AI-ready shopping layer that sits between LLMs and merchants. It normalizes product data, exposes a clean catalog API, and handles ordering flows so agents can focus on reasoning instead of commerce plumbing.",
      },
    },
    {
      "@type": "Question",
      name: "How do LLMs integrate with the Shopping Agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "LLMs and agents integrate via the AI plugin manifest, the OpenAPI specification, and the catalog endpoints such as GET /api/catalog and GET /api/catalog/{id}. Any LLM that can call HTTP or OpenAPI can use the Pivota Shopping Agent.",
      },
    },
    {
      "@type": "Question",
      name: "How do merchants benefit from the Pivota Shopping Agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Merchants get their products normalized into AI-friendly JSON that can be safely understood by ChatGPT, Claude, Perplexity, Gemini and other LLMs. One integration powers many agents, with attribution and analytics for AI-driven traffic and orders.",
      },
    },
  ],
} as const;

export default function ShoppingAgentPage() {
  const ninaDemo =
    creatorAgentDemos.find((d) => d.slug === "nina-studio")?.url ??
    "https://creator.pivota.cc/creator/nina-studio";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="shopping-agent-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingAgentSchema) }}
      />

      <Script
        id="shopping-agent-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingAgentFaqSchema) }}
      />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <AgentSurfacesSwitcher className="mb-2" />
        {/* Hero Section */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Pivota Shopping Agent
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              An AI-ready shopping layer for ChatGPT, Claude, Perplexity, Gemini and more. One agent
              and API endpoint that turns merchant catalogs into LLM-friendly product data and
              order flows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://agent.pivota.cc"
                className="btn-hero inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold"
              >
                Try the Agent
              </a>
              <a
                href="https://agent.pivota.cc/for-ai"
                className="btn-secondary inline-flex items-center justify-center text-sm font-semibold"
              >
                For AI Engineers / API Docs
              </a>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              Built for AI-native experiences: works with ChatGPT, Claude, Perplexity, Gemini and
              any LLM that can call HTTP/OpenAPI or use an AI manifest.
            </p>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-xl font-semibold">What is Pivota Shopping Agent?</h2>
            <p className="text-sm text-muted-foreground">
              Pivota Shopping Agent sits between LLMs and merchants. It normalizes product data,
              exposes a clean catalog API, and handles ordering flows so agents can focus on
              reasoning instead of commerce plumbing.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• AI-friendly product catalog and search</li>
              <li>• Stable IDs, prices and availability for LLMs</li>
              <li>• Direct links to product detail and checkout URLs</li>
            </ul>
          </div>
        </section>

        {/* Creator Agents promo */}
        <section className="card-gradient border border-border">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Creator Agents
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Creator Agents bring Shopping Agent capabilities into creator-first storefronts:
                browse categories, highlight deals, and let AI convert with chat + browse.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/creator-agents"
                className="btn-hero inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold"
              >
                Learn about Creator Agents
              </Link>
              <a
                href={ninaDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border border-primary/40 hover:border-primary bg-primary/10 text-primary transition"
                // TODO: track("creator_agents_open_nina_click")
              >
                Open Nina Studio demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
                <span className="sr-only">Opens in a new tab</span>
              </a>
            </div>
          </div>
        </section>

        {/* For LLMs / AI Engineers */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              For LLMs &amp; AI Engineers
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Plug a single, well-structured shopping layer into your agent. Use the manifest,
              OpenAPI spec, and catalog endpoints to give your LLMs safe, structured access to
              real products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">AI Plugin Manifest</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Connect from ChatGPT or any manifest-based tool:
              </p>
              <p className="text-xs font-mono break-all text-primary">
                https://agent.pivota.cc/.well-known/ai-plugin.json
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">OpenAPI Spec</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Generate SDKs and call the API directly:
              </p>
              <p className="text-xs font-mono break-all text-primary">
                https://agent.pivota.cc/openapi.json
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">Catalog Endpoints</h3>
              <p className="text-sm text-muted-foreground">
                Normalized product catalog for search and recommendations:
              </p>
              <ul className="mt-2 text-xs font-mono text-muted-foreground space-y-1">
                <li>GET /api/catalog</li>
                <li>{"GET /api/catalog/{id}"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Example catalog response
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl">
              A compact, AI-friendly JSON payload designed to be easy for LLMs to read, reason
              over, and turn into recommendations or purchase flows:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-card p-4 overflow-x-auto">
              <pre className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                <code>{`{
  "store": { "name": "Pivota Shopping AI" },
  "products": [
    {
      "id": "123456",
      "name": "Example Product",
      "short_description": "A short, AI-friendly product description.",
      "price": { "amount": 24.99, "currency": "USD", "display": "$24.99" },
      "availability": "in_stock",
      "image": "https://agent.pivota.cc/...",
      "url": "https://agent.pivota.cc/products/123456",
      "buy_url": "https://agent.pivota.cc/order?...",
      "features": ["Fast shipping", "30-day return"],
      "why_recommended": "Good value for everyday use."
    }
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* For Merchants */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              For Merchants
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Pivota Shopping Agent makes your products AI-readable and discoverable across the
              agent ecosystem. You keep your existing storefront and workflows; we handle the
              AI-facing layer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                Your products become AI-readable
              </h3>
              <p className="text-sm text-muted-foreground">
                We normalize titles, descriptions, pricing and availability into an LLM-friendly
                format so agents can understand and recommend your catalog.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                Unified catalog across agents
              </h3>
              <p className="text-sm text-muted-foreground">
                One integration powers many agents and platforms, rather than bespoke feeds for
                each AI assistant.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                Attribution &amp; analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Track AI-driven traffic and orders so you can see which agents, LLMs and campaigns
                are driving incremental revenue.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple three-step architecture that keeps merchants in control while giving LLMs
              the structure they need to safely transact.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">1. Connect merchant stores</h3>
              <p className="text-sm text-muted-foreground">
                Merchants connect their store or catalog to Pivota using native integrations or a
                lightweight API.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">
                2. Normalize products &amp; expose APIs
              </h3>
              <p className="text-sm text-muted-foreground">
                Pivota normalizes product data and exposes AI-friendly catalog and ordering APIs
                through the Shopping Agent.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">
                3. LLMs search, recommend &amp; order
              </h3>
              <p className="text-sm text-muted-foreground">
                LLMs and agents call Pivota to browse, compare and purchase products while
                merchants stay merchant of record.
              </p>
            </div>
          </div>
        </section>

        {/* Links & Resources */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Links &amp; resources
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Bookmark these entry points for your LLM integrations and merchant onboarding
              workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-1">
                Pivota Shopping Agent Portal
              </h3>
              <Link
                href="https://agent.pivota.cc"
                className="text-sm text-primary break-all hover:underline"
              >
                https://agent.pivota.cc
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-1">
                For AI Engineers / API Docs
              </h3>
              <Link
                href="https://agent.pivota.cc/for-ai"
                className="text-sm text-primary break-all hover:underline"
              >
                https://agent.pivota.cc/for-ai
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-1">OpenAPI Spec</h3>
              <Link
                href="https://agent.pivota.cc/openapi.json"
                className="text-sm text-primary break-all hover:underline"
              >
                https://agent.pivota.cc/openapi.json
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-1">AI Manifest</h3>
              <Link
                href="https://agent.pivota.cc/.well-known/ai-plugin.json"
                className="text-sm text-primary break-all hover:underline"
              >
                https://agent.pivota.cc/.well-known/ai-plugin.json
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A quick overview of how the Pivota Shopping Agent works for both AI engineers and merchants.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What is the Pivota Shopping Agent?
              </h3>
              <p className="text-sm text-muted-foreground">
                It is an AI-ready shopping layer that sits between LLMs and merchants, normalizing product data and exposing a clean catalog and ordering API so agents can focus on reasoning instead of commerce plumbing.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How do LLMs integrate with it?
              </h3>
              <p className="text-sm text-muted-foreground">
                LLMs use the AI plugin manifest, the OpenAPI spec, and catalog endpoints like GET /api/catalog and GET /api/catalog/{`{id}`} to search, compare and recommend products in a structured, safe way.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How do merchants benefit?
              </h3>
              <p className="text-sm text-muted-foreground">
                Merchants get AI-readable product data that can be discovered by ChatGPT, Claude, Perplexity, Gemini and more—through a single integration—with attribution and analytics for AI-driven orders.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
