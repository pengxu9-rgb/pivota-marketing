import type { Metadata } from "next";

export const siteName = "Pivota";
export const siteUrl = "https://pivota.cc";

export const footerDescriptor = "Pivota is the merchant gateway for agent-native commerce.";

export const defaultOgTitle = "Pivota — The Merchant Gateway for Agent-Native Commerce";
export const defaultOgDescription =
  "Turn LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.";

export const homepageTitle = "Pivota | Merchant Gateway for Agent-Native Commerce";
export const homepageMetaDescription =
  "Pivota turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.";

export const primaryNavItems = [
  { label: "Product", href: "/merchant-gateway" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Merchant-native checkout", href: "/merchant-native-checkout" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const faqItems = [
  {
    question: "What is Pivota?",
    answer:
      "Pivota is the merchant gateway for agent-native commerce. It turns LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  },
  {
    question: "What does “merchant gateway” mean?",
    answer:
      "It means an execution layer between LLM or agent demand and merchant systems. Pivota makes catalogs queryable, routes demand into merchant-native checkout and payment flows, and writes execution state back into merchant systems.",
  },
  {
    question: "Is Pivota a marketplace?",
    answer:
      "No. Pivota is not a marketplace. Merchants keep their storefront, fulfillment, and customer operations.",
  },
  {
    question: "Is Pivota a checkout provider only?",
    answer:
      "No. Checkout is one part of the system. Pivota also covers catalog queryability, offer and variant structuring, order authorization, payment routing, and write-back.",
  },
  {
    question: "How does Pivota help merchants show up across LLM surfaces?",
    answer:
      "Pivota helps make merchant catalogs more queryable and executable across LLM and agent surfaces, so demand can resolve into merchant-native transactions.",
  },
  {
    question: "What does Pivota mean by “merchant-native transactions”?",
    answer:
      "Transactions that run through merchant-controlled checkout, payment, and operational systems rather than through a separate marketplace-owned flow.",
  },
  {
    question: "Does Pivota replace a merchant’s existing systems?",
    answer:
      "No. Pivota is built on top of existing merchant systems and writes orders and payment state back into them.",
  },
  {
    question: "Does Pivota handle inventory, warehousing, or last-mile logistics?",
    answer:
      "No. Pivota does not hold inventory, run warehousing, or manage last-mile logistics.",
  },
  {
    question: "Who is Pivota for?",
    answer:
      "Pivota is for merchants that want LLM and agent traffic to convert through merchant-native execution without rebuilding their stack.",
  },
  {
    question: "What is the adoption path for merchants?",
    answer:
      "The path typically moves from discovery and link-out, to feeds, to merchant-native checkout.",
  },
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
