import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://pivota.cc/zh/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://pivota.cc/" />
    <xhtml:link rel="alternate" hreflang="zh-Hans" href="https://pivota.cc/zh/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://pivota.cc/" />
  </url>

  <url>
    <loc>https://pivota.cc/zh/developers/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://pivota.cc/developers/" />
    <xhtml:link rel="alternate" hreflang="zh-Hans" href="https://pivota.cc/zh/developers/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://pivota.cc/developers/" />
  </url>

  <url>
    <loc>https://pivota.cc/zh/merchants/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://pivota.cc/merchants/" />
    <xhtml:link rel="alternate" hreflang="zh-Hans" href="https://pivota.cc/zh/merchants/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://pivota.cc/merchants/" />
  </url>

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

