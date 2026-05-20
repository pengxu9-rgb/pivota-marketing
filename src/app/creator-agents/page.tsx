import CreatorAgentsContent from "@/components/CreatorAgentsContent";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Creator Agent Surface | Pivota",
  description:
    "Creator-facing agent surfaces built on Pivota's commerce execution layer.",
  path: "/creator-agents",
});

export default function CreatorAgentsPage() {
  return <CreatorAgentsContent />;
}
