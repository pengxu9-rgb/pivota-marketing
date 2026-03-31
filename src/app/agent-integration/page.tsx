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
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
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
  "Create or rotate an API key for the integration environment.",
  "Send a first authenticated request against the branded API domain.",
  "Create the first order or checkout flow and observe the response shape.",
  "Configure webhook delivery, send a test event, and validate signature handling.",
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
                    Build against a merchant-native commerce layer, not fragmented merchant sites.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the commerce layer that agents call for recommendations,
                      merchant-native checkout, payments, and order write-back.
                    </p>
                    <p className="mt-2">
                      External builders should start with the default REST path, then use the SDK
                      or MCP only where those surfaces improve integration ergonomics.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.developersFirstCall}>
                        View first call
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Merchants optimize readiness upstream during onboarding. Agent Integration is
                    the public builder bridge that explains how downstream LLM and agent calls then
                    route through a cleaner, more executable merchant-native path.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                      Merchant onboarding
                    </Link>
                    <Link href={routePaths.aiReadiness} className="text-primary hover:underline">
                      Readiness
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
                    First-call path
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    The integration model should be obvious in one screen.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                    The authenticated developer console already proves the operational path. Public
                    docs should make that same path discoverable before login.
                  </p>
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
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.developersFirstCall} className="text-primary hover:underline">
                      First call
                    </Link>
                    <Link href={routePaths.developersAuthWebhooks} className="text-primary hover:underline">
                      Auth & webhooks
                    </Link>
                    <Link href={routePaths.developersRequestTypes} className="text-primary hover:underline">
                      Request types
                    </Link>
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
                      Start with the first call, then move into request types, auth, webhooks, and
                      protocol positioning as the integration deepens.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
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
