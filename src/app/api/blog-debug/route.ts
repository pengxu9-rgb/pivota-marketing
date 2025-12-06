import { NextResponse } from "next/server";
import { loadMarkdownPosts } from "@/lib/markdown";

export async function GET() {
  const posts = await loadMarkdownPosts("en");
  return NextResponse.json(posts.map((p) => ({ slug: p.slug, date: p.date })));
}

