import Link from "next/link";
import { Cable, ChevronRight, Globe2, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const protocolLayers = [
  {
    title: "Google UCP",
    status: "Partner access",
    availability: "Limited availability",
    body: "Use Google UCP when a partner-approved distribution or catalog standard needs to sit on top of Pivota-managed commerce flows. It is not the default self-serve REST path.",
    icon: Globe2,
  },
  {
    title: "ACP",
    status: "Internal beta",
    availability: "Selected technical-partner workflows",
    body: "ACP is an agent-commerce protocol layer used in selected LLM and partner workflows. Core APIs and webhooks remain the production control surface.",
    icon: Cable,
  },
  {
    title: "AP2",
    status: "Internal beta",
    availability: "Selected partner and payment workflows",
    body: "AP2 is a payment and security protocol layer above standard order and webhook flows. It is not a public self-serve surface in the default developer path.",
    icon: ShieldCheck,
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Protocols & Compatibility | Pivota Agent Integration",
  description:
    "Public compatibility page for protocol and channel layers that sit above Pivota's default REST, API key, and webhook production contract.",
  path: routePaths.developersProtocols,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
  { name: "Protocols & Compatibility", path: routePaths.developersProtocols },
]);

export default function DevelopersProtocolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-protocols-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "Protocols & Compatibility" },
                ]}
              />

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  Protocols & compatibility
                </p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Keep the production path on REST and webhooks. Layer protocols on top only when required.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  Pivota supports channel and protocol layers, but they do not replace the default
                  public integration model. External developers should start with API keys, REST
                  endpoints, and webhook delivery, then introduce protocol layers only when a
                  partner program or rollout stage explicitly requires them.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {protocolLayers.map((layer) => (
                  <article key={layer.title} className="section-frame px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <layer.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-semibold tracking-tight text-foreground">
                        {layer.title}
                      </h2>
                      <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-primary">
                        {layer.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {layer.availability}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{layer.body}</p>
                  </article>
                ))}
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      The default self-serve path remains the core public contract.
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Treat REST APIs, API keys, order flows, and webhooks as the production
                      control surface. Standards and protocol layers sit above those operational
                      surfaces and should not be treated as a replacement for them.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.developersFirstCall} className="text-primary hover:underline">
                      First call
                    </Link>
                    <Link href={routePaths.developersAuthWebhooks} className="inline-flex items-center text-primary hover:underline">
                      Auth & webhooks
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
