import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "智能商业 API：整合 MCP、ACP 与 AP2 | Pivota",
  description:
    "将电商能力接入你的 AI。使用 Pivota API 在数分钟内集成 MCP（商品数据）、ACP（下单）、AP2（支付）。",
  alternates: {
    canonical: "/zh/developers",
    languages: {
      en: "/developers",
      "zh-Hans": "/zh/developers",
      "x-default": "/developers",
    },
  },
};

export default function DevelopersZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "什么是 Pivota？它与支付 API 有何不同？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pivota 是完整的智能商业 API，而不是单一支付接口。我们提供全栈能力：AI 代理获取商品数据（MCP）、统一下单（ACP）以及直达商户结算（AP2）。",
        },
      },
      {
        "@type": "Question",
        name: "你们支持哪些智能商业协议？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "我们基于新行业标准，将 MCP（模型上下文协议）、ACP（智能商业协议）和 AP2（代理支付协议）统一为一套易用 API。",
        },
      },
      {
        "@type": "Question",
        name: "我的 AI 代理如何访问商户商品？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "接入 Pivota API 后，你即可访问我们的联合商户网络，拉取商品详情、检查库存，并与平台任一商户下单。",
        },
      },
      {
        "@type": "Question",
        name: "支付流程是怎样的？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "用户在你的代理端完成支付。Pivota 的 API（基于 AP2）处理交易，款项直接进入商户账户。商户为交易主体；Pivota 提供基础设施。",
        },
      },
    ],
  } as const;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Script
        id="faq-jsonld-zh-developers"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            智能商业 API
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            统一接入 MCP（商品数据）、ACP（下单）与 AP2（支付），让你的 AI 代理可搜索商品、创建订单与完成支付。
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">MCP</h3>
              <p className="text-sm text-muted-foreground">商品目录、库存与价格；规范化对接 Shopify、WooCommerce 与自建商店。</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">ACP</h3>
              <p className="text-sm text-muted-foreground">创建购物车、下单与跟踪；内置风控与履约事件。</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">AP2</h3>
              <p className="text-sm text-muted-foreground">代理与商户间合规直连支付，支持结算与对账。</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
