import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, KeyRound, Webhook } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const firstCallSteps = [
  "Create a dedicated production or test API key and keep it outside source control.",
  "Send a first authenticated request to confirm the branded API base and key both work.",
  "Create the first order or checkout flow using the same merchant-native contract.",
  "Configure a webhook destination, send a test event, and verify signature handling before promoting traffic.",
] as const;

const authSnippet = `curl https://api.pivota.cc/agent/v1/merchants \\
  -H "X-API-Key: YOUR_API_KEY"`;

const orderSnippet = `curl -X POST "https://api.pivota.cc/agent/v1/orders/create" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "merchant_id": "merch_...",
    "customer_email": "buyer@example.com",
    "items": [
      {
        "product_id": "prod_...",
        "variant_id": "var_...",
        "quantity": 1,
        "unit_price": "19.99",
        "subtotal": "19.99"
      }
    ]
  }'`;

export const metadata = buildMarketingMetadata({
  title: "First Call | Pivota Agent Integration",
  description:
    "Public quickstart for the first authenticated call, first order flow, and webhook validation path across the Pivota merchant-native commerce surface.",
  path: routePaths.developersFirstCall,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
  { name: "First Call", path: routePaths.developersFirstCall },
]);

export default function DevelopersFirstCallPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-first-call-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "First Call" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">First call</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Get from API key to first order flow without guessing the contract.
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    The public builder path should be obvious before login. Start with the branded
                    API base, authenticate with an API key, then validate the first order and
                    webhook loop before promoting traffic.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <a href="https://developer.pivota.cc/login">
                        Developer Login
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.developersAuthWebhooks}>Auth & webhooks</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <div className="space-y-3">
                    {firstCallSteps.map((step, index) => (
                      <div key={step} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="section-frame p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">First authenticated call</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Use the branded public API base and the <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">X-API-Key</code> header to verify the integration environment before building deeper order flows.
                  </p>
                  <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{authSnippet}</code>
                  </pre>
                </div>

                <div className="section-frame p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">First order path</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Move from authenticated requests into merchant-native execution by creating the
                    first order flow on the same API contract. Then inspect order events and
                    webhook delivery.
                  </p>
                  <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{orderSnippet}</code>
                  </pre>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Next: map request families, then wire auth and webhooks.
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Once the first call works, move into the callable surface inventory, then
                      finalize webhook delivery and signature verification.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.developersRequestTypes} className="inline-flex items-center text-primary hover:underline">
                      Request types
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link href={routePaths.developersAuthWebhooks} className="inline-flex items-center text-primary hover:underline">
                      Auth & webhooks
                      <WebhooksArrow />
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

function WebhooksArrow() {
  return <ChevronRight className="ml-1 h-4 w-4" />;
}
