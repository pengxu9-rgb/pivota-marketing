import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import {
  defaultOgDescription,
  defaultOgTitle,
  homepageMetaDescription,
  homepageTitle,
  siteName,
  siteUrl,
} from "@/lib/marketing";
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
  name: siteName,
  url: siteUrl,
  description: homepageMetaDescription,
  logo: `${siteUrl}/og-home.svg`,
} as const;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: homepageMetaDescription,
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homepageTitle,
  description: homepageMetaDescription,
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      en: `${siteUrl}/`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName,
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: [
      { url: "/og-home.svg", width: 1200, height: 630, alt: defaultOgTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: ["/og-home.svg"],
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
        {/* hreflang for English */}
        <link rel="alternate" href={`${siteUrl}/`} hrefLang="x-default" />
        <link rel="alternate" href={`${siteUrl}/`} hrefLang="en" />
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
