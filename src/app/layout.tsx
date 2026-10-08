import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import {
  defaultOgDescription,
  defaultOgTitle,
  homepageMetaDescription,
  homepageTitle,
  siteName,
  siteUrl,
} from "@/lib/marketing";
import { founder } from "@/lib/press";
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
  "@id": `${siteUrl}/#organization`,
  sameAs: ["https://www.linkedin.com/company/pivota-agentic"],
  logo: `${siteUrl}/pivota-brand/svg/pivota-mark.svg`,
  founder: { "@type": "Person", name: founder.name, jobTitle: founder.jobTitle },
} as const;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  publisher: { "@id": `${siteUrl}/#organization` },
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/pivota-brand/pivota-brand.css" />
        <link rel="icon" type="image/svg+xml" href="/pivota-brand/svg/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pivota-brand/icons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pivota-brand/icons/favicon-16.png" />
        <link rel="apple-touch-icon" href="/pivota-brand/icons/apple-touch-icon.png" />
        {/* Baidu site verification */}
        <meta name="baidu-site-verification" content="codeva-Z2nSoSL8VM" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#11100f] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#534AB7]"
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <JsonLd id="pivota-organization-jsonld" data={organizationJsonLd} />
        <JsonLd id="pivota-website-jsonld" data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
