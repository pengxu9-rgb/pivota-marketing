import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";

// The SPEC document for Pivota's UCP vendor capability `cc.pivota.insights`. Its URL is what the seller
// door's /.well-known/ucp profile publishes as the capability's `spec`; the JSON Schema it points at is
// /ucp/schemas/insights.json (a static file in /public). A UCP platform validating our profile dereferences
// both, and the profile builder refuses to advertise the capability unless both live on pivota.cc — so this
// page must stay at this path.

const CAPABILITY_ID = "cc.pivota.insights";
const SPEC_URL = "https://pivota.cc/ucp/insights";
const SCHEMA_URL = "https://pivota.cc/ucp/schemas/insights.json";
const DOOR = "https://commerce.mcp.pivota.cc/ucp/mcp";

export const metadata = buildMarketingMetadata({
  title: "cc.pivota.insights — UCP vendor capability | Pivota",
  description:
    "Specification for Pivota Insights, the UCP vendor capability that exposes Pivota's decision layer — alternatives, cross-merchant offers and reviewed product intelligence — to UCP platforms.",
  path: "/ucp/insights",
  ogImage: "/og-developers.svg",
});

const tools = [
  {
    name: "get_alternatives",
    summary:
      "Alternatives, related items and — only on request — dupes (cheaper similar products) for one product. Each signal carries the relation, similarity score, price comparison, why, tradeoffs, watchouts and graded evidence.",
    request: `{
  "meta": { "ucp-agent": { "profile": "https://your-agent.example/.well-known/ucp-agent" } },
  "insights": {
    "id": "sig_615cde705e4be2ea",
    "relation": "competitive_alternative",
    "include_dupes": false,
    "max_price_ratio": 1.0,
    "limit": 5
  }
}`,
    reads: [
      ["insights.id", "required — the Pivota product id from catalog.search / catalog.lookup"],
      ["insights.relation", "competitive_alternative | niche_specialist | related_product | dupe"],
      ["insights.include_dupes", "boolean; dupes are off unless asked for (or relation = dupe)"],
      ["insights.market", "market / locale hint"],
      ["insights.max_price_ratio", "cap candidate ÷ anchor price; 1.0 = equal or cheaper"],
      ["insights.limit", "1–20 (larger values are capped)"],
    ],
    response: "{ subject, signals[], metadata }",
  },
  {
    name: "get_offers",
    summary:
      "Cross-merchant offers for one product: price, availability, seller, attributed link. Real competition only when it exists — a single-offer product answers with its best_offer and no competing signals.",
    request: `{
  "meta": { "ucp-agent": { "profile": "https://your-agent.example/.well-known/ucp-agent" } },
  "insights": { "id": "sig_615cde705e4be2ea", "currency": "USD", "limit": 5 }
}`,
    reads: [
      ["insights.id", "required"],
      ["insights.currency", "ISO 4217 preference for the comparison"],
      ["insights.limit", "1–10 (larger values are capped)"],
    ],
    response: "{ subject, best_offer, signals[], metadata }",
  },
  {
    name: "get_intel",
    summary:
      "Pivota's reviewed decision intelligence for one product — why it stands out, who it is best for, its evidence profile — as one decision signal with cited, graded claims. Empty rather than fabricated when no reviewed intelligence exists.",
    request: `{
  "meta": { "ucp-agent": { "profile": "https://your-agent.example/.well-known/ucp-agent" } },
  "insights": { "id": "sig_615cde705e4be2ea" }
}`,
    reads: [["insights.id", "required"]],
    response: "{ subject, signals[0..1], metadata }",
  },
] as const;

