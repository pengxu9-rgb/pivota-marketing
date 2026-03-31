import type { Metadata } from "next";

export const siteName = "Pivota";
export const siteUrl = "https://pivota.cc";
export const categoryAnchor = "merchant gateway for agent-native commerce";
export const merchantSignupPath = "https://merchant.pivota.cc/signup?source=marketing";
export const aiReadinessSignupPath = "/merchant/signup/ai-readiness";
export const auroraUrl = "https://aurora.pivota.cc";
export const lastUpdatedIso = "2026-03-23";
export const lastUpdatedLabel = "Updated March 23, 2026";

export const routePaths = {
  home: "/",
  aiReadiness: "/ai-readiness",
  pivotaVsShopify: "/pivota-vs-shopify",
  whatIsAgenticCommerce: "/what-is-agentic-commerce",
  whatIsAgentNativeCommerce: "/what-is-agent-native-commerce",
  merchantGateway: "/merchant-gateway-for-agent-native-commerce",
  howPivotaWorks: "/how-pivota-works",
  merchantNativeCheckout: "/merchant-native-checkout",
  developers: "/developers",
  apiOverview: "/developers/api-overview",
  faq: "/faq",
  useCases: "/use-cases",
  about: "/about",
  blog: "/blog",
} as const;

export const footerDescriptor = "Pivota is the merchant gateway for agent-native commerce.";

export const defaultOgTitle = "Pivota — The Merchant Gateway for Agent-Native Commerce";
export const defaultOgDescription =
  "The merchant gateway for agent-native commerce. Built for a future where commerce happens across many agents, not one AI app.";

export const homepageTitle = "Pivota | Merchant Gateway for Agent-Native Commerce";
export const homepageMetaDescription =
  "Pivota is the commerce layer that agents call to turn prompts into recommendations, merchant-native checkout, payments, and order write-back across merchant systems.";
export const aiReadinessTitle = "Can Your Store Win Customers from AI? | Pivota";
export const aiReadinessMetaDescription =
  "Connect your store to Pivota and quickly spot likely issues across catalog, checkout, and payments, then get clear next steps on what to fix first.";

export const primaryNavItems = [
  { label: "Product", href: routePaths.merchantGateway },
  { label: "How it works", href: routePaths.howPivotaWorks },
  { label: "Merchant-native checkout", href: routePaths.merchantNativeCheckout },
  { label: "Docs", href: routePaths.developers },
  { label: "FAQ", href: routePaths.faq },
  { label: "About", href: routePaths.about },
] as const;

export const footerExploreItems = [
  ...primaryNavItems,
  { label: "Use Cases", href: routePaths.useCases },
  { label: "Blog", href: routePaths.blog },
] as const;

export const coreAnswerBlock = [
  "Pivota is the merchant gateway for agent-native commerce.",
  "It turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
] as const;

export const homepageHeroAnswerBlock = [
  "Pivota is the commerce layer that agents call to turn prompts into recommendations, merchant-native checkout, payments, and order write-back.",
  "Works across agent surfaces, store platforms, and payment systems.",
] as const;

export const homepageResultStatements = [
  {
    title: "Orchestration",
    body: "Turn user goals into managed shopping workflows.",
  },
  {
    title: "Decisioning",
    body: "Understand intent, compare options, and recommend the right products.",
  },
  {
    title: "Execution",
    body: "Resolve checkout, payments, authorization, and write-back through merchant-native rails.",
  },
] as const;

export const productCards = [
  {
    title: "Pivota Gateway",
    eyebrow: undefined,
    body: "Merchant gateway for LLM- and agent-driven commerce.",
    ctaLabel: "Learn more",
    href: "#pivota-gateway-details",
  },
  {
    title: "Custom Brand Agent",
    eyebrow: "Powered by Aurora on Pivota.",
    body: "Launch a branded AI shopping experience with your own UI, recommendations, and merchant-native checkout.",
    ctaLabel: "Explore Aurora",
    href: auroraUrl,
  },
] as const;

export const comparisonRows = [
  {
    label: "Merchant gateway vs payment gateway",
    pivota:
      "Pivota spans merchant discovery, merchant-native checkout, payment routing, and write-back.",
    alternative: "A payment gateway handles payment processing, not the full merchant execution layer.",
  },
  {
    label: "Merchant gateway vs marketplace",
    pivota:
      "Pivota routes agent-native demand into merchant-native transactions while merchants keep control of storefront and operations.",
    alternative: "A marketplace owns the transaction surface and merchant flow.",
  },
  {
    label: "Merchant gateway vs checkout-only tool",
    pivota:
      "Pivota covers queryability, execution, checkout, payment-state sync, and order write-back.",
    alternative: "A checkout-only tool covers one step and does not define the execution layer.",
  },
] as const;

