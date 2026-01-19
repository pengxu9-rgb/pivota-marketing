import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant App FAQ | Pivota",
  description: "Frequently asked questions for the Pivota Merchant App.",
  alternates: {
    canonical: "https://pivota.cc/help/merchant-app/faq",
  },
};

export default function MerchantAppFaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Pivota Merchant App — FAQ</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-01-19</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-a:text-primary">
            <h2>Do I need to create a separate app or paste API keys?</h2>
            <p>
              No. The recommended setup uses the Pivota Merchant App authorization flow. You approve permissions, and
              Pivota stores the required access token securely to operate the integration.
            </p>
            <p>
              If the public installation flow is temporarily unavailable (for example, during review), Pivota may
              provide a fallback option that uses a manually generated Admin API access token.
            </p>

            <h2>Why do you need access to orders and fulfillments?</h2>
            <p>
              Pivota syncs order and fulfillment status (including tracking updates) so your Pivota order state stays
              consistent with your store admin.
            </p>

            <h2>How do webhooks work?</h2>
            <p>
              After authorization, the app registers webhooks for order and fulfillment topics. Webhooks are verified
              using HMAC signatures to ensure authenticity.
            </p>

            <h2>What happens when I uninstall the app?</h2>
            <p>
              When the platform notifies us that the app was uninstalled, Pivota disconnects the store and clears stored
              access tokens for that integration.
            </p>

            <h2>How do I request data deletion?</h2>
            <p>
              Email <a href="mailto:support@pivota.cc">support@pivota.cc</a> with your merchant ID and store domain. If
              you are subject to data protection laws, the platform may also submit compliance requests automatically;
              Pivota supports these requests.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