export default function UcpInsightsSpecPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="marketing-hero relative">
          <div className="bg-site-grid absolute inset-0 opacity-15" />
          <div className="section-padding relative">
            <div className="container-max space-y-8">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration", href: routePaths.agentIntegration },
                  { label: "UCP · cc.pivota.insights" },
                ]}
              />

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">UCP vendor capability</p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                  <code className="font-mono">{CAPABILITY_ID}</code>
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  Pivota Insights is the decision layer behind Pivota&apos;s catalog: alternatives, cross-merchant
                  offers and reviewed product intelligence with cited evidence. This capability publishes it to
                  Universal Commerce Protocol platforms as three read-only tools on Pivota&apos;s UCP seller door,
                  beside the standard <code className="font-mono">dev.ucp.shopping.catalog.*</code> and{" "}
                  <code className="font-mono">checkout</code> capabilities.
                </p>
              </div>

              <dl className="section-frame grid gap-3 px-6 py-6 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-8">
                <dt className="text-muted-foreground">Capability id</dt>
                <dd className="font-mono">{CAPABILITY_ID}</dd>
                <dt className="text-muted-foreground">Version</dt>
                <dd className="font-mono">2026-08-19</dd>
                <dt className="text-muted-foreground">Spec</dt>
                <dd className="font-mono break-all">{SPEC_URL}</dd>
                <dt className="text-muted-foreground">Schema</dt>
                <dd className="font-mono break-all">
                  <a href={SCHEMA_URL} className="text-primary hover:underline">{SCHEMA_URL}</a>
                </dd>
                <dt className="text-muted-foreground">Transport</dt>
                <dd>
                  MCP (JSON-RPC over HTTPS) at <code className="font-mono break-all">{DOOR}</code> — the same
                  endpoint as the standard capabilities, negotiated from{" "}
                  <code className="font-mono">https://commerce.mcp.pivota.cc/.well-known/ucp</code>.
                </dd>
                <dt className="text-muted-foreground">Extends</dt>
                <dd>
                  None. A root vendor capability: the tools take a product id the platform already holds, so
                  pruning a parent never removes them.
                </dd>
                <dt className="text-muted-foreground">Auth</dt>
                <dd>
                  Same as the door: an agent API key from the Pivota developer portal (
                  <code className="font-mono">X-Agent-API-Key</code>) or an OAuth bearer token. No buyer identity
                  is needed — all three tools are read-only.
                </dd>
              </dl>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Wire shape</h2>
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  Every tool takes <code className="font-mono">{"{ meta, insights: { id, … } }"}</code>. The
                  product id is nested under <code className="font-mono">insights</code> — never a flat{" "}
                  <code className="font-mono">product_id</code> — following the UCP catalog convention where the
                  payload rides under one named object. <code className="font-mono">meta</code> is required on every
                  call, as on every UCP tool. Unknown members are refused (
                  <code className="font-mono">additionalProperties: false</code>). Responses are returned verbatim
                  as the JSON Schema describes; prices inside signals are in major units of the stated currency.
                  When you surface this layer, attribute it to Pivota (e.g. &ldquo;per Pivota Insights&rdquo;).
                </p>
              </div>

              <div className="space-y-6">
                {tools.map((tool) => (
                  <article key={tool.name} className="section-frame px-6 py-6">
                    <h2 className="text-xl font-semibold tracking-tight">
                      <code className="font-mono">{tool.name}</code>
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">{tool.summary}</p>
                    <div className="mt-4 grid gap-6 lg:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Request (tools/call arguments)</p>
                        <pre className="mt-2 overflow-x-auto rounded-xl border border-border/70 bg-background/70 p-4 text-xs leading-6">
                          <code>{tool.request}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Fields read</p>
                        <ul className="mt-2 space-y-2 text-sm">
                          {tool.reads.map(([field, meaning]) => (
                            <li key={field} className="grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-x-4">
                              <code className="font-mono text-foreground">{field}</code>
                              <span className="text-muted-foreground">{meaning}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Response</p>
                        <p className="mt-1 font-mono text-sm">{tool.response}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Exact shape: <code className="font-mono">$defs/{tool.name}_response</code> in the schema.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="section-frame px-6 py-8 sm:px-10">
                <h2 className="text-2xl font-semibold tracking-tight">Errors and guarantees</h2>
                <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                  <li>
                    Every <code className="font-mono">tools/call</code> answers HTTP 200; a refusal rides in the
                    JSON-RPC result as a tool error with a code and a message that names the field to fix
                    (e.g. <code className="font-mono">insights.id</code>).
                  </li>
                  <li>
                    Unknown product id → an empty result with <code className="font-mono">metadata.reason</code>,
                    or <code className="font-mono">UNKNOWN_PRODUCT_ID</code> when the door can say so.
                  </li>
                  <li>
                    Nothing is fabricated: no reviewed intelligence ⇒ <code className="font-mono">signals: []</code>;
                    one offer ⇒ <code className="font-mono">best_offer</code> only; dupes only when asked for.
                  </li>
                  <li>Read-only. These tools never create, mutate or charge anything.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                    Agent integration
                  </Link>
                  <a href="https://agents.pivota.cc" className="text-primary hover:underline">
                    Developer portal (get an API key)
                  </a>
                  <a href="https://ucp.dev/" className="text-primary hover:underline">
                    Universal Commerce Protocol
                  </a>
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
