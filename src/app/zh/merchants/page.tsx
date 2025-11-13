import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "通过 AI 销售：把你的店铺接入智能代理网络 | Pivota",
  description:
    "开辟全新销售渠道。将你的电商店铺连接到 Pivota，让数百个 AI 代理和聊天机器人为你销售产品。",
  alternates: {
    canonical: "/zh/merchants",
    languages: {
      en: "/merchants",
      "zh-Hans": "/zh/merchants",
      "x-default": "/merchants",
    },
  },
  openGraph: {
    title: "通过 AI 销售：把你的店铺接入智能代理网络 | Pivota",
    description: "连接店铺到 Pivota 的代理网络，获取海外增量订单。",
    images: [
      { url: "/og-merchants-zh.svg", width: 1200, height: 630, alt: "Pivota – 面向商家" },
    ],
  },
};

export default function MerchantsZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pivota 如何帮助我在北美和欧洲销售产品？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pivota 将你的产品目录连接到已在美国和欧洲运营的数百个 AI 销售代理。它是触达海外客户的全新自动化销售渠道。",
        },
      },
      {
        "@type": "Question",
        name: "我需要注册海外公司或开设海外银行账户吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "不需要。你只需连接现有店铺。当订单以美元或欧元成交时，付款将直接进入你的商家账户。跨境交易由 Pivota 的基础设施处理。",
        },
      },
      {
        "@type": "Question",
        name: "我如何向这些 AI 代理提供商品信息？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "将你的电商店铺（如 Shopify，或自建 API）一次性连接到 Pivota。我们会标准化你的商品数据，并向整个代理网络提供。",
        },
      },
      {
        "@type": "Question",
        name: "国际物流与退换货由谁负责？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "由你负责。作为商家，你接收订单并负责将商品寄送给终端客户，同时处理售后服务，与普通的国际订单流程相同。",
        },
      },
    ],
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Script
        id="faq-jsonld-zh-merchants"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            通过 AI 销售
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            将你的店铺接入智能代理网络，开拓海外客户。让 AI 代理和聊天机器人自动发现并销售你的产品，你仍然是商家主体（Merchant of Record）。
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">触达北美/欧洲</h3>
              <p className="text-sm text-muted-foreground">
                连接已在美国与欧洲运营的 AI 销售渠道，获取新增增量订单。
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">零额外系统</h3>
              <p className="text-sm text-muted-foreground">
                订单进入你原有的店铺后台；你按既有流程发货与售后。
              </p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="font-semibold text-foreground mb-2">即时到账</h3>
              <p className="text-sm text-muted-foreground">
                订单以美元或欧元成交后，款项直接进入你的商家账户，无需等待结算。
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <a
              href="https://merchant.pivota.cc/signup"
              className="btn-hero inline-flex items-center justify-center rounded-lg px-5 py-3"
            >
              连接你的店铺
            </a>
            <a
              href="https://merchant.pivota.cc/login"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-accent/40 hover:border-accent bg-accent/10 text-accent transition"
            >
              进入商家后台
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
