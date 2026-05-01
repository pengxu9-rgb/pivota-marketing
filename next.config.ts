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
