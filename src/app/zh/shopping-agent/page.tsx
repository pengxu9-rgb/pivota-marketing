import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentSurfacesSwitcher from "@/components/AgentSurfacesSwitcher";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { creatorAgentDemos } from "@/config/creatorAgentDemos";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pivota Shopping Agent：面向 LLM 的购物层",
  description:
    "Pivota Shopping Agent 为 ChatGPT、Claude、Perplexity、Gemini 等大模型提供标准化商品目录与下单 API，是专为 AI 代理打造的购物层。",
  alternates: {
    canonical: "/zh/shopping-agent",
    languages: {
      en: "/shopping-agent",
      "zh-Hans": "/zh/shopping-agent",
      "x-default": "/shopping-agent",
    },
  },
  openGraph: {
    title: "Pivota Shopping Agent：面向 LLM 的购物层",
    description:
      "通过 Pivota Shopping Agent，将你的商品目录标准化，并安全暴露给 ChatGPT、Claude、Perplexity、Gemini 等 LLM。",
    url: "https://pivota.cc/zh/shopping-agent",
    siteName: "Pivota",
    type: "website",
    images: [
      {
        url: "/og-shopping-agent-zh.svg",
        width: 1200,
        height: 630,
        alt: "Pivota Shopping Agent – 面向大模型的统一购物层",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivota Shopping Agent：面向 LLM 的购物层",
    description:
      "为大模型提供标准化商品目录与下单能力，让你的商品可以被智能代理发现与推荐。",
    images: ["/og-shopping-agent-zh.svg"],
  },
};

const shoppingAgentSchemaZh = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pivota Shopping Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://agent.pivota.cc",
  description:
    "面向 ChatGPT、Claude、Perplexity、Gemini 等大模型的购物代理，提供标准化商品目录 API 和下单流程。",
  provider: {
    "@type": "Organization",
    name: "Pivota",
    url: "https://pivota.cc",
  },
} as const;

const shoppingAgentFaqSchemaZh = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "什么是 Pivota Shopping Agent？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Pivota Shopping Agent 是一层位于大模型与商家之间的「购物层」，负责标准化商品数据，并提供统一的商品目录与下单 API，让智能体专注于决策与推荐，而不是电商底层实现。",
      },
    },
    {
      "@type": "Question",
      name: "大模型 / Agent 如何集成这个 Shopping Agent？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "大模型可以通过 AI Manifest、OpenAPI 规范以及目录接口（如 GET /api/catalog 和 GET /api/catalog/{id}）来接入 Pivota Shopping Agent，只要能够发起 HTTP / OpenAPI 调用的 LLM 或 Agent 都可以集成。",
      },
    },
    {
      "@type": "Question",
      name: "商家接入 Pivota Shopping Agent 能获得什么？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "商家接入后，商品会被转换为 AI 可读的结构化数据，可被 ChatGPT、Claude、Perplexity、Gemini 等大模型安全理解与推荐；一次接入即可覆盖多种智能代理，并能看到来自 AI 渠道的流量与订单归因。",
      },
    },
  ],
} as const;

