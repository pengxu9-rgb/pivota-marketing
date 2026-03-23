import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { loadMarkdownPosts } from "@/lib/markdown";
import { siteUrl } from "@/lib/marketing";

const primaryRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/merchant-gateway", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/how-it-works", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/merchant-native-checkout", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.65 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/privacy/merchant-app", changeFrequency: "yearly" as const, priority: 0.35 },
  { path: "/help/merchant-app", changeFrequency: "monthly" as const, priority: 0.4 },
  { path: "/help/merchant-app/faq", changeFrequency: "monthly" as const, priority: 0.35 },
  { path: "/help/merchant-app/troubleshooting", changeFrequency: "monthly" as const, priority: 0.35 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.2 },
] as const;

function absoluteUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const fsPosts = await loadMarkdownPosts("en").catch(() => []);

  const blogPosts = [...fsPosts, ...posts.filter((post) => post.locale === "en")].filter(
    (post, index, allPosts) => allPosts.findIndex((candidate) => candidate.slug === post.slug) === index,
  );

  return [
    ...primaryRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: absoluteUrl(route.path),
          "x-default": absoluteUrl(route.path),
        },
      },
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: absoluteUrl(`/blog/${post.slug}`),
          "x-default": absoluteUrl(`/blog/${post.slug}`),
        },
      },
    })),
  ];
}
