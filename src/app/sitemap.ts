import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { loadMarkdownPosts } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const base = "https://pivota.cc";
  const enFs = await loadMarkdownPosts("en").catch(() => []);
  const zhFs = await loadMarkdownPosts("zh").catch(() => []);

  // Build a map of FS posts by stable id to attach alternates
  const byId = new Map<string, { en?: typeof enFs[number]; zh?: typeof zhFs[number] }>();
  for (const p of enFs) byId.set(p.id, { ...(byId.get(p.id) || {}), en: p });
  for (const p of zhFs) byId.set(p.id, { ...(byId.get(p.id) || {}), zh: p });

  const blogWithAlternates: MetadataRoute.Sitemap = [];
  for (const entry of byId.values()) {
    if (entry.en) {
      blogWithAlternates.push({
        url: `${base}/blog/${entry.en.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          languages: {
            en: `${base}/blog/${entry.en.slug}`,
            "zh-Hans": entry.zh ? `${base}/zh/blog/${entry.zh.slug}` : undefined,
          },
        },
      });
    }
    if (entry.zh) {
      blogWithAlternates.push({
        url: `${base}/zh/blog/${entry.zh.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: {
          languages: {
            en: entry.en ? `${base}/blog/${entry.en.slug}` : undefined,
            "zh-Hans": `${base}/zh/blog/${entry.zh.slug}`,
          },
        },
      });
    }
  }

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
    {
      url: `${base}/creator-agents/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${base}/creator-agents/`,
          "zh-Hans": `${base}/zh/creator-agents/`,
          "x-default": `${base}/creator-agents/`,
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
    {
      url: `${base}/zh/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/zh/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/zh/creator-agents/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          en: `${base}/creator-agents/`,
          "zh-Hans": `${base}/zh/creator-agents/`,
          "x-default": `${base}/creator-agents/`,
        },
      },
    },
    // Blog FS posts with alternates
    ...blogWithAlternates,
    ...posts
      .filter((p) => p.locale === "en")
      .map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
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
