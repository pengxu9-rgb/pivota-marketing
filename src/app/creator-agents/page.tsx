import CreatorAgentsContent from "@/components/CreatorAgentsContent";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Creator Agent Surface | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Creator-facing agent surfaces built on Pivota's merchant gateway for agent-native commerce.",
  path: "/creator-agents",
});

export default function CreatorAgentsPage() {
  return <CreatorAgentsContent />;
}
