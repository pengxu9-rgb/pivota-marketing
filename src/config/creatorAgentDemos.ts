export type CreatorAgentDemo = {
  name: string;
  slug: string;
  description: string;
  url: string;
  tags: string[];
  status?: "live" | "coming_soon";
  ctaLabel?: string;
};

const BASE =
  process.env.NEXT_PUBLIC_CREATOR_AGENT_BASE_URL ??
  process.env.CREATOR_AGENT_BASE_URL ??
  "https://creator.pivota.cc";

export const creatorAgentDemos: CreatorAgentDemo[] = [
  {
    name: "Nina Studio",
    slug: "nina-studio",
    description:
      "Creator-led shopping experience with chat, browsing, and personalized deals.",
    url: `${BASE}/creator/nina-studio`,
    tags: ["creator", "fashion", "deals"],
    status: "live",
    ctaLabel: "Open demo",
  },
  {
    name: "Beauty Look Replicator (Beta)",
    slug: "look-replicator",
    description: "Upload a look → get a routine → compare offers",
    url: "https://look-replicator.pivota.cc/?utm_source=pivota_cc&utm_medium=web&utm_campaign=agents&utm_content=live_demos_card",
    tags: ["beauty", "routine", "offers"],
    status: "live",
    ctaLabel: "Open demo",
  },
];
