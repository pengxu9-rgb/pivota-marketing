import type { Metadata } from "next";

export const siteName = "Pivota";
export const siteUrl = "https://pivota.cc";
export const categoryAnchor = "merchant gateway for agent-native commerce";
export const merchantSignupPath = "https://merchant.pivota.cc/signup?source=marketing";
export const developerSignupPath = "https://developer.pivota.cc/signup";
export const developerLoginPath = "https://developer.pivota.cc/login";
export const aiReadinessSignupPath = "/merchant/signup/ai-readiness";
export const auroraUrl = "https://aurora.pivota.cc";
export const lastUpdatedIso = "2026-04-09";
export const lastUpdatedLabel = "Updated April 9, 2026";

export const routePaths = {
  home: "/",
  aiReadiness: "/ai-readiness",
  promotionReadiness: "/promotion-readiness",
  merchantOnboarding: "/merchant-onboarding",
  agentIntegration: "/agent-integration",
  skincareBeautyMerchants: "/skincare-beauty-merchants",
  doINeedToRebuildMyStore: "/do-i-need-to-rebuild-my-store",
  makeProductsDiscoverable: "/make-products-discoverable-to-ai-shopping-agents",
  startBeforeMerchantNativeCheckout: "/start-before-merchant-native-checkout",
  pivotaImplementationEffort: "/pivota-implementation-effort",
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

export const defaultOgTitle = "Pivota — Merchant-Controlled Commerce Layer for AI Commerce";
export const defaultOgDescription =
  "Pivota works with Shopify, Wix, WooCommerce, BigCommerce, and other store platforms to add merchant control, execution continuity, and fallback across AI buying surfaces.";

export const homepageTitle = "Pivota | Merchant Gateway and Commerce Layer for Agent-Native Commerce";
export const homepageMetaDescription =
  "Pivota is a merchant gateway and commerce layer that works on top of Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. Merchants can start with discovery, feeds, or link-out, then expand toward merchant-native checkout when ready.";
export const aiReadinessTitle = "Can Your Store Win Customers from AI? | Pivota";
export const aiReadinessMetaDescription =
  "Connect your store to Pivota and see what is blocking the path from AI agent demand to completed transactions across product resolution, offers, checkout, and payments.";

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
  "It works with store platforms such as Shopify, Wix, WooCommerce, and BigCommerce to add merchant control, continuity, and fallback across AI buying surfaces.",
] as const;

export const homepageHeroAnswerBlock = [
  "Use Pivota on top of your existing Shopify, Wix, WooCommerce, BigCommerce, or similar stack. No replatforming is required.",
  "Improve how agents discover, route, and complete transactions with your business, starting with discovery, feeds, or link-out before deeper merchant-native checkout when ready.",
] as const;

