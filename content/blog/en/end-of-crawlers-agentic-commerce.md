---
id: end-of-crawlers
title: "Why merchant gateways need APIs instead of crawlers | Pivota"
description: Correct protocol definitions, current Pivota availability, and merchant-controlled funds flow.
date: 2025-11-14
author: "Pivota Engineering"
tags: ["MCP", "ACP", "AP2", "Agentic Commerce", "Crawlers"]
ogImage: /og-developers.svg
updated: 2026-10-07
---

**Corrected 7 October 2026.** This revision replaces the earlier protocol definitions and removes unsupported payment and settlement claims. The original article was published on 14 November 2025.

Pivota provides a commerce decision and execution layer over merchant systems. Its Commerce Index supplies product and offer context; supported integrations connect agent intent to merchant-controlled execution. Pivota does not author the standards below, hold customer funds, or act as merchant of record.

## Why structured interfaces help

A page scrape may identify a product without resolving the exact variant, seller, promotion or permitted checkout path. Structured interfaces make these inputs inspectable. They still require freshness checks, permission checks and a safe fallback when the merchant cannot support the requested action. Scraping is not universally obsolete; choose an interface based on its evidence and supported contract.

## What the protocols mean

- **MCP — Model Context Protocol:** connects AI applications to tools and context. It is a tool interface, not a commerce settlement protocol. See the [official MCP introduction](https://modelcontextprotocol.io/introduction).
- **ACP — Agentic Commerce Protocol:** an open commerce interoperability standard developed by OpenAI and Stripe, covering checkout coordination and secure payment credential exchange. Pivota's ACP workflows are **internal beta**, not default public self-serve capabilities. See [ACP](https://www.agenticcommerce.dev/).
- **AP2 — Agent Payments Protocol:** specifies verifiable authority and trust for delegated payments. It does not make Pivota a clearing house, escrow service or payment processor. Pivota's AP2 workflows are **internal beta**. See [AP2](https://ap2-protocol.org/).
- **UCP — Universal Commerce Protocol:** describes interoperable commerce capabilities. Pivota publishes a seller discovery profile and the vendor extension `cc.pivota.insights`. A capability advertisement is not evidence of a completed purchase. See [UCP](https://ucp.dev/) and [Pivota Insights](/ucp/insights).

## Data, decisions and execution have different boundaries

Structured product data can reduce ambiguity compared with extracting a storefront page, but price, stock, coverage and variant selection still need verification. Public read-only research is available through `search_catalog`, `get_product`, `get_alternatives` and `get_intel`. Reviewed intelligence can be absent; coverage is strongest in beauty and personal care. An empty result is not permission to invent an answer.

Checkout requires the applicable API access, verified buyer identity, exact variant and merchant readiness. A returned checkout URL or a session awaiting payment is not a paid order. Confirm payment and order state through the supported contract; fulfillment is a later event. The merchant and its payment providers handle the sale and funds flow. Persistent commerce identity requires separate explicit opt-in; API authentication alone does not enroll a buyer.

## Start with a verifiable contract

Begin with the [public verification path](/developers/verify), then inspect the [current compatibility matrix](/developers/protocols) and [OpenAPI](https://api.pivota.cc/agent/docs/openapi.json). Payment testing requires coordinated sandbox credentials. Protocol compatibility does not guarantee platform listing, distribution, payment acceptance or production checkout for every merchant.

For merchant/channel eligibility, refusal cases and attribution, read [Decisions and execution evidence](/decisions-and-execution).
