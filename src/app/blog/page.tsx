import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pivota Blog: Agentic Commerce, MCP/ACP/AP2, and AI Commerce",
  description: "Insights on agentic commerce, developer guides and merchant strategy.",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", "zh-Hans": "/zh/blog", "x-default": "/blog" },
  },
};

export default async function BlogIndex() {
  const posts = await getAllPosts("en");

  const creatorAmazonSlug = "agentic-commerce-creators-own-amazon";
  const hasCreatorAmazon = posts.some((p) => p.slug === creatorAmazonSlug);

  const creatorAmazonPost = {
    id: "agentic-commerce-creators-own-amazon",
    locale: "en" as const,
    slug: creatorAmazonSlug,
    title: "Turning Creators into Their Own Amazon in Agentic Era",
    description:
      "How agentic commerce lets creators operate like their own Amazon, with AI agents in front and an open, Amazon-class commerce backend behind.",
    date: "2025-12-05",
    author: "Pivota Team",
    ogImage: "/og-merchants.svg",
    tags: ["Agentic Commerce", "Creators", "Influencers", "KOLs", "Monetization", "AI Agents"],
    body: "",
    readingMinutes: 4,
  };

  const finalPosts = hasCreatorAmazon ? posts : [creatorAmazonPost, ...posts];

  return (
    <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">Pivota Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {finalPosts.map((p) => (
          <article key={p.slug} className="bg-white text-black border border-gray-200 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {new Date(p.date).toLocaleDateString()} · {(p.readingMinutes ?? 3)} min read
            </p>
            <p className="text-gray-700">{p.description}</p>
            <div className="mt-4">
              {p.tags && p.tags.length > 0 && (
                <p className="mb-2 text-xs text-gray-600">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-block mr-2 px-2 py-0.5 rounded bg-gray-100 text-gray-700">#{t}</span>
                  ))}
                </p>
              )}
              <Link href={`/blog/${p.slug}`} className="text-blue-600 hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