export const homepageResultStatements = [
  {
    title: "Likely blockers",
    body: "See where catalog, offer, checkout, or payment logic may be getting in the way.",
  },
  {
    title: "What to fix first",
    body: "Give operators clear next steps instead of a vague score.",
  },
  {
    title: "Continuity gaps",
    body: "Spot where recommendation, checkout, or payment flows are most likely to drift.",
  },
  {
    title: "Safest next step",
    body: "Decide whether link-out, feeds, or merchant-native checkout is the right next move.",
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
      "Pivota is the merchant gateway and merchant-controlled commerce layer for AI buying surfaces. It works on top of existing store stacks and helps merchants turn agent demand into merchant-native execution across catalog resolution, offers, checkout, payments, and write-back.",
  },
  {
    question: "Does Pivota replace Shopify, Wix, WooCommerce, or BigCommerce?",
    answer:
      "No. Pivota works with store platforms such as Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. Merchants keep the storefront platform and operations they already run. Pivota adds a merchant-controlled layer on top of the current stack.",
  },
  {
    question: "Why connect Pivota if my store platform already supports AI commerce?",
    answer:
      "Store-platform access can help merchants reach some AI buying surfaces, whether the storefront runs on Shopify, Wix, WooCommerce, BigCommerce, or another stack. Pivota adds merchant control across product resolution, offer logic, checkout continuity, payments, write-back, measurement, and fallback when native paths are not enough. Platform-native access can be a good starting point. Pivota matters when merchants need more control, continuity, and fallback across more agent surfaces.",
  },
  {
    question: "Do I need to rebuild my store?",
    answer:
      "No. Pivota layers on top of the storefront, PSP, fulfillment systems, and customer operations merchants already run. No replatforming is required.",
  },
  {
    question: "Does Pivota replace my storefront?",
    answer:
      "No. Pivota is not a storefront replacement. It adds a merchant commerce layer on top of the storefront, checkout, payment, and operations systems already in place.",
  },
  {
    question: "Does every merchant get in-agent checkout right away?",
    answer:
      "No. Merchant-native checkout is not the universal starting point. Some merchants begin with lighter paths first and deepen later.",
  },
  {
    question: "What are the lighter starting paths before deeper checkout?",
    answer:
      "Many merchants start with discovery, feeds, or link-out, then expand toward merchant-native checkout when their catalog, checkout, and payment paths are ready.",
  },
  {
    question: "How much implementation work is required?",
    answer:
      "It depends on the rollout stage. Discovery, feeds, and link-out are the lighter starting paths. Deeper checkout, payment, order, and webhook flows usually require more merchant-specific work.",
  },
  {
    question: "What does merchant-native checkout mean here?",
    answer:
      "It means checkout stays in merchant-controlled systems rather than moving into a marketplace-owned flow. It does not mean every merchant starts there on day one, or that every agent surface runs a fully in-chat checkout. Some flows still use link-out or another merchant-controlled handoff.",
  },
  {
    question: "What stays in my current stack if I use Pivota?",
    answer:
      "Merchants keep their storefront, PSP relationships, fulfillment systems, and customer operations. Pivota works on top of that stack.",
  },
  {
    question: "When is a store platform alone enough, and when should I add Pivota?",
    answer:
      "A store platform can be enough when its native path already fits the business. Merchants add Pivota when they need stronger control, continuity, staged rollout, and fallback across more agent surfaces.",
  },
  {
    question: "What happens after a merchant connects to Pivota?",
    answer:
      "After connection, Pivota shows merchants what is blocking conversion from agent-driven traffic, what to fix first, where continuity breaks, and the safest next path across link-out, feeds, or merchant-native checkout.",
  },
  {
    question: "What do merchants get after onboarding?",
    answer:
      "Merchants get a merchant-facing operating view of the agent-to-order path: blockers across product resolution, offers, checkout, payments, and write-back, plus the changes most likely to improve conversion and execution continuity.",
  },
  {
    question: "How does Pivota help improve the path from AI agent demand to completed transactions?",
    answer:
      "Pivota helps merchants fix upstream gaps once so downstream agents get a cleaner path to recommend, route, and complete transactions. That includes better product and offer resolution, safer checkout continuity, payment-aware execution, and clearer write-back and measurement.",
  },
  {
    question: "Can I start before merchant-native checkout?",
    answer:
      "Yes. Many merchants start with discovery, feeds, or link-out first. Some merchants are ready to start with merchant-native checkout on day one when their checkout, payment, and execution paths are already in good shape. Pivota works with existing PSP relationships and supports payment routing and authorization without requiring a storefront rebuild.",
  },
  {
    question: "What is the difference between a visible offer and an executable offer?",
    answer:
      "A visible offer is something a shopper can see on site. An executable offer is one an agent can reliably match, validate, preserve, and route through a real merchant-native checkout path.",
  },
  {
    question: "Is Promotion Readiness a coupon finder?",
    answer:
      "No. Promotion Readiness is the offer and incentive layer of the agent-to-order path. It helps merchants fix what prevents agents from carrying the right offer, eligibility logic, and checkout behavior into real transactions.",
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
      "After the first successful call, the next steps are to validate response shape, create the first order or checkout flow, configure webhooks, and confirm that execution updates flow back cleanly.",
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
    question: "Does Pivota replace Shopify, Wix, WooCommerce, or BigCommerce?",
    answer:
      "No. Pivota works with store platforms such as Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. Merchants keep the storefront platform and operations they already run. Pivota adds a merchant-controlled layer on top of the current stack.",
  },
  {
    question: "Do I need to rebuild my store?",
    answer:
      "No. Pivota layers on top of the storefront, PSP, fulfillment systems, and customer operations merchants already run. No replatforming is required.",
  },
  {
    question: "Does Pivota replace my storefront?",
    answer:
      "No. Pivota is not a storefront replacement. It adds a merchant commerce layer on top of the storefront, checkout, payment, and operations systems already in place.",
  },
  {
    question: "What does merchant-native checkout mean here?",
    answer:
      "It means checkout stays in merchant-controlled systems rather than moving into a marketplace-owned flow. It does not mean every merchant starts there on day one, or that every agent surface runs a fully in-chat checkout. Some flows still use link-out or another merchant-controlled handoff.",
  },
  {
    question: "Can I start before merchant-native checkout?",
    answer:
      "Yes. Many merchants start with discovery, feeds, or link-out first. Some merchants are ready to start with merchant-native checkout on day one when their checkout, payment, and execution paths are already in good shape. Pivota works with existing PSP relationships and supports payment routing and authorization without requiring a storefront rebuild.",
  },
  {
    question: "How much implementation work is required?",
    answer:
      "It depends on the rollout stage. Discovery, feeds, and link-out are the lighter starting paths. Deeper checkout, payment, order, and webhook flows usually require more merchant-specific work.",
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
