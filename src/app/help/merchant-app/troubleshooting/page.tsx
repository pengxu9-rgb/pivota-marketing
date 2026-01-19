import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant App Troubleshooting | Pivota",
  description: "Troubleshooting guide for installation, authorization, and sync issues in the Pivota Merchant App.",
  alternates: {
    canonical: "https://pivota.cc/help/merchant-app/troubleshooting",
  },
};

export default function MerchantAppTroubleshootingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Pivota Merchant App — Troubleshooting</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-01-19</p>

          <div className="prose prose-invert mt-10 max-w-none prose-a:text-primary">
            <h2>Installation issues</h2>

            <h3>“Installation link is invalid”</h3>
            <ul>
              <li>Install links are one‑time use and expire after a short period.</li>
              <li>Generate a new link and complete authorization promptly.</li>
              <li>Use the store’s canonical *.myshopify.com domain when asked for the store domain.</li>
            </ul>

            <h3>Authorization succeeded but store does not appear connected</h3>
            <ul>
              <li>Return to the Pivota Merchant Portal → Integrations and refresh the stores list.</li>
              <li>If it still does not appear, contact support with the store domain and timestamp.</li>
            </ul>

            <h2>Sync issues</h2>

            <h3>Product sync shows 0 products</h3>
            <p>This typically indicates a permission or token problem (401/403).</p>
            <ul>
              <li>Re-authorize and retry.</li>
              <li>If you are using a manually generated Admin API token, regenerate the token and reconnect.</li>
            </ul>

            <h3>Webhook events are not arriving</h3>
            <ul>
              <li>Confirm webhook endpoints are configured and reachable.</li>
              <li>Confirm webhook signature verification is enabled and the correct secret is configured.</li>
              <li>Contact support with the webhook topic and approximate timestamp.</li>
            </ul>

            <h2>Support</h2>
            <p>
              Email <a href="mailto:support@pivota.cc">support@pivota.cc</a> and include: merchant ID, store domain,
              approximate timestamp, and any error message shown.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
