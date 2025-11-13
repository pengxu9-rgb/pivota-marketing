"use client";

import { usePathname } from "next/navigation";

const PartnersSection = () => {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");
  const partners = [
    { name: "Shopify", logo: "🛍️" },
    { name: "Wix", logo: "🌐" },
    { name: "Shopee", logo: "🛒" },
    { name: isZh ? "银行合作" : "Bank Partners", logo: "🏦" },
    { name: isZh ? "支付网络" : "Payment Networks", logo: "💳" },
    { name: isZh ? "全球集成" : "Global Integrations", logo: "🌍" }
  ];

  return (
    <section id="partners-section" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            {isZh ? (
              <>获得<span className="text-gradient-primary">领先平台</span>的信任</>
            ) : (
              <>Trusted by <span className="text-gradient-primary">Leading Platforms</span></>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isZh ? "无缝对接你已经在用的平台" : "Seamlessly integrate with the platforms your business already uses"}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-neon)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {isZh ? (
              <>
                已支持 <span className="text-primary font-semibold">50+</span> 集成，仍在持续增长
              </>
            ) : (
              <>
                <span className="text-primary font-semibold">50+</span> integrations and growing
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
