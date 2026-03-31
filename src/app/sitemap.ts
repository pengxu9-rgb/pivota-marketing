import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { loadMarkdownPosts } from "@/lib/markdown";
import { demotedBlogSlugs, lastUpdatedIso, routePaths, siteUrl } from "@/lib/marketing";

const primaryRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: routePaths.aiReadiness, changeFrequency: "weekly" as const, priority: 0.82 },
  { path: routePaths.pivotaVsShopify, changeFrequency: "weekly" as const, priority: 0.76 },
  { path: routePaths.whatIsAgenticCommerce, changeFrequency: "weekly" as const, priority: 0.8 },
  { path: routePaths.whatIsAgentNativeCommerce, changeFrequency: "weekly" as const, priority: 0.9 },
  { path: routePaths.merchantGateway, changeFrequency: "weekly" as const, priority: 0.95 },
  { path: routePaths.howPivotaWorks, changeFrequency: "weekly" as const, priority: 0.9 },
  { path: routePaths.merchantNativeCheckout, changeFrequency: "weekly" as const, priority: 0.85 },
  { path: routePaths.developers, changeFrequency: "weekly" as const, priority: 0.8 },
  { path: routePaths.apiOverview, changeFrequency: "weekly" as const, priority: 0.75 },
  { path: routePaths.faq, changeFrequency: "weekly" as const, priority: 0.8 },
  { path: routePaths.useCases, changeFrequency: "weekly" as const, priority: 0.75 },
  { path: routePaths.about, changeFrequency: "monthly" as const, priority: 0.65 },
  { path: routePaths.blog, changeFrequency: "weekly" as const, priority: 0.65 },
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
  const siteLastModified = new Date(lastUpdatedIso);
  const fsPosts = await loadMarkdownPosts("en").catch(() => []);

  const blogPosts = [...fsPosts, ...posts.filter((post) => post.locale === "en")]
    .filter(
      (post, index, allPosts) =>
        allPosts.findIndex((candidate) => candidate.slug === post.slug) === index,
    )
    .filter(
      (post) => !demotedBlogSlugs.includes(post.slug as (typeof demotedBlogSlugs)[number]),
    );

  return [
    ...primaryRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: siteLastModified,
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
      lastModified: new Date(post.date),
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
