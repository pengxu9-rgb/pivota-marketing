import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "How Pivota Works | Merchant Gateway for LLM and Agent Transactions",
  description:
    "Pivota connects agent-native demand to merchant-native execution through a shared gateway across catalog, checkout, payment, and post-purchase systems.",
  path: "/how-it-works",
});

const steps = [
  {
    title: "Make catalogs queryable",
    body: "Pivota structures product catalogs, offers, and variants so LLMs and agents can resolve user intent into an executable merchant path.",
  },
  {
    title: "Route into merchant-native execution",
    body: "Pivota connects agent traffic to merchant-native checkout and payment flows instead of forcing merchants into a separate commerce stack.",
  },
  {
    title: "Write execution state back",
    body: "Orders, authorizations, and payment status sync back into merchant systems so merchants stay in control of storefront, fulfillment, and customer operations.",
  },
  {
    title: "Improve reliability over time",
    body: "Normalization, payment-state sync, and execution outcomes create a compounding reliability layer across LLM surfaces.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-5xl space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How Pivota works</h1>
            <p className="text-lg text-muted-foreground">
              Pivota connects agent-native demand to merchant-native execution through a shared
              gateway across catalog, checkout, payment, and post-purchase systems.
            </p>
          </section>

          <section className="grid gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="card-gradient">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Step {index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </section>

          <section className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link href="/merchant-gateway" className="text-primary hover:underline">
              Read the merchant gateway definition
            </Link>
            <Link href="/merchant-native-checkout" className="text-primary hover:underline">
              See the checkout layer
            </Link>
            <Link href="/#contact" className="text-primary hover:underline">
              Talk to us
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
