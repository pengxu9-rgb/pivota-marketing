import { UserCheck, Building2, CreditCard, PieChart } from "lucide-react";
import workflowImage from "@/assets/workflow-steps.jpg";

const steps = [
  {
    icon: UserCheck,
    title: "Agent Registration",
    description: "AI-assisted verification process ensures quick and secure agent onboarding with automated KYC checks."
  },
  {
    icon: Building2,
    title: "Merchant Onboarding", 
    description: "Quick connection system integrates merchants with minimal setup and instant platform compatibility."
  },
  {
    icon: CreditCard,
    title: "Payment Flow",
    description: "Real-time, secure transactions with multi-layer encryption and instant settlement capabilities."
  },
  {
    icon: PieChart,
    title: "Reporting & Insights",
    description: "AI-powered dashboards provide clarity with predictive analytics and performance optimization."
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow-section" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes agent payment management effortless
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Workflow Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="flex gap-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-[var(--shadow-neon)] transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Workflow Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={workflowImage} 
                alt="Pivota workflow visualization showing the 4-step process" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            
            {/* Animated connections */}
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;