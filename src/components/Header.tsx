"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { primaryNavItems, routePaths } from "@/lib/marketing";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = normalizePath(usePathname());
  const isAiReadinessPage = pathname === routePaths.aiReadiness;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const navItems = useMemo(
    () =>
      primaryNavItems.map((item) => ({
        ...item,
        active:
          !item.href.includes("#") &&
          (pathname === item.href || pathname.startsWith(`${item.href}/`)),
      })),
    [pathname],
  );

  const headerSurfaceClass = isAiReadinessPage
    ? scrolled
      ? "border-slate-200/90 bg-[#f7f4ea]/96 backdrop-blur-xl"
      : "border-slate-200/70 bg-[#fbfaf4]/88 backdrop-blur-md"
    : scrolled
      ? "border-border/80 bg-background/92 backdrop-blur-xl"
      : "border-transparent bg-background/78 backdrop-blur-md";

  const inactiveNavTextClass = isAiReadinessPage ? "text-slate-600" : "text-muted-foreground";
  const activeNavTextClass = isAiReadinessPage ? "text-slate-900" : "text-foreground";
  const loginButtonClass = isAiReadinessPage
    ? "group h-8 border-slate-200 bg-white/85 px-3.5 text-sm font-medium tracking-tight text-slate-900 transition-colors hover:border-primary/40 hover:bg-white hover:text-slate-900"
    : "group h-8 border-input bg-background/30 px-3.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-foreground";
  const mobileToggleClass = isAiReadinessPage
    ? "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/85 p-2 text-slate-900 lg:hidden"
    : "inline-flex items-center justify-center rounded-lg border border-input bg-background/30 p-2 text-foreground lg:hidden";
  const mobileMenuClass = isAiReadinessPage
    ? "border-t border-slate-200 bg-[#fbfaf4]/98 px-4 py-4 lg:hidden"
    : "border-t border-border bg-background/95 px-4 py-4 lg:hidden";
  const navShellClass = isAiReadinessPage
    ? "container-max flex h-11 items-center justify-between px-4 sm:h-12 sm:px-6 lg:px-8"
    : "container-max flex h-12 items-center justify-between px-4 sm:h-[3.25rem] sm:px-6 lg:px-8";
  const brandTextClass = isAiReadinessPage
    ? "text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-slate-700 sm:text-xl"
    : "bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-semibold tracking-tight text-foreground transition-all duration-300 group-hover:text-transparent sm:text-xl";
  const navTextBaseClass = isAiReadinessPage
    ? "text-sm font-medium tracking-tight transition-colors duration-200 group-hover:text-slate-900"
    : "bg-gradient-to-r from-primary to-accent bg-clip-text text-sm font-medium tracking-tight transition-all duration-300 group-hover:text-transparent";
  const loginIconClass = isAiReadinessPage
    ? "mr-2 h-4 w-4 transition-colors group-hover:text-slate-900"
    : "mr-2 h-4 w-4 transition-colors group-hover:text-primary";
  const loginTextClass = isAiReadinessPage
    ? "transition-colors duration-200 group-hover:text-slate-900"
    : "bg-gradient-to-r from-primary to-accent bg-clip-text transition-all duration-300 group-hover:text-transparent";

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerSurfaceClass}`}>
        <nav className={navShellClass}>
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/pivota-logo.png"
              alt="Pivota logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
              priority
            />
            <span className={brandTextClass}>
              Pivota
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group"
              >
                <span
                  className={`${navTextBaseClass} ${
                    item.active ? activeNavTextClass : inactiveNavTextClass
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={loginButtonClass}
                >
                  <LogIn className={loginIconClass} />
                  <span className={loginTextClass}>
                    Log in
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a href="https://developer.pivota.cc/login">Developer Login</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://merchant.pivota.cc/login">Merchant Login</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={mobileToggleClass}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className={mobileMenuClass}>
            <div className="container-max space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium tracking-tight transition-colors ${
                    item.active
                      ? isAiReadinessPage
                        ? "bg-primary/10 text-slate-900"
                        : "bg-primary/10 text-foreground"
                      : isAiReadinessPage
                        ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href="https://developer.pivota.cc/login"
                  className={`rounded-lg border px-3 py-3 text-center text-sm font-medium tracking-tight transition-colors hover:border-primary/60 hover:bg-primary/5 ${
                    isAiReadinessPage
                      ? "border-slate-200 bg-white/85 text-slate-900"
                      : "border-input text-foreground"
                  }`}
                >
                  Developer Login
                </a>
                <a
                  href="https://merchant.pivota.cc/login"
                  className={`rounded-lg border px-3 py-3 text-center text-sm font-medium tracking-tight transition-colors hover:border-primary/60 hover:bg-primary/5 ${
                    isAiReadinessPage
                      ? "border-slate-200 bg-white/85 text-slate-900"
                      : "border-input text-foreground"
                  }`}
                >
                  Merchant Login
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
