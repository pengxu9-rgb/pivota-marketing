import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "What Is a Merchant Gateway for Agent-Native Commerce? | Pivota",
  description:
    "A merchant gateway is the execution layer between LLM or agent demand and merchant-native transactions. Pivota makes merchants more queryable across agent surfaces, routes demand into merchant-native checkout and payment flows, and writes execution state back into existing merchant systems.",
  path: "/merchant-gateway",
});

const whatPivotaDoes = [
  "Makes catalogs queryable to LLMs and agents",
  "Structures products, offers, and variants",
  "Routes demand into merchant-native checkout",
  "Supports order authorization and write-back",
  "Syncs payment state and works with existing PSPs",
  "Builds reliability signals that improve execution over time",
] as const;

const whatPivotaIsNot = [
  "Not a marketplace",
  "Not an inventory holder",
  "Not a warehousing or logistics operator",
  "Not a checkout-only widget",
  "Not a service business disguised as infrastructure",
] as const;

export default function MerchantGatewayPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-5xl space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What is a merchant gateway for agent-native commerce?
            </h1>
            <p className="text-lg text-muted-foreground">
              A merchant gateway is the execution layer between LLM or agent demand and
              merchant-native transactions. Pivota makes merchants more queryable across agent
              surfaces, routes demand into merchant-native checkout and payment flows, and writes
              execution state back into existing merchant systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Why this layer exists</h2>
            <p className="text-base leading-7 text-muted-foreground">
              LLMs and agents can generate demand, but merchant execution is still fragmented.
              Product data, variant logic, checkout, payment routing, and post-purchase state are
              not uniformly available across agent surfaces. The missing layer is a merchant
              gateway that merchants and agents can reliably route through.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What Pivota does</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {whatPivotaDoes.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-5">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What Pivota is not</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {whatPivotaIsNot.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-5">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card-gradient space-y-4">
            <p className="text-lg font-semibold">
              Pivota is the merchant gateway for agent-native commerce.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/how-it-works" className="text-primary hover:underline">
                See how it works
              </Link>
              <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                Explore merchant-native checkout
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
