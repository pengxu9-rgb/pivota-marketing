import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
