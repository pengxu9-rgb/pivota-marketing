import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant App Privacy Policy | Pivota",
  description:
    "Privacy Policy for the Pivota Merchant App. Learn how merchant and customer data is used, stored, and protected.",
  alternates: {
    canonical: "https://pivota.cc/privacy/merchant-app",
  },
};

export default function MerchantAppPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Pivota Merchant App Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-01-19</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-a:text-primary">
            <p>
              This Privacy Policy explains how Pivota (“Pivota”, “we”, “us”) collects, uses, stores, and shares
              information when a merchant installs and uses the Pivota Merchant App (the “App”) in connection with their
              e‑commerce store.
            </p>
            <p>
              If you have questions, contact us at <a href="mailto:support@pivota.cc">support@pivota.cc</a>.
            </p>

            <h2>1) What information we collect</h2>
            <p>When you install and use the App, we may collect and process:</p>

            <h3>Store and account information</h3>
            <ul>
              <li>Store identifiers (for example: store domain), store name, and basic store metadata returned by the platform.</li>
              <li>App installation and authorization metadata (timestamps, granted permissions/scopes, webhook IDs).</li>
            </ul>

            <h3>Order and fulfillment information</h3>
            <ul>
              <li>Orders (order IDs, order status, line items, prices/totals, currency, shipping method).</li>
              <li>Fulfillment events (fulfillment IDs, fulfillment status).</li>
              <li>Shipment tracking data (carrier, tracking number, tracking URL when provided).</li>
            </ul>

            <h3>Customer information (when applicable)</h3>
            <ul>
              <li>Customer identifiers provided by the platform (for example: customer ID).</li>
              <li>
                Customer contact details associated with orders (for example: email and shipping name/address) when
                required for order processing and customer support workflows.
              </li>
            </ul>

            <h3>Product information (when applicable)</h3>
            <ul>
              <li>Product and variant identifiers and catalog fields needed to display and validate items on Pivota.</li>
            </ul>

            <h3>Technical data</h3>
            <ul>
              <li>API logs needed to operate and secure the integration (request IDs, timestamps, error codes).</li>
              <li>Webhook delivery metadata (topic, delivery time, signature verification result).</li>
            </ul>

            <p>
              We do not intentionally collect sensitive categories of personal data. If your store sends such data to the
              App, we will treat it as confidential and process it only as necessary to provide the service.
            </p>

            <h2>2) How we use information</h2>
            <p>We use the information to:</p>
            <ul>
              <li>Provide the App’s core functionality (connect your store, sync orders, sync fulfillment and tracking updates).</li>
              <li>Register and receive webhooks so Pivota can reflect near‑real‑time order and fulfillment state.</li>
              <li>Prevent fraud and secure the integration (signature verification, replay protection, audit trails).</li>
              <li>Provide customer support and troubleshoot issues you report.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2>3) How we share information</h2>
            <p>We may share information:</p>
            <ul>
              <li>With service providers (sub‑processors) that help us host and operate Pivota (for example, cloud hosting and observability providers).</li>
              <li>When required by law, regulation, or legal process.</li>
            </ul>
            <p>We do not sell merchant or customer data.</p>

            <h2>4) Data retention</h2>
            <p>
              We retain data only as long as needed to provide the App and maintain accurate order records, and to meet
              legal, accounting, or audit requirements. We may retain de‑identified or aggregated data for analytics and
              product improvement.
            </p>

            <h2>5) Security</h2>
            <p>We use reasonable administrative, technical, and physical safeguards, including:</p>
            <ul>
              <li>Encryption in transit (HTTPS) for API communication.</li>
              <li>Verification of webhook authenticity via HMAC signatures.</li>
              <li>Access controls and least‑privilege principles for internal access.</li>
            </ul>
            <p>No method of transmission or storage is 100% secure; we cannot guarantee absolute security.</p>

            <h2>6) Uninstall and account disconnection</h2>
            <p>
              If you uninstall or disconnect the App, we stop receiving events from your store. Access tokens used to
              call the platform’s Admin API are removed or invalidated in Pivota where applicable. Some operational
              records (for example, security logs) may be retained for a limited time for fraud prevention and audit.
            </p>

            <h2>7) Merchant rights and data requests</h2>
            <p>
              Merchants can request access, correction, export, or deletion of merchant data processed by Pivota by
              contacting <a href="mailto:support@pivota.cc">support@pivota.cc</a>.
            </p>
            <p>
              For stores subject to data protection laws (such as GDPR), the platform may send mandatory compliance
              requests (data access and deletion requests). Pivota supports these requests and processes them as
              required.
            </p>

            <h2>8) Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will update the “Last updated” date above and, if changes
              are material, provide additional notice as required.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

