import { routePaths } from "@/lib/marketing";

// Press announcements and case-study facts. Every statement here must trace to a linked
// primary source; partner wording is summarised, not extended. Newest announcement first.

export const pressIndexModifiedIso = "2026-11-19";
export const pressIndexUpdatedLabel = "19 November 2026";

export const pressLastUpdatedLabel = "8 October 2026";

export const founder = { name: "Peng Xu", jobTitle: "Founder and CEO" } as const;

export type PressLink = { label: string; href: string };

export type PressAnnouncement = {
  id: string;
  slug?: string;
  category?: string;
  dateIso: string;
  dateLabel: string;
  title: string;
  publisher: string;
  url: string;
  summary: string;
  pivotaRole: string;
  caseStudyPath?: string;
  sources: readonly PressLink[];
  socialPosts?: readonly PressLink[];
};

type PressArticle = PressAnnouncement & {
  slug: string;
  category: string;
  breadcrumbLabel: string;
  modifiedIso?: string;
  sections: readonly {
    heading: string;
    paragraphs: readonly string[];
    roles?: readonly { party: string; role: string }[];
  }[];
  relatedLinks: readonly PressLink[];
};

export function pressArticlePath(slug: string) {
  return `${routePaths.press}/${slug}`;
}

const animocaReleaseUrl =
  "https://www.animocabrands.com/announcement/animoca-brands-air-and-minds-partner-with-reap-and-pivota-to-enable-identity-powered-personalized-agentic-commerce";

export const airMindsReapPilot = {
  path: "/case-studies/air-minds-reap-pilot",
  title: "AIR, Minds, Reap and Pivota: an identity-powered agentic commerce pilot",
  announcedIso: "2026-10-08",
  announcedLabel: "8 October 2026",
  modifiedIso: "2026-11-19",
  releaseUrl: animocaReleaseUrl,
  airBlogUrl: "https://air3.com/blog/air-minds-reap-pivota-agentic-commerce",
  peng: {
    quote:
      "Product discovery is only the first step in agentic commerce. The harder problem is determining where and how a transaction should actually be executed. Pivota provides the merchant decision and order execution layer that connects agent intent with merchants, helping agents choose the right merchant and transaction path and carry the resulting order through checkout.",
    source: "Animoca Brands press release, 8 October 2026",
  },
  roles: [
    {
      party: "AIR (built by Moca Network, the identity network of Animoca Brands)",
      role: "Will let users selectively share verified identity attributes and earned entitlements with their agent, so the agent can claim applicable offers or access without exposing underlying personal information.",
    },
    {
      party: "Minds by Animoca Brands",
      role: "A persistent agentic AI platform. Its agents will interpret the user's intent and coordinate the purchase journey, using AIR's credential verification.",
    },
    {
      party: "Reap",
      role: "Will facilitate card issuance, generate payment credentials scoped to specific merchants, amounts and timeframes, apply relevant coupons and execute the checkout.",
    },
    {
      party: "Pivota",
      role: "Will provide the merchant decision and order execution layer: helping the agent choose the product, merchant and transaction path from real-time pricing, availability and merchant capabilities, and carrying the resulting order through the merchant's existing commerce stack.",
    },
    {
      party: "The merchant",
      role: "Remains the merchant of record. Its existing loyalty programs, eligibility rules and promotional offers are intended to apply inside agent-led purchases.",
    },
  ],
  lifecycle: [
    "The agent presents cryptographic proof of the user's eligibility.",
    "Pivota determines the product, merchant and transaction path.",
    "An applicable offer is applied.",
    "Reap issues a payment credential scoped to the merchant, amount and timeframe.",
    "Authorization for the transaction is completed.",
  ],
} as const;

const visaReleaseUrl =
  "https://www.visa.com.sg/about-visa/newsroom/press-releases/visa-expands-agentic-ready-to-help-scale-trusted-ai-commerce-in-asia-pacific.html";
const reapReleaseUrl =
  "https://reap.global/newsroom/reap-meitu-evelab-pivota-agentic-commerce-beauty";

