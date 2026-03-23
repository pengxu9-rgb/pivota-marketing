import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentSurfacesSwitcher from "@/components/AgentSurfacesSwitcher";
import { Button } from "@/components/ui/button";

const creatorAgentColumns = [
  {
    title: "Audience demand",
    body: "Turn creator-led demand into a clearer merchant path that can be understood and executed more reliably.",
  },
  {
    title: "Confidence layer",
    body: "Add enough context to reduce mismatch risk before checkout while preserving merchant control.",
  },
  {
    title: "Merchant-native checkout",
    body: "Keep transaction execution inside merchant-controlled systems rather than a separate marketplace-owned flow.",
  },
] as const;

export default function CreatorAgentsContent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-max mx-auto space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <AgentSurfacesSwitcher className="mb-2" />

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Creator-facing surface</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Pivota Creator Agents
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Creator Agents are creator-facing surfaces built on the merchant gateway for
              agent-native commerce. They connect audience demand to merchant-native transactions
              while keeping merchant systems in control.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <Link href="/#contact">Talk to us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/merchant-native-checkout">Merchant-native checkout</Link>
              </Button>
            </div>
          </div>

          <div className="card-gradient space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Built on the same execution layer
            </h2>
            <p className="text-sm text-muted-foreground">
              Creator-facing surfaces depend on the same gateway across catalog, checkout,
              payment, and post-purchase systems.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {creatorAgentColumns.map((column) => (
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
            Start with{" "}
            <Link href="/merchant-gateway" className="text-primary hover:underline">
              what the merchant gateway is
            </Link>
            , then review{" "}
            <Link href="/about" className="text-primary hover:underline">
              what Pivota is building
            </Link>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
