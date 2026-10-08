---
id: mcp-acp-ap2-overview
title: MCP、ACP、AP2 和 UCP 是什么？Pivota 支持哪些？
description: MCP、ACP、AP2 与 UCP 的简明定义，以及截至 2026 年 10 月 Pivota 对每项协议的支持情况，包括尚不支持的卡组织智能体计划。
date: 2025-11-14
author: Pivota 团队
ogImage: /og-developers-zh.svg
updated: 2026-10-08
---

**2026 年 10 月 7 日更正；10 月 8 日更新支持状态。** 本文替换了旧版协议定义，并删除未经证实的支付和结算能力描述。原文发表于 2025 年 11 月 14 日。

Pivota 在商家现有系统之上提供商业决策与执行层。Pivota 不制定下列任何标准，不持有客户资金，也不担任记录商户（merchant of record）。

## 协议的正确名称与范围

- **MCP — Model Context Protocol（模型上下文协议）**：连接 AI 应用与工具、上下文，不是商业结算协议。[官方说明](https://modelcontextprotocol.io/introduction)。
- **ACP — Agentic Commerce Protocol**：由 OpenAI 和 Stripe 开发的开放商业互操作标准，协调结账与安全支付凭证交换。[官方说明](https://www.agenticcommerce.dev/)。
- **AP2 — Agent Payments Protocol**：为委托支付提供可验证的授权与信任机制。[官方说明](https://ap2-protocol.org/)。
- **UCP — Universal Commerce Protocol**：描述卖方可以发布、智能体可以发现的可互操作商业能力。[UCP](https://ucp.dev/)。

## Pivota 的支持状态（截至 2026 年 10 月 8 日）

- **MCP：已上线。** 四个公开只读研究工具（`search_catalog`、`get_product`、`get_alternatives`、`get_intel`）无需凭证。需要密钥的端点提供有范围限制的能力，例如 `recommend_products`。
- **UCP：卖方入口已上线，支持发现与目录搜索。** Pivota 发布卖方发现配置与供应商扩展 [`cc.pivota.insights`](/ucp/insights)。通过 UCP 入口结账的能力有限：需要 OAuth 买家身份与商家就绪条件。
- **ACP：内部测试。** 不是默认公开自助能力。
- **AP2：内部测试。** 使用 AP2 不意味着 Pivota 持有资金或处理支付；这些由商家的支付服务商负责。
- **Visa Intelligent Commerce、Visa Trusted Agent Protocol 与 Mastercard Agent Pay：不支持。**

[协议与兼容性页面](/developers/protocols)列出相同状态，并会在变化时更新。

## 协议声明不能证明什么

能力声明或协议名称不等于已完成购买。结账需要相应接口权限、经过验证的买家身份、准确变体与商家就绪条件。返回结账链接或待付款会话并不证明订单已付款，更不证明履约；请通过受支持的契约确认付款与订单状态。商家与其支付服务商负责销售与资金流。持久商业身份必须单独明确选择加入；接口认证不等于用户同意建立持久身份。

采用协议不保证平台收录、流量、支付成功或所有商家的生产结账。

## 从可验证接口开始

查看[公开验证路径](/developers/verify)与 [OpenAPI](https://api.pivota.cc/agent/docs/openapi.json)。支付测试需要协调确认的沙盒凭证。关于商家与渠道资格、拒绝情形和归因，请阅读[决策与执行证据](/decisions-and-execution)。关于智能体为何需要结构化接口，请阅读[《为什么商家网关需要 API，而不是爬虫》](/blog/end-of-crawlers-agentic-commerce)。
