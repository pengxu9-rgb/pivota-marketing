import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const requestFamilies = [
  {
    family: "Authentication and merchant context",
    examples: "GET /agent/v1/merchants",
    path: "REST with X-API-Key",
    summary: "Validate the key, confirm the branded API base, and establish merchant context before deeper flows.",
  },
  {
    family: "Search and recommendation",
    examples: "SDK searchProducts(...) and related recommendation workflows",
    path: "REST / SDK / MCP",
    summary: "Resolve products, offers, and merchant data through a structured commerce surface instead of crawling merchant sites.",
  },
  {
    family: "Cart validation",
    examples: "POST /agent/v1/cart/validate",
    path: "REST / SDK",
    summary: "Validate items and cart structure before checkout creation or deeper order flows.",
  },
  {
    family: "Checkout intents",
    examples: "POST /agent/v1/checkout/intents",
    path: "REST / SDK",
    summary: "Create merchant-native checkout flows that carry execution into payment-aware paths.",
  },
  {
    family: "Orders",
    examples: "POST /agent/v1/orders/create, GET /agent/v1/orders",
    path: "REST",
    summary: "Create and inspect order flows while keeping merchant systems in the execution loop.",
  },
  {
    family: "Order events and execution signals",
    examples: "GET /agent/v1/orders/events",
    path: "REST",
    summary: "Inspect timeline events and execution state instead of inferring outcomes from front-end surfaces alone.",
  },
  {
    family: "Webhooks",
    examples: "GET/PUT /agents/{agent_id}/webhooks/config and related delivery endpoints",
    path: "REST + portal-managed lifecycle",
    summary: "Subscribe to events, test delivery, verify signatures, and keep downstream systems aligned after execution begins.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Request Types | Pivota Agent Integration",
  description:
    "Public request-type inventory for the Pivota commerce layer, including search, checkout intents, orders, events, and webhooks across the merchant-native integration path.",
  path: routePaths.developersRequestTypes,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
  { name: "Request Types", path: routePaths.developersRequestTypes },
]);

export default function DevelopersRequestTypesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-request-types-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "Request Types" },
                ]}
              />

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Request types</p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Public request families for the commerce layer agents call.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  These are the main callable families already exposed through the current public
                  developer contract. They are intentionally grouped by builder workflow rather than
                  by every underlying internal route.
                </p>
              </div>

              <div className="section-frame overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-background/80">
                    <tr className="border-b border-border/70">
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Request family</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Examples</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Default path</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestFamilies.map((item) => (
                      <tr key={item.family} className="border-b border-border/60 align-top last:border-b-0">
                        <td className="px-6 py-5 text-sm font-medium text-foreground">{item.family}</td>
                        <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">{item.examples}</td>
                        <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">{item.path}</td>
                        <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">{item.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.developersFirstCall} className="text-primary hover:underline">
                  First call
                </Link>
                <Link href={routePaths.developersAuthWebhooks} className="text-primary hover:underline">
                  Auth & webhooks
                </Link>
                <Link href={routePaths.developersProtocols} className="inline-flex items-center text-primary hover:underline">
                  Protocols & compatibility
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