export const faqItems = [
  {
    question: "What is Pivota?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce. It turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  },
  {
    question: "What is a merchant gateway for agent-native commerce?",
    answer:
      "A merchant gateway for agent-native commerce is the execution layer between LLM or agent demand and merchant systems. Pivota makes catalogs queryable, routes demand into merchant-native checkout and payment flows, and writes execution state back into merchant systems.",
  },
  {
    question: "How do merchants turn LLM traffic into transactions?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, so it helps merchants turn LLM and agent traffic into merchant-native transactions. It connects catalog, checkout, payment, and post-purchase systems into one merchant-controlled execution path.",
  },
  {
    question: "How can merchants become discoverable across ChatGPT and other LLM surfaces?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, and it helps merchants become more queryable across LLM surfaces. It structures catalogs, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    question: "How do AI agents connect to merchant checkout and payment?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, and it connects agent demand to merchant-native checkout and payment flows. Merchants keep existing payment relationships, while Pivota supports order authorization, payment-state sync, and write-back.",
  },
  {
    question: "What infrastructure supports merchant-native LLM transactions?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce. It provides the execution layer across catalog normalization, merchant-native checkout, payment routing, and order or payment write-back.",
  },
  {
    question: "What is agentic commerce?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, and agentic commerce is the broader market term for commerce shaped by LLMs and agents. For merchants, that broader shift only becomes useful when demand can resolve into merchant-native transactions.",
  },
  {
    question: "How is agentic commerce different from agent-native commerce?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, which is the more specific execution and category framing. Agentic commerce is the broader market term, while agent-native commerce describes the merchant-controlled path that connects demand to catalog, checkout, payment, and post-purchase systems.",
  },
  {
    question: "What infrastructure supports agentic commerce for merchants?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, so it provides the execution layer that makes agentic commerce work for merchants. That layer spans catalog queryability, merchant-native checkout, payment routing, payment-state sync, and order or payment write-back.",
  },
  {
    question: "How can merchants measure transactions from AI agents?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, so measurement is tied to execution rather than to vague traffic alone. Catalog events, checkout progress, payment state, and write-back create a clearer merchant transaction pathway.",
  },
  {
    question: "What is the difference between a merchant gateway and a payment gateway for AI commerce?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, which means it covers more than payment processing. A payment gateway handles payment rails, while a merchant gateway connects discovery, execution, checkout, payment, and post-purchase systems.",
  },
  {
    question: "Does Pivota replace a merchant’s existing systems?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce, but it is built on top of merchant systems rather than in place of them. Merchants keep their storefront, fulfillment, customer operations, and existing payment relationships.",
  },
  {
    question: "Is Pivota a marketplace or a checkout-only tool?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce. It is not a marketplace, and it is not a checkout-only tool, because it spans queryability, execution, merchant-native checkout, payment-state sync, and write-back.",
  },
] as const;

export const homepageFaqItems = [
  {
    question: "Is Pivota only for ChatGPT, Copilot, or Gemini?",
    answer:
      "No. Pivota is built for agent-native commerce across surfaces. It is the merchant gateway and commerce layer that different agents can call.",
  },
  {
    question: "Does Pivota depend on a single AI platform?",
    answer:
      "No. Pivota connects agent demand to merchant-native execution across store platforms, payments, and post-purchase systems.",
  },
  {
    question: "What does Pivota do beyond discoverability?",
    answer:
      "Pivota helps turn prompts into recommendations, merchant-native checkout flows, payments handling, and order write-back.",
  },
  {
    question: "Does Pivota replace Shopify?",
    answer:
      "No. Shopify can be a merchant platform and catalog rail. Pivota adds a deeper commerce execution layer for agents.",
  },
  {
    question: "When should a merchant use Pivota?",
    answer:
      "Pivota is most useful when merchants need more than discoverability — including prompt-aware recommendations, merchant-native checkout, payments orchestration, order write-back, cross-agent measurement, or branded agent experiences.",
  },
] as const;

export const homepageFaqPreviewItems = homepageFaqItems;

export const useCases = [
  {
    slug: "merchant-discovery",
    title: "Merchant discovery across LLM surfaces",
    prompt: "How can merchants become discoverable across ChatGPT and other LLM surfaces in agentic commerce?",
    summary:
      "Pivota is the merchant gateway for agent-native commerce, so it helps merchants structure catalogs, offers, and variants into a clearer merchant discovery layer for LLM and agent traffic.",
  },
  {
    slug: "merchant-native-checkout",
    title: "Merchant-native checkout for LLM and agent traffic",
    prompt: "How do AI agents connect to merchant checkout and payment?",
    summary:
      "Pivota is the merchant gateway for agent-native commerce, and it routes agent demand into merchant-native checkout and payment flows instead of forcing merchants into marketplace-owned execution.",
  },
  {
    slug: "payment-and-write-back",
    title: "Payment routing and execution write-back",
    prompt: "What infrastructure supports agentic commerce for merchants?",
    summary:
      "Pivota is the merchant gateway for agent-native commerce, and it keeps payment-state sync, order authorization, and write-back connected to merchant systems.",
  },
  {
    slug: "measurement",
    title: "Measurement across demand and execution",
    prompt: "How can merchants measure transactions from AI agents?",
    summary:
      "Pivota is the merchant gateway for agent-native commerce, and it helps merchants measure transaction pathways across discovery, checkout, payment, and post-purchase systems.",
  },
] as const;

export const demotedBlogSlugs = [
  "agentic-commerce-next-wave-creators",
  "coming-shift-agentic-commerce",
  "from-ads-subscriptions-to-agentic-commerce",
] as const;

function absoluteUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

type MarketingMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function buildMarketingMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
}: MarketingMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: path,
        "x-default": path,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: absoluteUrl(path),
      siteName,
      type: "website",
      images: [
        {
          url: "/og-home.svg",
          width: 1200,
          height: 630,
          alt: defaultOgTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["/og-home.svg"],
    },
  };
}

export function toAbsoluteUrl(path: string): string {
  return absoluteUrl(path);
}
