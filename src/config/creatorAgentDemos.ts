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
];

