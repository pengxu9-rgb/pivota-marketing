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
  status?: string;
  caseStudyPath?: string;
  sources: readonly PressLink[];
  socialPosts?: readonly PressLink[];
};

type PressArticle = PressAnnouncement & {
  slug: string;
  category: string;
  breadcrumbLabel: string;
  modifiedIso?: string;
  introduction: readonly string[];
  sections: readonly {
    heading: string;
    paragraphs: readonly string[];
    roles?: readonly { party: string; role: string }[];
  }[];
  closingStatement?: string;
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
    title: "Visa Names Pivota Among Asia-Pacific Collaborators Exploring Agentic Commerce",
    publisher: "Visa",
    url: visaReleaseUrl,
    summary:
      "Visa has named Pivota among its Asia-Pacific ecosystem collaborators exploring how AI agents can discover merchant products, build shopping carts, and connect to checkout and payments.",
    pivotaRole:
      "Pivota is building the commerce decision and order execution layer that helps AI agents evaluate products, select merchants, and execute orders through existing commerce and payment systems.",
    status: "Visa named Pivota among its Asia-Pacific ecosystem collaborators exploring agent-led commerce.",
    sources: [{ label: "Visa’s official press release", href: visaReleaseUrl }],
    introduction: [
      "On November 18, 2026, Visa highlighted Pivota in its official Asia-Pacific announcement on expanding trusted agentic commerce.",
      "Alongside companies including SHOPLINE, Shoplazza, Reap Technologies, and Clink, Pivota was named among ecosystem enablers collaborating with Visa to explore agent-led commerce experiences spanning product discovery, shopping carts, checkout, and payment.",
    ],
    sections: [
      {
        heading: "From Product Discovery to Commerce Execution",
        paragraphs: [
          "As AI agents move beyond product recommendations toward completing purchases, the next challenge is connecting AI-powered discovery with real-world merchant infrastructure.",
          "Pivota is building the commerce decision and order execution layer for AI agents, helping applications evaluate products, select merchants, determine transaction paths, and execute orders through existing commerce and payment systems.",
        ],
      },
      {
        heading: "Building an Interoperable Agentic Commerce Ecosystem",
        paragraphs: [
          "Pivota’s approach is designed to connect AI applications, merchant platforms, and payment infrastructure without requiring merchants to replace their existing commerce systems.",
          "Our focus is on making commerce execution more accessible to AI agents while preserving merchant control over checkout, payments, and fulfillment.",
          "Visa’s announcement marks an important milestone in the industry’s progress toward an interoperable agentic commerce ecosystem.",
        ],
      },
    ],
    closingStatement:
      "The future of AI commerce isn’t just about deciding what to buy. It’s about getting the transaction done.",
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
    title: "Reap, Meitu's EveLab Insight, and Pivota Sign MOU to Explore Agentic Beauty Commerce",
    publisher: "Reap",
    url: reapReleaseUrl,
    summary:
      "Reap, Meitu’s EveLab Insight, and Pivota have signed an MOU to explore AI-powered beauty shopping, connecting personalized product discovery with merchant selection, checkout, and secure payments.",
    pivotaRole:
      "In the proposed experience, Pivota would evaluate product and merchant options, availability, and transaction paths, and coordinate commerce execution.",
    sources: [{ label: "Reap’s official press release", href: reapReleaseUrl }],
    introduction: [
      "Reap, Meitu’s EveLab Insight, and Pivota announced a memorandum of understanding to explore bringing agentic commerce to personalized beauty shopping.",
      "The collaboration aims to connect AI-powered beauty recommendations with real-world commerce execution, helping consumers move from discovering relevant products to completing purchases with their approval.",
    ],
    sections: [
      {
        heading: "Connecting AI Beauty Discovery with Commerce Execution",
        paragraphs: [
          "Under the proposed collaboration, shoppers could receive personalized beauty insights and product recommendations through MakeupPlus, developed and published by EveLab Insight.",
          "Pivota would help evaluate relevant products, merchant options, availability, and purchase channels.",
          "Reap’s agentic payments infrastructure would support the checkout and payment process through applicable integrations and consumer-approved payment flows.",
        ],
      },
      {
        heading: "Each Partner’s Role",
        roles: [
          { party: "EveLab Insight / MakeupPlus", role: "AI-powered beauty experiences and personalized product discovery." },
          { party: "Pivota", role: "Product and merchant decisioning, transaction-path selection, and commerce execution orchestration." },
          { party: "Reap", role: "Agentic payment infrastructure and supported checkout capabilities." },
        ],
        paragraphs: [
          "The proposed experience is designed to keep consumers in control of purchase approvals and payment authorization.",
        ],
      },
      {
        heading: "Exploring the Future of AI-Powered Beauty Commerce",
        paragraphs: [
          "Beauty commerce is a natural starting point for agentic shopping because personalized recommendations can benefit from information about consumers’ preferences and needs.",
          "The collaboration explores how AI-powered discovery can connect with merchant infrastructure and secure payments to enable a more seamless purchase journey.",
        ],
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
      "AIR and Minds by Animoca Brands announced a partnership with Reap and Pivota to develop identity-powered, personalized agentic commerce: a Minds agent acting on a verified user's authority, recognizing benefits the user has earned, and completing purchases within pre-approved limits. The partnership will start with a controlled demonstration featuring a single merchant integration.",
    pivotaRole:
      "In the proposed architecture, Pivota will provide the merchant decision and order execution layer: helping the agent choose the product, merchant and transaction path, and carrying the order through the merchant's existing commerce stack. The merchant remains the merchant of record and Pivota does not touch the funds flow.",
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
