import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Cable,
  CheckCircle2,
  ChevronRight,
  Package,
} from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
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
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/schema";

const integrationModes = [
  {
    icon: Braces,
    title: "REST API",
    body: "The primary production path. Use API keys, direct requests, and webhooks for authenticated control-plane operations and execution flow.",
    supporting: "Default production integration path",
  },
  {
    icon: Package,
    title: "SDK",
    body: "A convenience wrapper over the same production REST API. Published package name: pivota-agent.",
    supporting: "Use when your runtime benefits from a client library",
  },
  {
    icon: Cable,
    title: "MCP",
    body: "A local orchestration and discovery surface for search and routing workflows. Published package name: pivota-mcp-server.",
    supporting: "Not a hosted replacement for the production REST API",
  },
] as const;

const requestFamilies = [
  {
    title: "Search and recommendation",
    body: "Query merchant data, resolve products and offers, and support downstream shopping workflows without crawling fragmented sites.",
  },
  {
    title: "Cart and checkout intents",
    body: "Validate item paths and create merchant-native checkout flows that carry execution forward.",
  },
  {
    title: "Orders and order status",
    body: "Create, inspect, and manage order flows while keeping merchant systems in control.",
  },
  {
    title: "Order events and execution signals",
    body: "Observe order lifecycle events and operational state instead of guessing from front-end surfaces alone.",
  },
  {
    title: "Webhooks and delivery health",
    body: "Configure destination URLs, subscribe to events, verify signatures, and inspect or retry delivery history.",
  },
  {
    title: "Merchant-native payment flow",
    body: "Route execution into payment-aware flows with write-back and sync rather than isolated checkout fragments.",
  },
] as const;

const firstCallSteps = [
  "Create a developer account and get a production or test API key.",
  "Send a first authenticated request against the branded API domain.",
  "Create the first order or checkout flow and confirm response shape.",
  "Configure webhook delivery and validate execution updates before promoting traffic.",
] as const;

const executionBoundaries = [
  "Pivota resolves structured commerce requests instead of forcing agents to crawl merchant pages.",
  "Merchant-native checkout begins when the executable checkout path is created or returned.",
  "Payment orchestration and downstream status sync stay connected to merchant systems.",
  "Write-back and post-purchase signals continue through APIs and webhooks after execution begins.",
] as const;

const proofPoints = [
  "OpenAPI is live on https://api.pivota.cc/openapi.json",
  "The branded API base is https://api.pivota.cc",
  "The published SDK package is pivota-agent",
  "The published MCP package is pivota-mcp-server",
  "Managed webhook receivers follow https://api.pivota.cc/agents/{agent_id}/webhooks/managed-inbox",
] as const;

const publicQuickstartSnippet = `curl https://api.pivota.cc/agent/v1/merchants \\
  -H "X-API-Key: YOUR_API_KEY"`;

const requestSnippet = `curl -X POST "https://api.pivota.cc/agent/v1/checkouts/intent" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "merchant_id": "merch_...",
    "items": [
      {
        "product_id": "prod_...",
        "variant_id": "var_...",
        "quantity": 1
      }
    ],
    "currency": "USD"
  }'`;

const responseSnippet = `{
  "status": "ready_for_checkout",
  "merchant_native_path": {
    "checkout_url": "https://checkout.pivota.cc/...",
    "rollout_stage": "merchant_native_checkout"
  },
  "next_action": "redirect_to_checkout",
  "events": ["order.created", "order.payment_attempted"]
}`;

const publicDocsItems = [
  "First call quickstart and branded API base",
  "Request families and example request shapes",
  "Auth model, webhook model, and execution boundaries",
  "Protocol positioning and merchant-onboarding dependency",
] as const;

const consoleItems = [
  "Create and revoke API keys",
  "Inspect usage, delivery history, and retries",
  "Manage webhook destinations and signing secrets",
  "Review order activity and account-specific operational state",
] as const;

export const metadata = buildMarketingMetadata({
  title: "Agent Integration | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Build against the merchant-native commerce layer agents call. Public guidance for REST, SDK, MCP, auth, webhooks, and execution across the Pivota integration surface.",
  path: routePaths.agentIntegration,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Agent Integration", path: routePaths.agentIntegration },
]);

const softwareJsonLd = buildSoftwareApplicationJsonLd({
  name: "Pivota Agent Integration",
  description:
    "Public integration hub for the merchant-native commerce layer agents call, including REST, SDK, MCP, auth, and webhook guidance.",
  path: routePaths.agentIntegration,
  featureList: [
    "REST API integration",
    "SDK quickstart",
    "MCP configuration guidance",
    "Webhook delivery and verification",
    "Execution across checkout, payment, and write-back",
  ],
});

