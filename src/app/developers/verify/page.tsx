import Link from "next/link";
import { ArrowRight, ChevronRight, Search, Sparkles, ShoppingCart, ShieldAlert } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  developerSignupPath,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

const profileSnippet = `curl https://commerce.mcp.pivota.cc/.well-known/ucp`;

const toolsSnippet = `curl -sX POST https://mcp.pivota.cc/mcp \\
  -H "content-type: application/json" \\
  -H "accept: application/json, text/event-stream" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`;

const searchSnippet = `{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{
  "name":"search_catalog",
  "arguments":{"query":"niacinamide serum"}}}`;

const intelSnippet = `{"name":"get_intel","arguments":{"product_id":"sig_..."}}

{"name":"get_alternatives","arguments":{"product_id":"sig_...","limit":5}}`;

const orderReadSnippet = `curl https://api.pivota.cc/agent/v2/orders/<order_id> \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

type Lane = {
  id: string;
  eyebrow: string;
  title: string;
  auth: string;
  summary: string;
  steps: { call: string; expect: string }[];
};

const lanes: Lane[] = [
  {
    id: "index",
    eyebrow: "Lane 1",
    title: "Commerce index",
    auth: "No authentication",
    summary:
      "The open tier. No signup, no key, no coordination — if your agent can make an HTTP request it can finish this lane.",
    steps: [
      {
        call: "GET /.well-known/ucp",
        expect:
          "200 with a ucp object listing six capabilities: catalog.search, catalog.lookup, checkout, identity_linking, fulfillment, and the vendor extension cc.pivota.insights.",
      },
      {
        call: "tools/list on mcp.pivota.cc",
        expect:
          "Exactly four tools: search_catalog, get_product, get_alternatives, get_intel. A different count means you are on a different door.",
      },
      {
        call: "search_catalog",
        expect:
          "Around ten products carrying product_id, brand, title, price as {amount, currency}, and availability. Budget 3–7s on a cold query; an identical repeat returns from cache in roughly 100ms.",
      },
    ],
  },
  {
    id: "decision",
    eyebrow: "Lane 2",
    title: "Decision layer",
    auth: "Open tier, or API key for the full surface",
    summary:
      "Search is a commodity. The reason to route through Pivota is that we hold grounded claims about products and can compare them.",
    steps: [
      {
        call: "get_intel",
        expect:
          "A review-grounded block: whether the product is reviewed, what it is best for, and why. Claims are attached to evidence rather than generated on demand.",
      },
      {
        call: "get_alternatives",
        expect:
          "An anchor plus alternatives, each carrying a price relationship to the anchor and a grade. This is substitution logic a search index cannot give you.",
      },
      {
        call: "recommend_products",
        expect:
          "A reasoned shortlist from a need in the buyer's own words rather than a product name. Runs a model — allow up to 30s on a cold call, and keep it off your critical path. A budget is enforced only when sent as a number nested at constraints.price_max; a top-level price_max or a prose budget is not enforced.",
      },
    ],
  },
  {
    id: "checkout",
    eyebrow: "Lane 3",
    title: "Checkout routing",
    auth: "API key and a buyer identity",
    summary:
      "Every call in this lane was executed against production with a third-party agent key. Response shapes below are what we observed, not what our internal docs claim.",
    steps: [
      {
        call: "initialize, then tools/list",
        expect:
          "200 on both. This door is stateless: no session header is returned and none is required on later calls. tools/list returns fourteen tools.",
      },
      {
        call: "get_product",
        expect:
          "The two things checkout needs: a merchant_id, and variants[] carrying real upstream variant ids. Keep both.",
      },
      {
        call: "create_checkout_session",
        expect:
          "status: ready_for_payment and a server-locked quote. Totals are in minor units on this response — a $33.00 order reads {subtotal: 2500, shipping: 800, total: 3300}. The total is authoritative; an agent cannot set it.",
      },
      {
        call: "create_payment_link",
        expect:
          "An order_id, status: awaiting_payment, and a hosted checkout_url carrying a 30-minute token. Supply a complete shipping address — name, address line 1, city, postal code and country together.",
      },
    ],
  },
];

const notFailures = [
  {
    signal: "401 on commerce.mcp.pivota.cc",
    meaning: "Correct. That door requires a key; only mcp.pivota.cc is open.",
  },
  {
    signal: "USER_AUTH_REQUIRED",
    meaning:
      "Correct. An agent key identifies your platform, not the person spending money. Checkout needs a buyer identity.",
  },
  {
    signal: "Refusal on a multi-variant product",
    meaning:
      "Deliberate. We refuse rather than guess a size or shade, because guessing prices a different cart than the buyer chose. Pass variant_id from get_product.",
  },
  {
    signal: "Refusal on a multi-seller cart",
    meaning:
      "Deliberate. Up to 50 line items across 25 products, but one seller per checkout. The refusal message tells you how to split it.",
  },
  {
    signal: "Result arrives as a JSON string in content[0].text",
    meaning:
      "Expected on the keyed door. Tool results there are a JSON document inside the text member rather than structuredContent — parse content[0].text.",
  },
  {
    signal: "Prices differ between doors",
    meaning:
      "Expected. The UCP dialect returns ISO minor units; the native door returns major. Do not divide by 100 yourself — currencies have different exponents.",
  },
];

const knownLimits = [
  "Catalog coverage is deepest in beauty and personal care. Off-vertical queries return confident but irrelevant results rather than empty sets, often without price fields — judge coverage by relevance, never by result count. If your evaluation needs a specific category, tell us early: that is a data lead time rather than a code change.",
  "get_order, request_after_sales and cancel_checkout_session appear in tools/list but are not yet wired through. The capability is live over REST: read order state with GET /agent/v2/orders/{order_id}.",
  "create_payment_link and recommend_products work on the native door and are absent from the UCP dialect. Variant selection is likewise native-only today.",
  "get_alternatives can return fewer alternatives than the requested limit, and alternative prices currently omit the currency field — read the anchor's currency until we add it.",
];

export const metadata = buildMarketingMetadata({
  title: "Verify Pivota | Agent Verification Path",
  description:
    "A three-lane verification path an agent can execute unattended against Pivota: commerce index, decision layer, then checkout routing — with the expected result for every call.",
  path: routePaths.developersVerify,
  ogImage: "/og-developers.svg",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
  { name: "Verify", path: routePaths.developersVerify },
]);

const laneIcons = [Search, Sparkles, ShoppingCart] as const;

export default function DevelopersVerifyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="developers-verify-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="marketing-hero relative">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "Verify" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Verify</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Point an agent at us and see for yourself.
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    Evaluating a commerce layer should not require a sales call or a signup. This is a
                    verification path an agent can run unattended, in three lanes, with the expected
                    result stated for every call. Lanes 1 and 2 need nothing from us at all.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <a href={developerSignupPath}>
                        Get API access
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.developersFirstCall}>First call</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm font-semibold tracking-tight">Start with no credentials</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The open tier answers immediately. Paste this and you have a live capability
                    profile — no key, no account.
                  </p>
                  <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{profileSnippet}</code>
                  </pre>
                  <pre className="mt-3 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                    <code>{toolsSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max space-y-8">
            {lanes.map((lane, laneIndex) => {
              const Icon = laneIcons[laneIndex] ?? Search;
              return (
                <div key={lane.id} className="section-frame p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-primary">{lane.eyebrow}</p>
                      <h2 className="text-xl font-semibold tracking-tight">{lane.title}</h2>
                    </div>
                    <span className="ml-auto rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      {lane.auth}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {lane.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    {lane.steps.map((step) => (
                      <div
                        key={step.call}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                      >
                        <p className="font-mono text-sm text-foreground">{step.call}</p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          <span className="font-semibold text-foreground">Expect: </span>
                          {step.expect}
                        </p>
                      </div>
                    ))}
                  </div>

                  {lane.id === "index" ? (
                    <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                      <code>{searchSnippet}</code>
                    </pre>
                  ) : null}
                  {lane.id === "decision" ? (
                    <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                      <code>{intelSnippet}</code>
                    </pre>
                  ) : null}
                  {lane.id === "checkout" ? (
                    <>
                      <p className="mt-6 text-sm leading-7 text-muted-foreground">
                        Read the order back over REST. Use this endpoint for order state rather than
                        the MCP tool — see the limits below.
                      </p>
                      <pre className="mt-3 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                        <code>{orderReadSnippet}</code>
                      </pre>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-max grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="section-frame p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Results that look like failures but are not
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                An unattended agent will hit several of these. Each one is correct behaviour, so
                check here before filing anything.
              </p>
              <div className="mt-6 space-y-3">
                {notFailures.map((item) => (
                  <div
                    key={item.signal}
                    className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                  >
                    <p className="font-mono text-sm text-foreground">{item.signal}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-frame p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">What we are still finishing</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Stated here rather than discovered by your agent. We would rather be useful than
                impressive.
              </p>
              <div className="mt-6 space-y-4">
                {knownLimits.map((limit) => (
                  <div key={limit} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">{limit}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Completing a payment on the hosted page is a coordinated step. Ask us for a sandbox
                pack and we will confirm the demo merchant is on test payment credentials before you
                drive that leg.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Checkout needs a buyer identity. That is one exchange.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                    An agent key identifies your platform. Spending money needs a verified buyer, and
                    we would rather you register your own issuer and mint tokens for your own users
                    than have us hand you credentials you would replace later.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href={routePaths.developersAuthWebhooks}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Auth &amp; webhooks
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href={routePaths.developersProtocols}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Protocols
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
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
