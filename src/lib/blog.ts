export type Locale = "en" | "zh";

export type BlogPost = {
  id: string; // stable id linking EN/ZH variants
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  ogImage?: string;
  tags?: string[];
  body: string; // simple HTML fragment for now
  readingMinutes?: number;
};

const now = new Date().toISOString().slice(0, 10);

// In-repo placeholder array removed; we rely on Markdown content under /content/blog.
export const posts: BlogPost[] = [];

import { loadMarkdownPosts } from "@/lib/markdown";

export async function getAllPosts(locale: Locale): Promise<BlogPost[]> {
  const fsPosts = await loadMarkdownPosts(locale).catch(() => []);
  const mem = posts.filter((p) => p.locale === locale);
  return [...fsPosts, ...mem].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(locale: Locale, slug: string): Promise<BlogPost | undefined> {
  const fsPosts = await loadMarkdownPosts(locale).catch(() => []);
  const foundFs = fsPosts.find((p) => p.slug === slug);
  if (foundFs) return foundFs;
  return posts.find((p) => p.locale === locale && p.slug === slug);
}

export async function getAltSlug(id: string, locale: Locale): Promise<string | undefined> {
  const other: Locale = locale === "en" ? "zh" : "en";
  const fsOther = await loadMarkdownPosts(other).catch(() => []);
  const alt = fsOther.find((p) => p.id === id);
  if (alt) return alt.slug;
  // fallback to memory posts if any
  const memAlt = posts.find((p) => p.id === id && p.locale === other);
  return memAlt?.slug;
}
