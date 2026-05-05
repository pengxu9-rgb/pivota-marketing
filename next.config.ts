import type { NextConfig } from "next";

const vercelImageOptimizationEnabled =
  process.env.VERCEL_IMAGE_OPTIMIZATION_ENABLED === "true";

const nextConfig: NextConfig = {
  images: {
    unoptimized: !vercelImageOptimizationEnabled,
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [32, 64, 96, 160, 320],
  },
  async redirects() {
    return [
      {
        source: "/zh",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zh/blog/mcp-acp-ap2-intro-cn",
        destination: "/blog/what-are-mcp-acp-and-ap2",
        permanent: true,
      },
      {
        source: "/zh/blog/end-of-crawlers-agentic-commerce-cn",
        destination: "/blog/end-of-crawlers-agentic-commerce",
        permanent: true,
      },
      {
        source: "/zh/blog/from-ads-subscriptions-to-agentic-commerce-cn",
        destination: "/blog/from-ads-subscriptions-to-agentic-commerce",
        permanent: true,
      },
      {
        source: "/zh/blog/coming-shift-agentic-commerce-cn",
        destination: "/blog/coming-shift-agentic-commerce",
        permanent: true,
      },
      {
        source: "/zh/developers",
        destination: "/agent-integration",
        permanent: true,
      },
      {
        source: "/zh/developers/api-overview",
        destination: "/developers/request-types",
        permanent: true,
      },
      {
        source: "/zh/merchant-gateway",
        destination: "/merchant-gateway-for-agent-native-commerce",
        permanent: true,
      },
      {
        source: "/zh/how-it-works",
        destination: "/how-pivota-works",
        permanent: true,
      },
      {
        source: "/zh/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/merchant-gateway",
        destination: "/merchant-gateway-for-agent-native-commerce",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/how-pivota-works",
        permanent: true,
      },
      {
        source: "/blog/agentic-commerce-creators-amazon",
        destination: "/blog/agentic-commerce-creators-own-amazon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
