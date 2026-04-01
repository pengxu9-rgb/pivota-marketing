import type { Metadata } from "next";

export const siteName = "Pivota";
export const siteUrl = "https://pivota.cc";
export const categoryAnchor = "merchant gateway for agent-native commerce";
export const merchantSignupPath = "https://merchant.pivota.cc/signup?source=marketing";
export const developerSignupPath = "https://developer.pivota.cc/signup";
export const developerLoginPath = "https://developer.pivota.cc/login";
export const aiReadinessSignupPath = "/merchant/signup/ai-readiness";
export const auroraUrl = "https://aurora.pivota.cc";
export const lastUpdatedIso = "2026-03-23";
export const lastUpdatedLabel = "Updated March 23, 2026";

export const routePaths = {
  home: "/",
  aiReadiness: "/ai-readiness",
  promotionReadiness: "/promotion-readiness",
  merchantOnboarding: "/merchant-onboarding",
  agentIntegration: "/agent-integration",
  pivotaVsShopify: "/pivota-vs-shopify",
  whatIsAgenticCommerce: "/what-is-agentic-commerce",
  whatIsAgentNativeCommerce: "/what-is-agent-native-commerce",
  merchantGateway: "/merchant-gateway-for-agent-native-commerce",
  howPivotaWorks: "/how-pivota-works",
  merchantNativeCheckout: "/merchant-native-checkout",
  developers: "/developers",
  developersFirstCall: "/developers/first-call",
  developersRequestTypes: "/developers/request-types",
  developersAuthWebhooks: "/developers/auth-webhooks",
  developersProtocols: "/developers/protocols",
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

export const homepageTitle = "Pivota | Merchant Gateway and Commerce Layer for Agent-Native Commerce";
export const homepageMetaDescription =
  "Pivota is the merchant gateway and commerce layer that agents call for recommendations, merchant-native checkout, payments, and order write-back across merchant systems.";
export const aiReadinessTitle = "Can Your Store Win Customers from AI? | Pivota";
export const aiReadinessMetaDescription =
  "Connect your store to Pivota and quickly spot likely issues across catalog, checkout, and payments, then get clear next steps on what to fix first.";

export const primaryNavItems = [
  {
    label: "Product",
    href: routePaths.merchantGateway,
    aliases: [
      routePaths.howPivotaWorks,
      routePaths.pivotaVsShopify,
      routePaths.whatIsAgentNativeCommerce,
      routePaths.whatIsAgenticCommerce,
    ],
  },
  {
    label: "Readiness",
    href: routePaths.aiReadiness,
    aliases: [routePaths.promotionReadiness, routePaths.merchantOnboarding],
  },
  {
    label: "Agent Integration",
    href: routePaths.agentIntegration,
    aliases: [
      routePaths.developers,
      routePaths.developersFirstCall,
      routePaths.developersRequestTypes,
      routePaths.developersAuthWebhooks,
      routePaths.developersProtocols,
      routePaths.apiOverview,
    ],
  },
  { label: "Merchant-native checkout", href: routePaths.merchantNativeCheckout },
  { label: "FAQ", href: routePaths.faq },
  { label: "About", href: routePaths.about },
] as const;

export const footerExploreItems = [
  ...primaryNavItems,
  { label: "Merchant Onboarding", href: routePaths.merchantOnboarding },
  { label: "Promotion Readiness", href: routePaths.promotionReadiness },
  { label: "How it works", href: routePaths.howPivotaWorks },
  { label: "Use Cases", href: routePaths.useCases },
  { label: "Blog", href: routePaths.blog },
] as const;

export const coreAnswerBlock = [
  "Pivota is the merchant gateway for agent-native commerce.",
  "It turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
] as const;

export const homepageHeroAnswerBlock = [
  "Connect your store, get issue overview, prioritized fixes, and a rollout path that improves the merchant-native path downstream agents call.",
  "Pivota is the commerce layer — and shopping sub-agent — that agents call for recommendations, merchant-native checkout, payments, and order write-back.",
] as const;

export const homepageResultStatements = [
  {
    title: "Issue overview",
    body: "See likely catalog, offer, checkout, and payment blockers after connection.",
  },
  {
    title: "Recommended actions",
    body: "Give operators concrete next steps instead of a vague readiness score.",
  },
  {
    title: "Prioritized fixes",
    body: "Focus on the changes most likely to improve downstream agent execution.",
  },
  {
    title: "Rollout path",
    body: "Decide whether link-out, feeds, or merchant-native checkout is the right next stage.",
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
    question: "Do I need to rebuild my store?",
    answer:
      "No. Pivota is built around no replatforming. Merchants keep their storefront, PSP, fulfillment systems, and customer operations while Pivota improves readiness and execution around the existing stack.",
  },
  {
    question: "What happens after a merchant connects to Pivota?",
    answer:
      "After connection, Pivota continues the merchant into onboarding and dashboard setup, analyzes readiness across catalog, offers, checkout, and payments, and returns issue overview, recommended actions, prioritized fixes, and a rollout path.",
  },
  {
    question: "What do merchants get after onboarding?",
    answer:
      "Merchants get issue overview, recommended actions, prioritized fixes, and a rollout path across catalog, offers, checkout, payments, and downstream execution readiness.",
  },
  {
    question: "How does readiness improve downstream agent calls?",
    answer:
      "Readiness work happens upstream during merchant onboarding. Once merchant data, offers, checkout behavior, and payment logic are cleaner, downstream agents get a more reliable merchant-native path with fewer ambiguities and better execution continuity.",
  },
  {
    question: "Is Promotion Readiness a coupon finder?",
    answer:
      "No. Promotion Readiness is part of merchant onboarding and commerce readiness. It helps merchants improve how offers, eligibility, payment incentives, and checkout logic execute later through agent-driven commerce flows.",
  },
  {
    question: "What is the difference between a visible offer and an executable offer?",
    answer:
      "A visible offer is something a shopper can see on site. An executable offer is one an agent can reliably match, validate, preserve, and route through a real merchant-native checkout path.",
  },
  {
    question: "Can I start before merchant-native checkout?",
    answer:
      "Yes. Many merchants start with link-out or feeds first. Merchant-native checkout is a later rollout stage when checkout, payment, and execution readiness are strong enough.",
  },
  {
    question: "What can agents call through Pivota today?",
    answer:
      "Agents and builders can start with the public REST path, then use SDK or MCP where useful. Public request families include search and recommendation, cart and checkout intents, orders, order status, order events, webhooks, and payment-aware execution flows.",
  },
  {
    question: "What is the default integration path?",
    answer:
      "REST with API keys and webhooks is the default production path. The SDK wraps the same REST contract. MCP sits on top as a local orchestration and discovery surface.",
  },
  {
    question: "What happens after the first successful call?",
    answer:
      "After the first successful call, the next steps are to validate response shape, create the first order or checkout flow, configure webhooks, and confirm downstream execution and event handling.",
  },
  {
    question: "How do webhooks fit into execution?",
    answer:
      "Webhooks carry execution and lifecycle signals after the initial call. They help builders observe order creation, payment attempts, payment outcomes, completion, refunds, cancellations, and delivery health.",
  },
  {
    question: "What is a merchant gateway for agent-native commerce?",
    answer:
      "A merchant gateway for agent-native commerce is the execution layer between LLM or agent demand and merchant systems. Pivota makes catalogs queryable, routes demand into merchant-native checkout and payment flows, and writes execution state back into merchant systems.",
  },
  {
    question: "How do merchants turn LLM traffic into transactions?",
    answer:
      "Pivota helps merchants turn LLM and agent traffic into merchant-native transactions by connecting catalog, checkout, payment, and post-purchase systems into one merchant-controlled execution path.",
  },
  {
    question: "How can merchants become discoverable across ChatGPT and other LLM surfaces?",
    answer:
      "Pivota helps merchants become more queryable across LLM surfaces by structuring catalogs, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    question: "How do AI agents connect to merchant checkout and payment?",
    answer:
      "Pivota connects agent demand to merchant-native checkout and payment flows. Merchants keep existing payment relationships while Pivota supports authorization, payment-state sync, and write-back.",
  },
  {
    question: "What is agentic commerce?",
    answer:
      "Agentic commerce is the broader market term for commerce shaped by LLMs and agents. Pivota is focused on the merchant-controlled execution layer that makes that demand useful for merchants.",
  },
  {
    question: "How is agentic commerce different from agent-native commerce?",
    answer:
      "Agentic commerce is the broader market term. Agent-native commerce is the more specific merchant-controlled path that connects demand to catalog, checkout, payment, and post-purchase systems.",
  },
  {
    question: "Is Pivota a marketplace or a checkout-only tool?",
    answer:
      "No. Pivota is not a marketplace, and it is not a checkout-only tool. It spans queryability, execution, merchant-native checkout, payment-state sync, and write-back.",
  },
] as const;

export const homepageFaqItems = [
  {
    question: "Do I need to rebuild my store?",
    answer:
      "No. Pivota layers on top of the storefront, PSP, fulfillment systems, and customer operations merchants already run.",
  },
  {
    question: "What do merchants get after onboarding?",
    answer:
      "Merchants get issue overview, recommended actions, prioritized fixes, and a rollout path across catalog, offers, checkout, and payments.",
  },
  {
    question: "What can agents call through Pivota today?",
    answer:
      "The default path is REST with API keys and webhooks, with request families across search, recommendation, checkout intents, orders, order events, and payment-aware execution.",
  },
  {
    question: "Can I start before merchant-native checkout?",
    answer:
      "Yes. Many merchants begin with link-out or feeds first, then move into merchant-native checkout when deeper readiness work is complete.",
  },
  {
    question: "What is the default integration path?",
    answer:
      "REST is the default production path. SDK and MCP sit on top of the same core contract for convenience and orchestration.",
  },
  {
    question: "How does readiness improve downstream agent calls?",
    answer:
      "Readiness work happens upstream once. Then downstream agents get cleaner product resolution, better offer matching, and a more reliable merchant-native execution path.",
  },
] as const;

export const homepageFaqPreviewItems = homepageFaqItems;

export const useCases = [
  {
    slug: "ingredient-and-variant-clarity",
    title: "Ingredient and variant clarity",
    prompt: "Discoverability and variant readiness",
    summary:
      "A specialty skin care brand cleaned up ingredient and variant structure so downstream agents could recommend products more reliably.",
  },
  {
    slug: "seasonal-promo-complexity",
    title: "Seasonal promo complexity",
    prompt: "Offer and promotion readiness",
    summary:
      "A fashion merchant tightened fragmented promo logic so downstream agents could stop guessing which offer really applied.",
  },
  {
    slug: "eligibility-sensitive-pricing",
    title: "Eligibility-sensitive pricing",
    prompt: "Offer and promotion readiness",
    summary:
      "A merchant with membership pricing clarified what was executable versus conditional before scaling AI traffic.",
  },
  {
    slug: "wallet-and-financing-readiness",
    title: "Wallet and financing readiness",
    prompt: "Checkout and payment execution",
    summary:
      "An electronics retailer cleaned up wallet and financing logic before moving toward merchant-native checkout.",
  },
  {
    slug: "shipping-and-cart-rule-alignment",
    title: "Shipping and cart-rule alignment",
    prompt: "Checkout and payment execution",
    summary:
      "A home goods merchant improved cart and shipping readiness so recommended paths stayed closer to final checkout reality.",
  },
  {
    slug: "reliability-and-write-back-visibility",
    title: "Reliability and write-back visibility",
    prompt: "Measurement and write-back",
    summary:
      "A footwear merchant improved execution visibility before scaling agent-driven demand.",
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
