import CreatorAgentsPage from "@/app/creator-agents/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Agents that convert | Pivota",
  description:
    "Creator-first shopping surfaces combining category browsing, chat, and dynamic deals—powered by top LLMs.",
  alternates: {
    canonical: "/zh/creator-agents",
    languages: {
      en: "/creator-agents",
      "zh-Hans": "/zh/creator-agents",
      "x-default": "/creator-agents",
    },
  },
  openGraph: {
    title: "Creator Agents that convert | Pivota",
    description:
      "Creator-first shopping surfaces combining category browsing, chat, and dynamic deals—powered by top LLMs.",
    url: "https://pivota.cc/zh/creator-agents",
    siteName: "Pivota",
    type: "website",
  },
};

export default function CreatorAgentsZhPage() {
  return <CreatorAgentsPage localePrefix="/zh" />;
}
