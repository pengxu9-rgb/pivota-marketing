import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Merchant-Native Checkout for LLM and Agent Traffic | Pivota",
  description:
    "Pivota helps merchants convert LLM and agent demand through merchant-native checkout and payment flows.",
  path: "/merchant-native-checkout",
});

const supports = [
  "Merchant-native payment flows",
  "Existing PSP routing",
  "Order authorization",
  "Payment-state sync",
  "Order and payment write-back",
  "Lower mismatch risk through better execution context",
] as const;

const merchantsKeep = [
  "Their storefront",
  "Their fulfillment stack",
  "Their customer operations",
  "Their existing payment relationships",
] as const;

export default function MerchantNativeCheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-5xl space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Merchant-native checkout for LLM and agent traffic
            </h1>
            <p className="text-lg text-muted-foreground">
              Pivota helps merchants convert LLM and agent demand through merchant-native checkout
              and payment flows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why merchant-native checkout matters
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Agent-driven demand breaks when checkout paths are fragmented, mismatched, or
              disconnected from merchant systems. Merchant-native checkout improves conversion while
              preserving merchant control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What Pivota supports</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {supports.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-5">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What merchants keep</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {merchantsKeep.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-5">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card-gradient space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Talk to us about merchant-native checkout
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/#contact" className="text-primary hover:underline">
                Talk to us
              </Link>
              <Link href="/faq" className="text-primary hover:underline">
                Read the FAQ
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
