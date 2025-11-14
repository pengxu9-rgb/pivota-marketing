"use client";

import { Shield, Zap, Puzzle, BarChart3, Brain } from "lucide-react";
import { usePathname } from "next/navigation";

const FeaturesSection = () => {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");

  const features = isZh
    ? [
        {
          icon: Zap,
          title: "极速且安全的支付",
          description: "闪电般的交易速度，银行级安全协议与实时处理。",
        },
        {
          icon: Puzzle,
          title: "商家快速接入",
          description: "精简的接入流程，数分钟即可上线使用。",
        },
        {
          icon: Shield,
          title: "多平台集成",
          description: "无缝对接 Shopify、Wix、Shopee 等主流电商平台。",
        },
        {
          icon: BarChart3,
          title: "实时分析与报表",
          description: "可视化面板提供实时数据洞察与详尽交易报表。",
        },
        {
          icon: Brain,
          title: "AI 驱动的业务洞察",
          description: "机器学习算法提供可执行建议，优化你的支付流程。",
        },
      ]
    : [
        {
          icon: Zap,
          title: "Fast & Secure Payments",
          description: "Lightning-fast transactions with bank-level security protocols and real-time processing.",
        },
        {
          icon: Puzzle,
          title: "Easy Merchant Onboarding",
          description: "Streamlined onboarding process that gets merchants up and running in minutes.",
        },
        {
          icon: Shield,
          title: "Multi-Platform Integration",
          description: "Seamlessly connects with Shopify, Wix, Shopee and major e-commerce platforms.",
        },
        {
          icon: BarChart3,
          title: "Real-Time Analytics & Reporting",
          description: "Comprehensive dashboards with live data insights and detailed transaction reporting.",
        },
        {
          icon: Brain,
          title: "AI-Driven Business Insights",
          description: "Machine learning algorithms provide actionable insights to optimize your payment flows.",
        },
      ];
  return (
    <section id="features-section" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            {isZh ? (
              <>为什么选择 <span className="text-gradient-primary">Pivota</span>？</>
            ) : (
              <>Why <span className="text-gradient-primary">Pivota</span>?</>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isZh
              ? "了解让 Pivota 脱颖而出的核心能力"
              : "Discover the features that make Pivota the future of agent payment solutions"}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-feature group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-neon)] transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
