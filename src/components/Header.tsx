"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import logoImage from "@/assets/pacifico-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");
  const isLandingPage = !pathname || pathname === "/" || pathname === "/zh" || pathname === "/zh/";

  const navLinks = useMemo(
    () =>
      !isLandingPage
        ? []
        : isZh
        ? [
            { text: "首页", href: "#home" },
            { text: "为什么选择 Pivota", href: "#features-section" },
            { text: "工作原理", href: "#workflow-section" },
            { text: "合作伙伴", href: "#partners-section" },
            { text: "案例研究", href: "#testimonials-section" },
          ]
        : [
            { text: "Home", href: "#home" },
            { text: "Why Pivota", href: "#features-section" },
            { text: "How It Works", href: "#workflow-section" },
            { text: "Partners", href: "#partners-section" },
            { text: "Case Studies", href: "#testimonials-section" },
          ],
    [isZh, isLandingPage],
  );

  const localeToggleHref = useMemo(() => {
    if (!pathname) return "/zh/";
    if (pathname === "/") return "/zh/";
    if (pathname.startsWith("/zh")) {
      const rest = pathname.slice(3);
      return rest.length ? rest : "/";
    }
    return pathname === "/" ? "/zh/" : `/zh${pathname}`;
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Build a cross-page section link. If user is not on home, this navigates to home with hash.
  const sectionHref = (hash: string) => {
    const h = hash.startsWith('#') ? hash : `#${hash}`;
    return (isZh ? '/zh' : '') + h;
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
          isOpen
            ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/10'
            : scrolled
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
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <img src={logoImage.src} alt="Pacifico Logo" className="w-8 h-8 rounded-lg group-hover:shadow-[var(--shadow-neon)] transition-all duration-300" />
              <span className="text-2xl font-bold text-gradient-primary">Pivota</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={sectionHref(link.href)}
                  className="relative text-secondary hover:text-primary transition-all duration-300 font-medium group px-2 py-1 rounded-lg"
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10"></span>
                </Link>
              ))}

              {/* Blog entry (route link) */}
              <Link
                href={isZh ? "/zh/blog" : "/blog"}
                className="relative text-secondary hover:text-primary transition-all duration-300 font-medium group px-2 py-1 rounded-lg"
              >
                {isZh ? "博客" : "Blog"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10"></span>
              </Link>
              
              {isLandingPage && (
                <Link href={sectionHref('#demo-section')} className="btn-hero btn-hero-nav animate-glow">
                  {isZh ? "预约演示" : "Book a Demo"}
                </Link>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden border-input hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                  >
                    <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {isZh ? "登录" : "Log in"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href="https://agents.pivota.cc/login">{isZh ? "代理登录" : "Agent Login"}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://merchant.pivota.cc/login">{isZh ? "商家登录" : "Merchant Login"}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href={localeToggleHref}
                className="ml-2 px-3 py-2 text-sm rounded-md border border-input hover:bg-accent/10"
              >
                {isZh ? "EN" : "中文"}
              </Link>
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
          {/* Backdrop overlay below header when menu is open */}
          {isOpen && (
            <div
              className="fixed left-0 right-0 top-16 bottom-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          <div
            className={`md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
          >
            <div
              className={`fixed left-0 right-0 top-16 z-50 bg-background border-t border-input/80 ring-1 ring-black/10 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto`}
            >
              <div className="py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={sectionHref(link.href)}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-4 py-3 text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-md"
                  >
                    {link.text}
                  </Link>
                ))}

                {/* Blog entry (route link) */}
                <Link
                  href={isZh ? "/zh/blog" : "/blog"}
                  className="block w-full text-left px-4 py-3 text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {isZh ? "博客" : "Blog"}
                </Link>
              
              <div className="px-4 pt-2 space-y-2">
                {isLandingPage && (
                  <Link 
                    href={sectionHref('#demo-section')}
                    onClick={() => setIsOpen(false)}
                    className="btn-hero btn-hero-nav w-full inline-block text-center"
                  >
                    {isZh ? "预约演示" : "Book a Demo"}
                  </Link>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://agents.pivota.cc/login"
                    className="block text-center px-4 py-3 rounded-lg border border-input hover:bg-primary/10 transition"
                  >
                    {isZh ? "代理登录" : "Agent Login"}
                  </a>
                  <a
                    href="https://merchant.pivota.cc/login"
                    className="block text-center px-4 py-3 rounded-lg border border-input hover:bg-accent/10 transition"
                  >
                    {isZh ? "商家登录" : "Merchant Login"}
                  </a>
                </div>

                <Link
                  href={localeToggleHref}
                  className="block w-full text-left px-4 py-3 text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-md"
                >
                  {isZh ? "EN" : "中文"}
                </Link>
              </div>
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
