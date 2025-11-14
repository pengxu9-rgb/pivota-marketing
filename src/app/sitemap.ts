import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { loadMarkdownPosts } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const base = "https://pivota.cc";
  const enFs = await loadMarkdownPosts("en").catch(() => []);
  const zhFs = await loadMarkdownPosts("zh").catch(() => []);

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${base}/`,
          "zh-Hans": `${base}/zh/`,
          "x-default": `${base}/`,
        },
      },
    },
    {
      url: `${base}/zh/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${base}/`,
          "zh-Hans": `${base}/zh/`,
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
          "zh-Hans": `${base}/zh/developers/`,
          "x-default": `${base}/developers/`,
        },
      },
    },
    {
      url: `${base}/zh/developers/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/developers/`,
          "zh-Hans": `${base}/zh/developers/`,
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
          "zh-Hans": `${base}/zh/merchants/`,
          "x-default": `${base}/merchants/`,
        },
      },
    },
    {
      url: `${base}/zh/merchants/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/merchants/`,
          "zh-Hans": `${base}/zh/merchants/`,
          "x-default": `${base}/merchants/`,
        },
      },
    },
    // Blog EN (FS first, then in-memory)
    ...enFs.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...posts
      .filter((p) => p.locale === "en")
      .map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    // Blog ZH
    ...zhFs.map((p) => ({
      url: `${base}/zh/blog/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...posts
      .filter((p) => p.locale === "zh")
      .map((p) => ({
        url: `${base}/zh/blog/${p.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
