import { permanentRedirect } from "next/navigation";

const retiredZhRedirects: Record<string, string> = {
  "blog/mcp-acp-ap2-intro-cn": "/blog/what-are-mcp-acp-and-ap2",
  "blog/end-of-crawlers-agentic-commerce-cn": "/blog/end-of-crawlers-agentic-commerce",
  "blog/from-ads-subscriptions-to-agentic-commerce-cn":
    "/blog/from-ads-subscriptions-to-agentic-commerce",
  "blog/coming-shift-agentic-commerce-cn": "/blog/coming-shift-agentic-commerce",
  developers: "/agent-integration",
  "developers/api-overview": "/developers/request-types",
  "merchant-gateway": "/merchant-gateway-for-agent-native-commerce",
  "how-it-works": "/how-pivota-works",
};

type RetiredZhPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function RetiredZhPage({ params }: RetiredZhPageProps) {
  const { slug } = await params;
  const retiredPath = slug.join("/");

  permanentRedirect(retiredZhRedirects[retiredPath] ?? `/${retiredPath}`);
}
