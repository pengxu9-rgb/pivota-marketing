---
id: mcp-acp-ap2-overview
title: "What are MCP, ACP, AP2 and UCP, and which does Pivota support?"
description: Plain definitions of MCP, ACP, AP2 and UCP, and Pivota's support status for each as of October 2026, including the card-network agent programs it does not support.
date: 2025-11-14
author: Pivota Team
tags: [MCP, ACP, AP2, UCP, Standards]
ogImage: /og-developers.svg
updated: 2026-10-09
---

**Corrected 7 October 2026; support status updated 8 October 2026.** This revision replaces the earlier protocol definitions and removes unsupported payment and settlement claims. The original article was published on 14 November 2025.

Pivota provides a commerce decision and order execution layer over merchant systems. Pivota does not author any of the standards below, hold customer funds, or act as merchant of record.

## What the protocols mean

- **MCP — Model Context Protocol:** connects AI applications to tools and context. It is a tool interface, not a commerce settlement protocol. See the [official MCP introduction](https://modelcontextprotocol.io/introduction).
- **ACP — Agentic Commerce Protocol:** an open commerce interoperability standard developed by OpenAI and Stripe, covering checkout coordination and secure payment credential exchange. See [ACP](https://www.agenticcommerce.dev/).
- **AP2 — Agent Payments Protocol:** specifies verifiable authority and trust for delegated payments. See [AP2](https://ap2-protocol.org/).
- **UCP — Universal Commerce Protocol:** describes interoperable commerce capabilities that a seller can publish and an agent can discover. See [UCP](https://ucp.dev/).

## Pivota's support status (as of 8 October 2026)

- **MCP: live.** Four public read-only research tools (`search_catalog`, `get_product`, `get_alternatives`, `get_intel`) need no credentials. A keyed endpoint adds scoped capabilities such as `recommend_products`.
- **UCP: seller door live for discovery and catalog search.** Pivota publishes a seller discovery profile and the vendor extension [`cc.pivota.insights`](/ucp/insights). Checkout through the UCP door is limited: it needs OAuth buyer identity and merchant readiness.
- **ACP: internal beta.** Not a default public self-serve capability.
- **AP2: internal beta.** Using AP2 does not mean Pivota holds funds or processes payments; the merchant's payment providers do.
- **Visa Intelligent Commerce, Visa Trusted Agent Protocol and Mastercard Agent Pay: not supported.**

The [protocols and compatibility page](/developers/protocols) carries the same status and is updated when it changes.

## What a protocol listing does not prove

A capability advertisement or protocol name is not evidence of a completed purchase. Checkout requires the applicable API access, verified buyer identity, the exact variant and merchant readiness. A returned checkout URL or a session awaiting payment is not a paid order; confirm payment and order state through the supported contract, and treat fulfillment as a later event. The merchant and its payment providers handle the sale and funds flow. Persistent commerce identity requires separate explicit opt-in; API authentication alone does not enroll a buyer.

Protocol compatibility does not guarantee platform listing, distribution, payment acceptance or production checkout for every merchant.

## Start with a verifiable contract

Begin with the [public verification path](/developers/verify) and the [OpenAPI](https://api.pivota.cc/agent/docs/openapi.json). Payment testing requires coordinated sandbox credentials. For merchant and channel eligibility, refusal cases and attribution, read [Decisions and execution evidence](/decisions-and-execution). For why agents need structured interfaces at all, read [Why AI shopping agents need APIs, not crawlers](/blog/end-of-crawlers-agentic-commerce).