export const pressArticles: readonly PressArticle[] = [
  {
    id: "visa-pivota-agentic-commerce-asia-pacific",
    slug: "visa-pivota-agentic-commerce-asia-pacific",
    category: "Company News / Ecosystem Collaboration",
    breadcrumbLabel: "Visa collaboration",
    dateIso: "2026-11-18",
    dateLabel: "18 November 2026",
    modifiedIso: "2026-11-19",
    title: "Visa Names Pivota Among Asia-Pacific Collaborators Exploring Agentic Commerce",
    publisher: "Visa",
    url: visaReleaseUrl,
    summary:
      "Visa named Pivota among its Asia-Pacific ecosystem collaborators exploring agent-led commerce. The work covers product discovery, shopping carts, checkout, and payments.",
    pivotaRole:
      "Pivota is building the commerce decision and order execution layer that helps AI agents evaluate products, select merchants, and execute orders through existing commerce and payment systems.",
    sources: [{ label: "Visa’s official press release", href: visaReleaseUrl }],
    sections: [
      {
        heading: "Asia-Pacific collaboration",
        paragraphs: [
          "Visa’s announcement also names SHOPLINE, Shoplazza, Reap Technologies, and Clink among its regional collaborators.",
        ],
      },
      {
        heading: "Pivota’s role",
        paragraphs: [
          "Pivota is building the commerce decision and order execution layer for AI agents. It helps applications evaluate products, select merchants, choose how to route the transaction, and place orders through existing merchant systems.",
        ],
      },
    ],
    relatedLinks: [
      { label: "How Pivota works", href: routePaths.howPivotaWorks },
      { label: "Agent integration", href: routePaths.agentIntegration },
      { label: "Merchant-native checkout", href: routePaths.merchantNativeCheckout },
    ],
  },
  {
    id: "reap-meitu-evelab-pivota-agentic-beauty-commerce",
    slug: "reap-meitu-evelab-pivota-agentic-beauty-commerce",
    category: "Partnership Announcement",
    breadcrumbLabel: "Beauty commerce MOU",
    dateIso: "2026-11-05",
    dateLabel: "5 November 2026",
    modifiedIso: "2026-11-19",
    title: "Reap, Meitu's EveLab Insight, and Pivota Sign MOU on Agentic Beauty Commerce",
    publisher: "Reap",
    url: reapReleaseUrl,
    summary:
      "Reap, Meitu’s EveLab Insight, and Pivota signed a memorandum of understanding on AI-powered beauty shopping, covering personalized recommendations, merchant selection, checkout, and payments.",
    pivotaRole:
      "Pivota’s role under the MOU covers product and merchant selection, availability, and how orders are routed.",
    sources: [{ label: "Reap’s official press release", href: reapReleaseUrl }],
    sections: [
      {
        heading: "What the MOU covers",
        paragraphs: [
          "Reap’s announcement describes a shopping flow that starts with personalized beauty recommendations in MakeupPlus and proceeds to checkout and payment with the shopper’s approval.",
        ],
      },
      {
        heading: "Each partner’s role",
        roles: [
          { party: "EveLab Insight", role: "Personalized beauty insights and product recommendations through its MakeupPlus app." },
          { party: "Pivota", role: "Evaluate products, merchant options, availability, and purchase channels." },
          { party: "Reap", role: "Support checkout and payments through its agentic payments infrastructure." },
        ],
        paragraphs: [],
      },
    ],
    relatedLinks: [
      { label: "Pivota for skincare and beauty merchants", href: routePaths.skincareBeautyMerchants },
      { label: "How Pivota works", href: routePaths.howPivotaWorks },
      { label: "Agent integration", href: routePaths.agentIntegration },
    ],
  },
];

export const pressAnnouncements: readonly PressAnnouncement[] = [
  ...pressArticles,
  {
    id: "air-minds-reap-pivota-2026-10-08",
    dateIso: "2026-10-08",
    dateLabel: "8 October 2026",
    title:
      "Animoca Brands' AIR and Minds partner with Reap and Pivota to enable identity-powered personalized agentic commerce",
    publisher: "Animoca Brands",
    url: animocaReleaseUrl,
    summary:
      "AIR and Minds by Animoca Brands announced a partnership with Reap and Pivota to develop identity-powered agentic commerce. The partnership covers verifying the shopper’s identity, applying eligible benefits, and completing purchases within limits the shopper approves.",
    pivotaRole:
      "Pivota will help the agent choose the product, merchant, and transaction path, then carry the order through the merchant’s existing commerce system.",
    caseStudyPath: airMindsReapPilot.path,
    sources: [
      { label: "Animoca Brands press release", href: animocaReleaseUrl },
      {
        label: "Press release (简体中文)",
        href: "https://www.animocabrands.com/zh-cn/announcement/animoca-brands-air-and-minds-partner-with-reap-and-pivota-to-enable-identity-powered-personalized-agentic-commerce",
      },
      {
        label: "Press release (繁體中文)",
        href: "https://www.animocabrands.com/zh-hk/announcement/animoca-brands-air-and-minds-partner-with-reap-and-pivota-to-enable-identity-powered-personalized-agentic-commerce",
      },
      { label: "AIR blog (Moca Network)", href: airMindsReapPilot.airBlogUrl },
    ],
    socialPosts: [
      { label: "AIR & Moca Network on X", href: "https://x.com/Moca_Network/status/2108007064639557971" },
      { label: "Animoca Brands on X", href: "https://x.com/animocabrands/status/2108004786310349143" },
      { label: "Minds on X", href: "https://x.com/hellominds_/status/2108004387662483867" },
      {
        label: "AIR & Moca Network on LinkedIn",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7513777122289647617/",
      },
      {
        label: "Animoca Brands on LinkedIn",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7513766399232774144/",
      },
      { label: "Minds on LinkedIn", href: "https://www.linkedin.com/feed/update/urn:li:activity:7513768520443273216/" },
    ],
  },
];
