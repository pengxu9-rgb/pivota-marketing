"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import logoImage from "@/assets/pacifico-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "Why Pivota", href: "#features-section" },
    { text: "How It Works", href: "#workflow-section" },
    { text: "Partners", href: "#partners-section" },
    { text: "Case Studies", href: "#testimonials-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
          
          {/* Network lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(170 100% 50%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(170 100% 50%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(170 100% 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(3)].map((_, i) => (
              <line
                key={i}
                x1={`${i * 30}%`}
                y1="0%"
                x2={`${(i + 1) * 35}%`}
                y2="100%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 1}s` }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/10' 
            : 'bg-background/60 backdrop-blur-md'
        }`}
      >
        {/* Glow trail effect */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}
          >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none"></div>
        </div>

        <nav className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection("#home")}
            >
              <img src={logoImage.src} alt="Pacifico Logo" className="w-8 h-8 rounded-lg group-hover:shadow-[var(--shadow-neon)] transition-all duration-300" />
              <span className="text-2xl font-bold text-gradient-primary">Pivota</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.text}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-secondary hover:text-primary transition-all duration-300 font-medium group"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10"></span>
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection("#demo-section")}
                className="btn-hero animate-glow"
              >
                Book a Demo
              </Button>

              <Button 
                onClick={() => window.location.href = 'https://agents.pivota.cc/login'}
                variant="outline"
                className="group relative overflow-hidden border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Agent Login
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </Button>

              <Button 
                onClick={() => window.location.href = 'https://merchant.pivota.cc/login'}
                variant="outline"
                className="group relative overflow-hidden border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Merchant Login
                <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-muted/20 hover:bg-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2 border-t border/30">
              {navLinks.map((link) => (
                <button
                  key={link.text}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
                >
                  {link.text}
                </button>
              ))}
              
              <div className="px-4 pt-2 space-y-2">
                <Button 
                  onClick={() => scrollToSection("#demo-section")}
                  className="btn-hero w-full"
                >
                  Book a Demo
                </Button>
                
                <Button 
                  onClick={() => window.location.href = 'https://agents.pivota.cc/login'}
                  variant="outline"
                  className="w-full group relative overflow-hidden border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Agent Login
                </Button>

                <Button 
                  onClick={() => window.location.href = 'https://merchant.pivota.cc/login'}
                  variant="outline"
                  className="w-full group relative overflow-hidden border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Merchant Login
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;