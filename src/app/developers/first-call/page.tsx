import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, KeyRound, Webhook } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  developerLoginPath,
  developerSignupPath,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

// Order example is schema-checked, not a recorded transaction. Use confirmed test credentials.
const firstCallSteps = [
  "Create a dedicated production or test API key and keep it outside source control.",
  "Send a first authenticated request to confirm the branded API base and key both work.",
  "Create the first order or checkout flow using the same merchant-native contract.",
  "Configure a webhook destination, send a test event, and verify signature handling before promoting traffic.",
] as const;

const authSnippet = `curl https://api.pivota.cc/agent/v1/merchants \\
  -H "X-API-Key: YOUR_API_KEY"`;

const protocolSnippet = `curl "https://api.pivota.cc/agent/v1/merchants?scope=protocol&market=US" \\
  -H "X-API-Key: YOUR_API_KEY"`;

const quoteSnippet = `curl -X POST "https://api.pivota.cc/agent/v1/quotes/preview" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "merchant_id": "merch_...",
    "items": [{ "product_id": "prod_...", "variant_id": "var_...", "quantity": 1 }]
  }'`;

const orderSnippet = `curl -X POST "https://api.pivota.cc/agent/v1/orders/create" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "quote_id": "q_...",
    "merchant_id": "merch_...",
    "customer_email": "buyer@example.com",
    "shipping_address": {
      "name": "Test Buyer",
      "address_line1": "123 Test Street",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "US"
    },
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
  ogImage: "/og-developers.svg",
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

      <main id="main-content" className="overflow-hidden">
        <section className="marketing-hero relative">
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
                    The example below uses placeholder IDs and requires a confirmed sandbox merchant
                    and test payment credentials. It has been checked against OpenAPI, not executed.
                    Start with the branded
                    API base, authenticate with an API key, then validate the first order and
                    webhook loop before promoting traffic.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <a href={developerSignupPath}>
                        Get API access
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.developersAuthWebhooks}>Auth & webhooks</Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href={developerLoginPath} className="text-primary hover:underline">
                      Developer login
                    </a>
                    <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                      Agent Integration
                    </Link>
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
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The response lists the merchants integrated through the Pivota merchant portal that
                    your key can order from, and each{" "}
                    <code className="font-mono text-foreground">merchant_id</code> is what the order
                    call below takes. Add{" "}
                    <code className="font-mono text-foreground">?scope=mine</code> to list only
                    merchants you have already ordered from; that list starts empty. To find a{" "}
                    <code className="font-mono text-foreground">product_id</code>, search with{" "}
                    <code className="font-mono text-foreground">GET /agent/v1/products/search?query=...</code>.
                    Each result carries its{" "}
                    <code className="font-mono text-foreground">merchant_id</code>; only results whose{" "}
                    <code className="font-mono text-foreground">merchant_id</code> appears in this list
                    can be ordered through the order call. Results from merchants outside the portal
                    carry <code className="font-mono text-foreground">merchant_id</code>{" "}
                    <code className="font-mono text-foreground">&quot;external_seed&quot;</code> and the
                    merchant&apos;s <code className="font-mono text-foreground">external_domain</code>;
                    the order call refuses them.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Most merchants are not integrated through the Pivota merchant portal. List them with{" "}
                    <code className="font-mono text-foreground">?scope=protocol</code> and buy from them
                    through the UCP door, not the order call: see{" "}
                    <a href="#protocol-merchants" className="text-foreground underline underline-offset-4">
                      protocol merchants
                    </a>{" "}
                    below.
                  </p>
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
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Every order needs a live quote first. Request one, then pass its{" "}
                    <code className="font-mono text-foreground">quote_id</code> to order creation;
                    without it the order call returns{" "}
                    <code className="font-mono text-foreground">400 QUOTE_REQUIRED_BEFORE_PURCHASE</code>.
                  </p>
                  <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{quoteSnippet}</code>
                  </pre>
                  <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{orderSnippet}</code>
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    On this REST lane the API key is enough to quote and order.{" "}
                    <code className="font-mono text-foreground">X-Agent-User-JWT</code> is optional:
                    send it to tie the order to your signed-in end user. Checkout on the MCP and UCP
                    doors is different: it requires a verified buyer. The{" "}
                    <a href="https://api.pivota.cc/agent/docs/openapi.json" className="text-foreground underline underline-offset-4">
                      OpenAPI
                    </a>{" "}
                    lists the headers each endpoint accepts.
                  </p>
                </div>
              </div>

              <div id="protocol-merchants" className="section-frame p-6 sm:p-7">
                <h2 className="text-xl font-semibold tracking-tight">Protocol merchants</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Most merchants a buyer can purchase from through Pivota are reached through a
                  checkout protocol rather than a merchant-portal integration. List them with:
                </p>
                <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                  <code>{protocolSnippet}</code>
                </pre>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Each row is one{" "}
                  <code className="font-mono text-foreground">merchant_domain</code> in one{" "}
                  <code className="font-mono text-foreground">market</code>; there is no{" "}
                  <code className="font-mono text-foreground">merchant_id</code>, and these merchants
                  are not ordered through the order call above.{" "}
                  <code className="font-mono text-foreground">market</code> filters the list (for
                  example <code className="font-mono text-foreground">market=US</code>). The list is
                  rebuilt from recent checkout checks, so a merchant drops off when its last check
                  goes stale. Each row&apos;s{" "}
                  <code className="font-mono text-foreground">checkout_routes</code> says how a
                  purchase there completes:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                  <li>
                    <code className="font-mono text-foreground">storefront_checkout</code>: on the UCP
                    door (<code className="font-mono text-foreground">https://commerce.mcp.pivota.cc/ucp/mcp</code>),
                    find the product with <code className="font-mono text-foreground">search_catalog</code>,
                    then call <code className="font-mono text-foreground">create_checkout</code>. Checkout
                    needs a verified buyer (OAuth sign-in, or a user token from an issuer registered in
                    the agent portal); without one it returns{" "}
                    <code className="font-mono text-foreground">USER_AUTH_REQUIRED</code>. It returns a UCP
                    checkout with status{" "}
                    <code className="font-mono text-foreground">requires_escalation</code> and a{" "}
                    <code className="font-mono text-foreground">continue_url</code> on the
                    merchant&apos;s own storefront, where the buyer completes the purchase. Pivota
                    collects no payment on this route. When the merchant&apos;s own checkout can price the
                    cart, the totals are the merchant&apos;s and the link opens a prefilled cart;
                    otherwise the totals are the last observed catalog price and the link opens the
                    product page. Either way the buyer sees the final price on the merchant&apos;s site.
                    Send the buyer&apos;s market in{" "}
                    <code className="font-mono text-foreground">checkout.context.address_country</code>{" "}
                    (ISO 3166-1 alpha-2): without it, or when the merchant&apos;s checkout no longer takes
                    buyers in that market, the checkout is refused with{" "}
                    <code className="font-mono text-foreground">merchant_not_purchasable</code>. It is also
                    refused when the merchant reports the item out of stock.
                  </li>
                  <li>
                    <code className="font-mono text-foreground">agentic_checkout</code>: a payment
                    partner places the order and the buyer approves the card on the partner&apos;s
                    page. It is listed only where that lane is live for the merchant and market, and,
                    while the lane is in a limited pilot, only for keys in that pilot.
                  </li>
                </ul>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  <code className="font-mono text-foreground">merchant_checkout_accepts_cards</code>{" "}
                  reports whether the merchant&apos;s own checkout offered an on-site card when it was
                  last checked. It describes the merchant, not a Pivota payment capability.
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The list is rebuilt in the background. A{" "}
                  <code className="font-mono text-foreground">503</code> means it is being rebuilt and
                  carries a <code className="font-mono text-foreground">Retry-After</code> header;
                  wait that many seconds and retry. A{" "}
                  <code className="font-mono text-foreground">500</code> is also safe to retry after a
                  short backoff. Neither means the merchants are gone.
                </p>
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
