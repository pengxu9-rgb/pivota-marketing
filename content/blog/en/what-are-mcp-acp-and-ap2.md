---
id: mcp-acp-ap2-overview
title: What are MCP, ACP and AP2?
description: A clear overview of MCP (Model Context Protocol), ACP (Agentic Commerce Protocol), and AP2 (Agent Payments Protocol) and how they work together.
date: 2025-11-14
author: Pivota Team
tags: [MCP, ACP, AP2, Standards]
ogImage: /og-developers.svg
---

# What are MCP, ACP, and AP2?

### A Developer's Guide to Integrating Pivota's Agentic Commerce API

In the emerging world of agentic commerce, developers keep running into three acronyms: **MCP**, **ACP**, and **AP2**.

If you’re building AI agents that can buy, sell, or handle transactions autonomously, these three protocols are the backbone of how Pivota helps you:

- Connect with merchants
- Process payments
- Build trust across the network

Let’s break down what each of them does, why they exist, and how you can use them in your next agentic app or integration.

⸻

## 1. Why Agentic Commerce Needs New Protocols

Before we unpack the acronyms, it helps to look at the problem.

Traditional e-commerce APIs were built for humans:

- A human logs in
- Fills a cart
- Clicks “buy”

But AI agents don’t behave like that. They:

- Shop across multiple merchants automatically
- Need structured access to product catalogs, prices, and availability
- Make payments programmatically without breaking compliance
- Require verifiable trust between **Agent ↔ Merchant ↔ Payment system**

This is what Pivota’s **Agentic Commerce Protocols** solve.

They form a neutral **“clearing layer”** where:

- Agents can safely act on behalf of users
- Merchants can verify, accept, and settle automated orders
- Both sides avoid a mess of one-off, custom integrations

⸻

## 2. MCP: Merchant Commerce Protocol

**MCP** is the foundation — it defines how merchants expose their data and services in an agent-friendly way.

Think of MCP as **“OpenAPI for stores.”**

With MCP, merchants standardize how agents access things like:

- Product metadata (name, price, SKU, images, inventory)
- Checkout and fulfillment endpoints
- Return policies, ratings, and other decision signals

From an agent’s point of view, that means predictable, clean endpoints such as:

```
GET /mcp/products?q=sneakers
POST /mcp/order

```

…without worrying about whether the merchant runs on Shopify, WooCommerce, or a custom backend.

**Why MCP matters**

MCP turns merchants into **API-first, agent-ready sellers** — ready to be:

- Crawled
- Indexed
- Transacted with

by the new generation of AI agents.

⸻

## 3. ACP: Agent Commerce Protocol

If MCP is how **merchants** speak, **ACP** is how **agents** introduce themselves and act.

**ACP (Agent Commerce Protocol)** defines the handshake between Agents and Merchants, covering:

- **Authentication & identity** – Who is the agent acting for?
- **Permission scope** – Can this agent place an order, or only browse?
- **Commission & attribution** – Who gets credit for the sale?
- **Transparent reporting** – What shows up in the merchant’s dashboard?

In simple terms, ACP lets the agent tell the merchant:

> “I’m an authorized Agent acting on behalf of a verified user.
> 
> 
> Here’s the signed order intent and the wallet to charge.”
> 

For developers, ACP is your **blueprint for building a compliant, trustworthy agent** that merchants are willing to accept orders from.

⸻

## 4. AP2: Agent Payment Protocol

The last piece is **AP2 (Agent Payment Protocol)** — this is where the **money actually moves**.

While MCP and ACP define **how commerce is communicated**, AP2 defines **how payments are settled**.

Pivota’s AP2 layer can route over multiple rails, including:

- Traditional card and PSP networks
- Banking APIs (ACH, SEPA, Faster Payments, etc.)
- Stablecoin-based settlement for instant, low-cost transfers

Agents can:

- Pay merchants directly (on behalf of users) using AP2 endpoints, or
- Escrow funds until order fulfillment is confirmed

**Example AP2 flow:**

> Agent → Pivota Wallet → Merchant PSP / Bank Account

Each step is **verifiable**, **auditable**, and **programmable**.

You integrate with Pivota once, and:

- Support multiple payment methods
- Operate across currencies and regions
- Avoid building a payment system from scratch

⸻

## 5. Putting It All Together: How Integration Works

When you integrate with Pivota’s Agentic Commerce API, the three protocols work together like this:

1. **Discovery (MCP)**
    
    The agent fetches standardized product data from merchants.
    
2. **Negotiation (ACP)**
    
    The agent authenticates, obtains permissions, and prepares a signed order intent.
    
3. **Settlement (AP2)**
    
    The payment is executed, cleared, and confirmed — potentially across borders and currencies.
    

That’s the full agentic loop:

> discover → transact → settle
> 

…all in an open, interoperable format.

⸻

## 6. Why This Matters for Developers

Today, agentic commerce suffers from an **“m × n” integration problem**:

- Every Agent needs to integrate with every Merchant
- Every Merchant needs to support multiple Agent behaviors

Pivota removes that by acting as a **clearing layer**:

- Agents integrate once with Pivota
- Merchants integrate once with Pivota
- Both sides instantly become interoperable

For you, that means:

- Faster onboarding for new agents and merchants
- Consistent data and payment handling
- Lower integration and maintenance cost
- Built-in compliance and trust primitives

In short: **you integrate once, and trade with the whole network.**

⸻

## 7. Getting Started

If you’re ready to make your AI agent truly transactional:

1. **Sign up for Pivota Developer Access**
    
    Visit the Pivota developers page at pivota.cc/developers.
    
2. **Explore the sandbox**
    
    Try out MCP and ACP endpoints with test merchants and sample catalogs.
    
3. **Implement AP2**
    
    Wire up payment flows and test cross-border and multi-rail settlement.
    

Once your agent speaks these three protocols, it can **browse, buy, and pay** across the agentic web — securely and autonomously.

⸻

## Final Thought

Agentic commerce isn’t just about letting AIs “go shopping.”

It’s about giving every autonomous system access to a **trusted, programmable economy**.

With **MCP**, **ACP**, and **AP2**, Pivota is building that **language layer for the internet of agents** — so your software can not only understand the world, but also **participate in it economically**.
