import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { loadMarkdownPosts } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const base = "https://pivota.cc";
  const fsPosts = await loadMarkdownPosts("en").catch(() => []);

  const blogPosts = [...fsPosts, ...posts.filter((post) => post.locale === "en")].filter(
    (post, index, allPosts) => allPosts.findIndex((candidate) => candidate.slug === post.slug) === index,
  );

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${base}/`,
          "x-default": `${base}/`,
        },
      },
    },
    {
      url: `${base}/developers/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${base}/developers/`,
          "x-default": `${base}/developers/`,
        },
      },
    },
    {
      url: `${base}/merchants/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${base}/merchants/`,
          "x-default": `${base}/merchants/`,
        },
      },
    },
    {
      url: `${base}/shopping-agent/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${base}/shopping-agent/`,
          "x-default": `${base}/shopping-agent/`,
        },
      },
    },
    {
      url: `${base}/creator-agents/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${base}/creator-agents/`,
          "x-default": `${base}/creator-agents/`,
        },
      },
    },
    {
      url: `${base}/blog/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/blog/`,
          "x-default": `${base}/blog/`,
        },
      },
    },
    {
      url: `${base}/privacy/merchant-app`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.35,
    },
    {
      url: `${base}/help/merchant-app`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/help/merchant-app/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.35,
    },
    {
      url: `${base}/help/merchant-app/troubleshooting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.35,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