export default function ShoppingAgentZhPage() {
  const ninaDemo =
    creatorAgentDemos.find((d) => d.slug === "nina-studio")?.url ??
    "https://creator.pivota.cc/creator/nina-studio";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="shopping-agent-jsonld-zh"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingAgentSchemaZh) }}
      />

      <Script
        id="shopping-agent-faq-jsonld-zh"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingAgentFaqSchemaZh) }}
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
              一层专为 ChatGPT、Claude、Perplexity、Gemini 等 LLM 设计的「购物层」，将商家商品标准化并安全暴露给智能代理。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://agent.pivota.cc"
                className="btn-hero inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold"
              >
                立即体验 Agent
              </a>
              <a
                href="https://agent.pivota.cc/for-ai"
                className="btn-secondary inline-flex items-center justify-center text-sm font-semibold"
              >
                面向 AI 工程师 / API 文档
              </a>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              适配各类智能体与助手：支持 ChatGPT、Claude、Perplexity、Gemini，以及任何可以调用 HTTP / OpenAPI 的 LLM。
            </p>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-xl font-semibold">Pivota Shopping Agent 是什么？</h2>
            <p className="text-sm text-muted-foreground">
              它位于 LLM 与商家之间：负责清洗与标准化商品数据，对外提供统一的商品目录 API 与下单能力，让智能体专注于决策与推荐，而不是电商底层实现。
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• AI 友好的商品目录与搜索接口</li>
              <li>• 稳定的 ID、价格与库存字段，方便 LLM 推理</li>
              <li>• 直达商品详情与下单链接</li>
            </ul>
          </div>
        </section>

        {/* Creator Agents promo (EN copy for now) */}
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
                href="/zh/creator-agents"
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
              面向 LLM / AI 工程师
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              通过一层统一的 Shopping Agent，为你的智能体打开真实电商世界。利用 Manifest、OpenAPI 与目录接口，让大模型安全访问商品与下单能力。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">AI Manifest</h3>
              <p className="text-sm text-muted-foreground mb-2">
                直接从 ChatGPT 或其他支持插件 / Manifest 的系统接入：
              </p>
              <p className="text-xs font-mono break-all text-primary">
                https://agent.pivota.cc/.well-known/ai-plugin.json
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">OpenAPI 规范</h3>
              <p className="text-sm text-muted-foreground mb-2">
                生成 SDK、直接从代理或后端调用：
              </p>
              <p className="text-xs font-mono break-all text-primary">
                https://agent.pivota.cc/openapi.json
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">目录接口</h3>
              <p className="text-sm text-muted-foreground">
                标准化商品目录，适合搜索、推荐与对话式购物：
              </p>
              <ul className="mt-2 text-xs font-mono text-muted-foreground space-y-1">
                <li>GET /api/catalog</li>
                <li>{"GET /api/catalog/{id}"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold text-foreground">示例 JSON 响应</h3>
            <p className="text-sm text-muted-foreground max-w-2xl">
              为 LLM 设计的紧凑 JSON 结构，字段含义清晰，便于大模型理解、比价与生成推荐理由：
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
              面向商家 / 品牌
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Pivota Shopping Agent 让你的商品可以被 ChatGPT、Claude、Perplexity、Gemini 等 LLM
              安全理解与推荐。你仍然使用原有店铺系统，我们负责对接智能体。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                商品变得「AI 可读」
              </h3>
              <p className="text-sm text-muted-foreground">
                标准化标题、卖点、价格与库存字段，让大模型可以可靠理解并向用户解释你的产品。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                一次接入，覆盖多代理
              </h3>
              <p className="text-sm text-muted-foreground">
                通过一次对接 Pivota，让你的商品可以被多个智能代理和助手访问，而无需为每家平台维护不同的商品 feed。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                归因与 AI 流量分析
              </h3>
              <p className="text-sm text-muted-foreground">
                看到哪些代理、渠道与模型带来了新增订单，帮助你优化定价与营销策略。
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              工作原理：3 个步骤
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              保持现有电商系统不变，在其之上叠加一层面向 LLM 的「智能购物层」。
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">1. 商家接入 Pivota</h3>
              <p className="text-sm text-muted-foreground">
                通过插件或轻量接口将店铺连接到 Pivota，我们同步并标准化你的商品目录。
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">
                2. Pivota 标准化并暴露 API
              </h3>
              <p className="text-sm text-muted-foreground">
                Pivota 将商品转为结构化 JSON，并通过 Shopping Agent 暴露给智能体与代理。
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">
                3. LLM 搜索、推荐并创建订单
              </h3>
              <p className="text-sm text-muted-foreground">
                智能体调用 Shopping Agent 完成搜索与下单，你仍然是 Merchant of Record，按原流程发货与结算。
              </p>
            </div>
          </div>
        </section>

        {/* Links & Resources */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              链接与资源入口
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              推荐将以下入口加入你的内部文档或工程 README，方便 AI 工程师与商务团队查阅。
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
                面向 AI 工程师 / API 文档
              </h3>
              <Link
                href="https://agent.pivota.cc/for-ai"
                className="text-sm text-primary break-all hover:underline"
              >
                https://agent.pivota.cc/for-ai
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-1">OpenAPI 规范</h3>
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
              常见问题
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              快速了解 Pivota Shopping Agent 如何同时服务 AI 工程师与商家。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                什么是 Pivota Shopping Agent？
              </h3>
              <p className="text-sm text-muted-foreground">
                它是一层面向大模型的「统一购物层」，位于 LLM 与商家系统之间，负责标准化商品数据并提供统一的目录与下单 API，让智能体专注于理解用户需求与推荐商品。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                大模型 / Agent 如何集成？
              </h3>
              <p className="text-sm text-muted-foreground">
                通过 AI Manifest、OpenAPI 规范以及目录接口（如 GET /api/catalog 和 GET /api/catalog/{`{id}`}），任何可以发起 HTTP / OpenAPI 调用的 LLM 或 Agent 都可以搜索、比价并推荐商品。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                商家能获得什么价值？
              </h3>
              <p className="text-sm text-muted-foreground">
                商品变得对 ChatGPT、Claude、Perplexity、Gemini 等大模型可读、可推荐；一次接入即可覆盖多种智能代理，并可通过归因与分析看到来自 AI 渠道的增量订单。
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
