import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/agentic-commerce-creators-amazon",
        destination: "/blog/agentic-commerce-creators-own-amazon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
