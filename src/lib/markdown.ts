import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import type { BlogPost, Locale } from "@/lib/blog";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function estimateMinutes(text: string): number {
  const words = (text.replace(/`{3}[\s\S]*?`{3}/g, " ") || "")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 250));
  return minutes;
}

async function mdToHtml(md: string): Promise<{ html: string; minutes: number }> {
  const processed = await remark()
    .use(gfm)
    .use(html)
    .process(md);
  const out = String(processed);
  return { html: out, minutes: estimateMinutes(md) };
}

export async function loadMarkdownPosts(locale: Locale): Promise<BlogPost[]> {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  const slugFileRe = /^[a-z0-9-]+\.(md|mdx)$/i;
  const files = fs
    .readdirSync(dir)
    // Only accept kebab-case filenames like my-post.md to avoid accidental Notion exports
    .filter((f) => slugFileRe.test(f));

  const results: BlogPost[] = [];
  for (const file of files) {
    const slug = file.replace(/\.(md|mdx)$/i, "");
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data, content } = matter(raw);
    if (data && (data.published === false || data.draft === true)) continue;
    const { html: body, minutes } = await mdToHtml(content);
    const post: BlogPost = {
      id: (data.id as string) || slug,
      locale,
      slug,
      title: (data.title as string) || slug,
      description: (data.description as string) || "",
      date: (data.date as string) || new Date().toISOString(),
      author: (data.author as string) || "Pivota Team",
      ogImage: data.ogImage as string | undefined,
      tags: (data.tags as string[]) || [],
      body,
      readingMinutes: minutes,
    };
    results.push(post);
  }
  // Newest first
  results.sort((a, b) => (a.date < b.date ? 1 : -1));
  return results;
}
