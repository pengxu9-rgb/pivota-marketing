import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant App Help | Pivota",
  description: "Quickstart, FAQs, and troubleshooting resources for the Pivota Merchant App.",
  alternates: {
    canonical: "https://pivota.cc/help/merchant-app",
  },
};

export default function MerchantAppHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Pivota Merchant App — Help &amp; Resources</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-01-19</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-a:text-primary">
            <h2>Quickstart</h2>
            <ol>
              <li>Connect your store in the Pivota Merchant Portal → Integrations.</li>
              <li>Complete the authorization flow.</li>
              <li>Confirm the store shows as connected.</li>
              <li>Create or update a fulfillment with a tracking number in your store admin.</li>
              <li>Confirm the matching Pivota order shows shipped and displays a tracking number.</li>
            </ol>

            <h2>Self‑serve resources</h2>
            <ul>
              <li>
                <Link href="/help/merchant-app/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/help/merchant-app/troubleshooting">Troubleshooting</Link>
              </li>
              <li>
                <Link href="/privacy/merchant-app">Privacy Policy</Link>
              </li>
            </ul>

            <h2>Support</h2>
            <p>
              Email <a href="mailto:support@pivota.cc">support@pivota.cc</a> and include: merchant ID, store domain,
              approximate time of the issue, and any error message shown in the portal.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

