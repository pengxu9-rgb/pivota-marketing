import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata } from "@/lib/marketing";

const developerCapabilities = [
  {
    title: "Catalog and offer queryability",
    body: "Work with structured products, offers, and variants so LLM and agent traffic can resolve into an executable merchant path.",
  },
  {
    title: "Merchant-native execution",
    body: "Route demand into merchant-native checkout and payment flows instead of pushing merchants into a separate commerce stack.",
  },
  {
    title: "Authorization and write-back",
    body: "Keep merchant systems in control with order authorization, payment-state sync, and execution state written back into existing systems.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Developers | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Build on Pivota's merchant gateway for agent-native commerce across catalog, checkout, payment, and post-purchase systems.",
  path: "/developers",
});

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-max mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Developer surface</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Build on the merchant gateway for agent-native commerce.
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Pivota connects LLM and agent traffic to merchant-native transactions across
              catalog, checkout, payment, and post-purchase systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <a href="https://developer.pivota.cc/login">Developer Login</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Start with the{" "}
              <Link href="/merchant-gateway" className="text-primary hover:underline">
                merchant gateway definition
              </Link>
              , then review{" "}
              <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                merchant-native checkout
              </Link>{" "}
              and the{" "}
              <Link href="/faq" className="text-primary hover:underline">
                FAQ
              </Link>
              .
            </p>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              What developers work with
            </h2>
            <p className="text-sm text-muted-foreground">
              The developer surface is the execution layer behind merchant-native transactions.
              It keeps catalog, checkout, payment, and post-purchase systems aligned.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {developerCapabilities.map((capability) => (
            <div key={capability.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">{capability.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{capability.body}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
