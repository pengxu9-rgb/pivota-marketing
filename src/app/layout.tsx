import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pivota",
  url: "https://pivota.cc",
  logo: "https://pivota.cc/og-home.svg",
} as const;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pivota",
  url: "https://pivota.cc",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://pivota.cc/?q={search_term}",
    "query-input": "required name=search_term",
  },
} as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://pivota.cc"),
  title: "The API for Agentic Commerce: Connect Agents & Merchants | Pivota",
  description:
    "Pivota is the infrastructure for agentic commerce. A single API to connect AI agents to merchant products, ordering (ACP), and direct payments (AP2).",
  alternates: {
    canonical: "https://pivota.cc/",
    languages: {
      en: "https://pivota.cc/",
      "zh-Hans": "https://pivota.cc/zh/",
      "x-default": "https://pivota.cc/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://pivota.cc/",
    siteName: "Pivota",
    title: "The API for Agentic Commerce: Connect Agents & Merchants | Pivota",
    description:
      "Pivota is the infrastructure for agentic commerce. A single API to connect AI agents to merchant products, ordering (ACP), and direct payments (AP2).",
    images: [
      { url: "/og-home.svg", width: 1200, height: 630, alt: "Pivota – Agentic Commerce API" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The API for Agentic Commerce: Connect Agents & Merchants | Pivota",
    description:
      "Pivota is the infrastructure for agentic commerce. A single API to connect AI agents to merchant products, ordering (ACP), and direct payments (AP2).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* hreflang for English and Simplified Chinese */}
        <link rel="alternate" href="https://pivota.cc/" hrefLang="x-default" />
        <link rel="alternate" href="https://pivota.cc/" hrefLang="en" />
        <link rel="alternate" href="https://pivota.cc/zh/" hrefLang="zh-Hans" />
        {/* Baidu site verification */}
        <meta name="baidu-site-verification" content="codeva-Z2nSoSL8VM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="pivota-organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="pivota-website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
