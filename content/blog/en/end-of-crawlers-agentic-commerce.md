---
id: end-of-crawlers
title: "Why AI shopping agents need APIs, not crawlers"
description: Why AI shopping agents need structured product, offer and checkout interfaces instead of scraped storefront pages, and what a structured interface still cannot guarantee.
date: 2025-11-14
author: "Pivota Engineering"
tags: ["Agentic Commerce", "Crawlers", "APIs"]
ogImage: /og-developers.svg
updated: 2026-10-09
---

**Corrected 7 October 2026; protocol definitions moved on 8 October 2026.** This revision removes unsupported payment and settlement claims and moves protocol definitions to [What are MCP, ACP, AP2 and UCP?](/blog/what-are-mcp-acp-and-ap2). The original article was published on 14 November 2025.

Pivota provides a commerce decision and order execution layer over merchant systems. Its Commerce Index supplies product and offer context; supported integrations connect agent intent to merchant-controlled execution. Pivota does not hold customer funds or act as merchant of record.

## What a crawler sees, and what it misses

A crawler reads the page a person would see. That is often enough to name a product, but not enough to buy the right one. A scraped page may not tell an agent:

- which exact variant (size, shade or bundle) the shopper means, and whether that variant is in stock;
- which seller is offering it, and which promotion actually applies to this shopper;
- whether the price on the page is still current;
- whether the merchant allows an agent to start checkout, or only to link out.

When an agent guesses at any of these, the shopper can land on the wrong item, a price that has changed, or a checkout the merchant never offered to agents.

## What structured interfaces add

Structured interfaces make those inputs inspectable. An agent can ask for an exact product and variant, see which offer it is reading, and get an explicit answer when an action is not supported, instead of inferring it from page layout. The merchant decides what is exposed and which paths an agent may use.

## What they still cannot guarantee

A structured interface is not a guarantee. Price, stock, coverage and variant selection still need freshness checks. Permissions still need checking before any action. The agent still needs a safe fallback when the merchant cannot support the request. Reviewed product intelligence can be absent; an empty result is not permission to invent an answer.

Scraping is not universally obsolete either. Choose an interface based on the evidence it returns and the contract it supports.

## Where Pivota fits

Public read-only research is available through four MCP tools: `search_catalog`, `get_product`, `get_alternatives` and `get_intel`. Coverage is strongest in beauty and personal care.

Checkout is a separate step with its own requirements, and the merchant and its payment providers handle the sale and funds flow.

For what MCP, ACP, AP2 and UCP mean, and which of them Pivota supports today, read [What are MCP, ACP, AP2 and UCP?](/blog/what-are-mcp-acp-and-ap2)

## Start with a verifiable contract

Begin with the [public verification path](/developers/verify), then inspect the [OpenAPI](https://api.pivota.cc/agent/docs/openapi.json). For merchant and channel eligibility, refusal cases and attribution, read [Decisions and execution evidence](/decisions-and-execution).
