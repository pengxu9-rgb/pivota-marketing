---
id: mcp-acp-ap2-overview
title: MCP、ACP、AP2 是什么？
description: 正确的协议名称、Pivota 当前能力范围与商家控制的资金流。
date: 2025-11-14
author: Pivota 团队
ogImage: /og-developers-zh.svg
updated: 2026-10-07
---

**2026 年 10 月 7 日更正。** 本文替换了旧版协议定义，并删除未经证实的支付、清算和结算能力描述。原文发表于 2025 年 11 月 14 日。

Pivota 在商家现有系统之上提供商业决策与执行层。Commerce Index 提供商品和报价信息；受支持的集成把智能体意图连接到商家控制的执行路径。Pivota 不制定下列协议，不持有客户资金，也不担任交易商户（merchant of record）。

## 协议的正确名称与范围

- **MCP — Model Context Protocol（模型上下文协议）**：连接 AI 应用与工具、上下文，不是商业结算协议。[官方说明](https://modelcontextprotocol.io/introduction)。
- **ACP — Agentic Commerce Protocol**：由 OpenAI 和 Stripe 开发的开放商业互操作标准，协调结账与安全支付凭证交换。Pivota 的 ACP 工作流仍为**内部测试**，不是默认公开自助能力。[官方说明](https://www.agenticcommerce.dev/)。
- **AP2 — Agent Payments Protocol**：提供委托支付的可验证授权与信任机制，不意味着 Pivota 提供清算、托管或支付处理服务。Pivota 的 AP2 工作流仍为**内部测试**。[官方说明](https://ap2-protocol.org/)。
- **UCP — Universal Commerce Protocol**：描述可互操作的商业能力。Pivota 发布卖方发现配置与 `cc.pivota.insights` 扩展；能力声明不等于已完成购买。[UCP](https://ucp.dev/) 与 [Pivota Insights](/ucp/insights)。

## 区分查询、决策和交易结果

公开只读工具包括 `search_catalog`、`get_product`、`get_alternatives` 和 `get_intel`。商品覆盖以美妆与个人护理为主；审核过的情报可能不存在。价格、库存与具体变体需要核实，不能根据空结果编造答案。

结账需要相应接口权限、买家身份、准确变体与商家就绪条件。返回结账链接或待付款会话并不证明订单已付款，更不证明履约。商家与其支付服务商负责销售与资金流。持久商业身份必须单独明确选择加入；接口认证不等于用户同意建立持久身份。

## 从可验证接口开始

查看[公开验证路径](/developers/verify)、[当前兼容性矩阵](/developers/protocols)与 [OpenAPI](https://api.pivota.cc/agent/docs/openapi.json)。支付测试需要协调确认的沙盒凭证。采用协议不保证平台收录、流量、支付成功或所有商家的生产结账。
