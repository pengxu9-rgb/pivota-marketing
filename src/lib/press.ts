// Press announcements and case-study facts. Every statement here must trace to a linked
// primary source; partner wording is summarised, not extended. Newest announcement first.

export const pressLastUpdatedIso = "2026-10-08";
export const pressLastUpdatedLabel = "8 October 2026";

export const founder = { name: "Peng Xu", jobTitle: "Founder and CEO" } as const;

export type PressLink = { label: string; href: string };

export type PressAnnouncement = {
  id: string;
  dateIso: string;
  dateLabel: string;
  title: string;
  publisher: string;
  url: string;
  summary: string;
  pivotaRole: string;
  status: string;
  caseStudyPath?: string;
  sources: readonly PressLink[];
  socialPosts: readonly PressLink[];
};

const animocaReleaseUrl =
  "https://www.animocabrands.com/announcement/animoca-brands-air-and-minds-partner-with-reap-and-pivota-to-enable-identity-powered-personalized-agentic-commerce";

export const airMindsReapPilot = {
  path: "/case-studies/air-minds-reap-pilot",
  title: "AIR, Minds, Reap and Pivota: an identity-powered agentic commerce pilot",
  announcedIso: "2026-10-08",
  announcedLabel: "8 October 2026",
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
      role: "Lets users selectively share verified identity attributes and earned entitlements with their agent, so the agent can claim applicable offers or access without exposing underlying personal information.",
    },
    {
      party: "Minds by Animoca Brands",
      role: "The AI agents. They interpret the user's intent and coordinate the purchase journey, using AIR's credential verification.",
    },
    {
      party: "Reap",
      role: "Issues cards and generates payment credentials scoped to specific merchants, amounts and timeframes, applies relevant coupons and executes the checkout.",
    },
    {
      party: "Pivota",
      role: "The merchant decision and order execution layer. It helps the agent choose the product, merchant and transaction path from real-time pricing, availability and merchant capabilities, and carries the resulting order through the merchant's existing commerce stack.",
    },
    {
      party: "The merchant",
      role: "Remains the merchant of record. Its existing loyalty programs, eligibility rules and promotional offers apply inside the agent-led purchase.",
    },
  ],
  lifecycle: [
    "The agent presents cryptographic proof of the user's eligibility (AIR).",
    "Pivota determines the product, merchant and transaction path.",
    "An applicable offer is applied.",
    "Reap issues a payment credential scoped to the merchant, amount and timeframe.",
    "Authorization for the transaction is completed.",
  ],
} as const;

export const pressAnnouncements: readonly PressAnnouncement[] = [
  {
    id: "air-minds-reap-pivota-2026-10-08",
    dateIso: "2026-10-08",
    dateLabel: "8 October 2026",
    title:
      "Animoca Brands' AIR and Minds partner with Reap and Pivota to enable identity-powered personalized agentic commerce",
    publisher: "Animoca Brands",
    url: animocaReleaseUrl,
    summary:
      "AIR and Minds by Animoca Brands announced a partnership with Reap and Pivota to develop identity-powered, personalized agentic commerce: a Minds agent acting on a verified user's authority, recognizing benefits the user has earned, and completing purchases within pre-approved limits. The partnership starts with a controlled demonstration featuring a single merchant integration.",
    pivotaRole:
      "Pivota provides the merchant decision and order execution layer: it helps the agent choose the product, merchant and transaction path, and carries the order through the merchant's existing commerce stack. The merchant remains the merchant of record and Pivota does not touch the funds flow.",
    status:
      "Announced. The single-merchant demonstration is planned; no transaction results have been published.",
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
