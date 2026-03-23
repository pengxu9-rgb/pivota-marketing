import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentSurfacesSwitcher from "@/components/AgentSurfacesSwitcher";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata } from "@/lib/marketing";

const shoppingAgentColumns = [
  {
    title: "Unified product view",
    body: "Turn fragmented product information into a clearer agent-facing view so demand can resolve into an executable merchant path.",
  },
  {
    title: "Confidence layer",
    body: "Add the context needed to reduce mismatch risk before merchant-native checkout.",
  },
  {
    title: "Merchant-native checkout",
    body: "Route agent demand into merchant-controlled checkout and payment flows while keeping merchant systems in control.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Shopping Agent Surface | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "An agent-facing surface built on Pivota's merchant gateway for agent-native commerce.",
  path: "/shopping-agent",
});

export default function ShoppingAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-max mx-auto space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <AgentSurfacesSwitcher className="mb-2" />

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Agent-facing surface</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Pivota Shopping Agent
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Pivota Shopping Agent is an agent-facing surface built on the merchant gateway for
              agent-native commerce. It helps route LLM and agent demand into merchant-native
              transactions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <Link href="/how-it-works">See how it works</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/merchant-native-checkout">Merchant-native checkout</Link>
              </Button>
            </div>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              One surface on top of the gateway
            </h2>
            <p className="text-sm text-muted-foreground">
              This route describes an agent-facing surface on top of the same execution layer
              across catalog, checkout, payment, and post-purchase systems.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {shoppingAgentColumns.map((column) => (
            <div key={column.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">{column.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{column.body}</p>
            </div>
          ))}
        </section>

        <section className="card-gradient space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related pages
          </h2>
          <p className="text-sm text-muted-foreground">
            See the core category definition on{" "}
            <Link href="/merchant-gateway" className="text-primary hover:underline">
              /merchant-gateway
            </Link>
            , then follow the execution model on{" "}
            <Link href="/how-it-works" className="text-primary hover:underline">
              /how-it-works
            </Link>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
