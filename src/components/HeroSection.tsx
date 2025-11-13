"use client";

import { Button } from "@/components/ui/button";
import { Bot, Store, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Agentic Commerce.{" "}
                <span className="text-gradient-primary">Unified.</span>{" "}
                <span className="text-gradient-primary">Scalable.</span>
              </h1>
               <p className="text-xl text-muted-foreground max-w-lg">
                  Empowering AI agents and merchants to transact seamlessly across the globe.
               </p>
            </div>
            
            {/* Two Entry Points */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {/* For Agents */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 bg-card p-6 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">For AI Agents</h3>
                      <p className="text-sm text-muted-foreground">Developers & Integrators</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Integrate payment infrastructure in minutes with our unified API
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-hero group"
                    onClick={() => window.location.href = 'https://agents.pivota.cc/signup'}
                  >
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <button
                    onClick={() => window.location.href = 'https://agents.pivota.cc/login'}
                    className="w-full mt-2 text-sm text-primary hover:underline"
                  >
                    Already have an account? Sign in
                  </button>
                </div>
              </div>

              {/* For Merchants */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 bg-card p-6 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Store className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">For Merchants</h3>
                      <p className="text-sm text-muted-foreground">Brands & Retailers</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open your store to the AI economy and reach new customers
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-hero group bg-accent hover:bg-accent/90"
                    onClick={() => window.location.href = 'https://merchant.pivota.cc/signup'}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <button
                    onClick={() => window.location.href = 'https://merchant.pivota.cc/login'}
                    className="w-full mt-2 text-sm text-accent hover:underline"
                  >
                    Already onboarded? Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-float">
              <img 
                src={heroImage.src} 
                alt="Futuristic Pivota dashboard showing agent payment network flows" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
