import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pivota 博客：智能商业、MCP/ACP/AP2 与 AI",
  description: "关于智能商业的实践洞察、开发指南与商家策略。",
  alternates: {
    canonical: "/zh/blog",
    languages: { en: "/blog", "zh-Hans": "/zh/blog", "x-default": "/blog" },
  },
};

export default async function BlogIndexZh() {
  const posts = await getAllPosts("zh");
  return (
    <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">Pivota 博客</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((p) => (
          <article key={p.slug} className="bg-white text-black border border-gray-200 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/zh/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {new Date(p.date).toLocaleDateString()} · {(p.readingMinutes ?? 3)} 分钟阅读
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
              <Link href={`/zh/blog/${p.slug}`} className="text-blue-600 hover:underline">
                阅读详情 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
