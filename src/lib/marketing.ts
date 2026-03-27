import type { Metadata } from "next";

export const siteName = "Pivota";
export const siteUrl = "https://pivota.cc";
export const categoryAnchor = "merchant gateway for agent-native commerce";
export const merchantSignupPath = "https://merchant.pivota.cc/signup?source=marketing";
export const lastUpdatedIso = "2026-03-23";
export const lastUpdatedLabel = "Updated March 23, 2026";

export const routePaths = {
  home: "/",
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
  "Turn LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.";

export const homepageTitle = "Pivota | Merchant Gateway for Agent-Native Commerce";
export const homepageMetaDescription =
  "Pivota turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.";

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
  "Pivota turns LLM and agent traffic into merchant-native transactions.",
  "It provides the execution layer across catalog, checkout, payment, and post-purchase systems.",
] as const;

export const homepageResultStatements = [
  {
    title: "Merchant discovery",
    body: "Make merchant catalogs queryable across LLM surfaces.",
  },
  {
    title: "Merchant-native checkout",
    body: "Route agent demand into merchant-controlled checkout and payment flows.",
  },
  {
    title: "Measurement and write-back",
    body: "Keep execution state measurable across catalog, checkout, payment, and post-purchase systems.",
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

export const homepageFaqItems = faqItems.slice(0, 5);

export const homepageFaqPreviewItems = [
  {
    question: "What is Pivota?",
    answer:
      "Pivota turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  },
  {
    question: "How do merchants turn LLM traffic into transactions?",
    answer:
      "By making catalogs queryable and routing demand into merchant-native checkout, payment, and write-back.",
  },
  {
    question: "How can merchants become discoverable across ChatGPT and other LLM surfaces?",
    answer:
      "By structuring catalogs, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    question: "How do AI agents connect to merchant checkout and payment?",
    answer:
      "Through merchant-native checkout flows, existing PSP relationships, and synchronized order and payment state.",
  },
  {
    question: "What infrastructure supports merchant-native LLM transactions?",
    answer:
      "An execution layer across catalog normalization, merchant-native checkout, payment routing, and order or payment write-back.",
  },
] as const;

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