export default function AgentIntegrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="agent-integration-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="agent-integration-software-jsonld" data={softwareJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Agent Integration" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Agent integration
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Build against the merchant path Pivota exposes on top of existing merchant stacks.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the builder surface for the merchant gateway that sits on top of
                      existing storefront, checkout, and payment systems.
                    </p>
                    <p className="mt-2">
                      Some merchants start with discovery, feeds, or link-out. When a merchant is
                      ready for deeper flows, builders use the REST path, SDK, or MCP to work with
                      checkout, orders, events, and webhooks.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <a href={developerSignupPath}>
                        Get API access
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.developersFirstCall}>View first call</Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.developersAuthWebhooks} className="text-primary hover:underline">
                      Auth & webhooks
                    </Link>
                    <Link href="/#contact" className="text-primary hover:underline">
                      Talk to us
                    </Link>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Merchant onboarding and rollout choice come first. This page describes the
                    builder surface that sits on top of that merchant path, whether the merchant is
                    starting with lighter discovery flows or deeper merchant-native checkout.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                      Merchant onboarding
                    </Link>
                    <Link href={routePaths.aiReadiness} className="text-primary hover:underline">
                      See what to fix first
                    </Link>
                    <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                      Merchant-native checkout
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Start in 4 steps
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Make the first call path obvious before login.
                  </h2>
                </div>
                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="section-frame px-6 py-6 sm:px-7">
                    <div className="space-y-3">
                      {firstCallSteps.map((step, index) => (
                        <div
                          key={step}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                              {index + 1}
                            </div>
                            <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/8 px-4 py-4 text-sm leading-7 text-foreground">
                      Test and production keys are supported. Validate the first authenticated
                      request and webhook loop before promoting traffic.
                    </div>
                  </div>

                  <div className="section-frame p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Public quickstart
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      Start with the branded REST path
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Use the public API base and the
                      {" "}
                      <code className="rounded bg-background px-1.5 py-1 font-mono text-xs text-foreground">
                        X-API-Key
                      </code>
                      {" "}
                      header to validate access before building deeper order or checkout flows.
                    </p>
                    <pre className="mt-5 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                      <code>{publicQuickstartSnippet}</code>
                    </pre>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm">
                      <a href={developerSignupPath} className="text-primary hover:underline">
                        Get API access
                      </a>
                      <Link href={routePaths.developersFirstCall} className="text-primary hover:underline">
                        View first call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Choose your integration mode
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    REST is the default. SDK and MCP sit on top.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {integrationModes.map((mode) => (
                    <article key={mode.title} className="section-frame px-5 py-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <mode.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight">{mode.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{mode.body}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-primary">
                        {mode.supporting}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What can be called today
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Start with the request families already proven in production.
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Not every merchant uses every request family on day one. Search,
                    recommendation, and lighter handoff paths may come before deeper checkout and
                    order flows.
                  </p>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Merchant-native checkout does not mean every agent surface completes checkout
                    fully inside chat. Depending on merchant readiness and the surface, execution
                    may continue through link-out or another merchant-controlled handoff while
                    staying in merchant-controlled systems.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {requestFamilies.map((family) => (
                    <article key={family.title} className="section-frame px-5 py-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {family.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {family.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Example request and response
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Show builders the execution shape, not just the category story.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                    Public docs should make the request contract visible before login so a builder
                    can understand the next action, the merchant-native path, and the event model
                    without guessing.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="section-frame p-6 sm:p-7">
                    <p className="text-sm font-semibold text-foreground">Request example</p>
                    <pre className="mt-4 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                      <code>{requestSnippet}</code>
                    </pre>
                  </div>
                  <div className="section-frame p-6 sm:p-7">
                    <p className="text-sm font-semibold text-foreground">Response example</p>
                    <pre className="mt-4 overflow-x-auto rounded-2xl border border-border/70 bg-background/80 p-4 text-sm text-foreground">
                      <code>{responseSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Execution boundaries
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Make the handoff and execution model explicit.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {executionBoundaries.map((item) => (
                    <div key={item} className="section-frame px-5 py-5 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      What stays public vs what is in the console
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Public docs for activation. Console for operational control.
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      Builders should be able to understand the contract, auth, and execution model
                      without login. Account-specific controls and telemetry stay in the developer
                      console.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                      <p className="text-sm font-semibold text-foreground">Visible without login</p>
                      <div className="mt-4 space-y-3">
                        {publicDocsItems.map((item) => (
                          <div key={item} className="text-sm leading-6 text-muted-foreground">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                      <p className="text-sm font-semibold text-foreground">Inside the developer console</p>
                      <div className="mt-4 space-y-3">
                        {consoleItems.map((item) => (
                          <div key={item} className="text-sm leading-6 text-muted-foreground">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Trust and proof
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Public contract, not just conceptual positioning.
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      The developer portal already validated the public API domain, published SDK
                      packages, MCP runtime, and managed webhook receiver pattern in production.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {proofPoints.map((item) => (
                      <div key={item} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4 text-sm leading-7 text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <Link href={routePaths.developersProtocols} className="text-primary hover:underline">
                    Protocols & compatibility
                  </Link>
                  <Link href={routePaths.developersRequestTypes} className="text-primary hover:underline">
                    Request types
                  </Link>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Ready to evaluate the callable surface directly?
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Start with API access and the first call, then move into request types, auth,
                      webhooks, and protocol positioning as the integration deepens.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href={developerSignupPath} className="text-primary hover:underline">
                      Get API access
                    </a>
                    <Link href={routePaths.developersFirstCall} className="inline-flex items-center text-primary hover:underline">
                      View first call
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link href="/#contact" className="text-primary hover:underline">
                      Talk to us
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
