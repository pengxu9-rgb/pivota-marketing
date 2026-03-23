import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata } from "@/lib/marketing";

const merchantStages = [
  {
    title: "Discovery / Link-out",
    body: "Start fast, make merchant demand paths clearer, and measure incrementality across LLM surfaces.",
  },
  {
    title: "Feeds",
    body: "Improve match accuracy, attribution, and execution controls with more structured catalog inputs.",
  },
  {
    title: "Merchant-native checkout",
    body: "Increase conversion while keeping storefront, payment, fulfillment, and customer operations merchant-native.",
  },
] as const;

const merchantBoundaries = [
  "No inventory",
  "No warehousing",
  "No last-mile logistics",
  "No subsidy-driven GMV",
  "No rebuilding merchant ops",
] as const;

export const metadata = buildMarketingMetadata({
  title: "Merchants | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Connect merchant systems so LLM and agent traffic can route into merchant-native transactions without rebuilding your stack.",
  path: "/merchants",
});

export default function MerchantsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-max mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Merchant surface</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Connect merchant systems to LLM and agent demand.
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Pivota is the merchant gateway for agent-native commerce. It helps merchants become
              more discoverable, more executable, and more measurable across LLM surfaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <a href="https://merchant.pivota.cc/login">Merchant Login</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">Talk to us</Link>
              </Button>
            </div>
            <p className="max-w-3xl text-sm text-muted-foreground">
              See{" "}
              <Link href="/merchant-gateway" className="text-primary hover:underline">
                what the merchant gateway does
              </Link>
              , how it{" "}
              <Link href="/how-it-works" className="text-primary hover:underline">
                works
              </Link>
              , and why{" "}
              <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                merchant-native checkout
              </Link>{" "}
              matters.
            </p>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Built on top of merchant systems
            </h2>
            <p className="text-sm text-muted-foreground">
              Merchants keep their storefront, fulfillment, and customer operations. Pivota writes
              orders and payment state back into existing systems.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {merchantBoundaries.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            A practical path to merchant-native transactions
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {merchantStages.map((stage) => (
              <div key={stage.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
