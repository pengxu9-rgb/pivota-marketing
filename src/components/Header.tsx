"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { emitMarketingEvent } from "@/lib/analytics";
import { headerNavItems, merchantSignupPath, routePaths } from "@/lib/marketing";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function normalizeCampaignValue(value: string | null) {
  return value?.trim().toLowerCase() ?? "";
}

function isAiReadinessAdTraffic(search: string) {
  const params = new URLSearchParams(search);
  const utmSource = normalizeCampaignValue(params.get("utm_source"));
  const utmMedium = normalizeCampaignValue(params.get("utm_medium"));
  const source = normalizeCampaignValue(params.get("source"));

  return (
    utmSource === "instagram" ||
    utmSource === "ig" ||
    utmSource === "tiktok" ||
    utmMedium === "paid_social" ||
    source === "ai-readiness-ads"
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasTrackedCampaignHeader, setHasTrackedCampaignHeader] = useState(false);
  const [isAiReadinessCampaignMode, setIsAiReadinessCampaignMode] = useState(false);
  const pathname = normalizePath(usePathname());
  const isAiReadinessPage = pathname === routePaths.aiReadiness;
  const isDarkMarketingPage = !isAiReadinessPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isAiReadinessPage || typeof window === "undefined") {
      setIsAiReadinessCampaignMode(false);
      return;
    }

    setIsAiReadinessCampaignMode(isAiReadinessAdTraffic(window.location.search));
  }, [isAiReadinessPage]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isAiReadinessCampaignMode && isOpen) {
      setIsOpen(false);
    }
  }, [isAiReadinessCampaignMode, isOpen]);

  useEffect(() => {
    if (
      !isAiReadinessCampaignMode ||
      hasTrackedCampaignHeader ||
      typeof window === "undefined" ||
      !window.matchMedia("(max-width: 1023px)").matches
    ) {
      return;
    }

    emitMarketingEvent({
      event: "ai_readiness_mobile_campaign_header_active",
      page: routePaths.aiReadiness,
      placement: "campaign_header",
    });
    setHasTrackedCampaignHeader(true);
  }, [hasTrackedCampaignHeader, isAiReadinessCampaignMode]);

  const navItems = useMemo(
    () =>
      headerNavItems.map((item) => ({
        ...item,
        active:
          !item.href.includes("#") &&
          (pathname === item.href ||
            pathname.startsWith(`${item.href}/`) ||
            ("aliases" in item &&
              item.aliases.some(
                (alias) => pathname === alias || pathname.startsWith(`${alias}/`),
              ))),
      })),
    [pathname],
  );

  const headerSurfaceClass = isAiReadinessPage
    ? scrolled
      ? "border-slate-200/90 bg-[#f7f4ea]/96 backdrop-blur-xl"
      : "border-slate-200/70 bg-[#fbfaf4]/88 backdrop-blur-md"
    : scrolled
      ? "border-white/10 bg-[#11100f]/96 backdrop-blur-xl"
      : "border-transparent bg-[#11100f]";

  const inactiveNavTextClass = isAiReadinessPage
    ? "text-slate-600"
    : "text-white/78";
  const activeNavTextClass = isAiReadinessPage
    ? "text-slate-900"
    : "text-white";
  const loginButtonClass = isAiReadinessPage
    ? "group h-8 border-slate-200 bg-white/85 px-3.5 text-sm font-medium tracking-tight text-slate-900 transition-colors hover:border-primary/40 hover:bg-white hover:text-slate-900"
    : "group h-9 border-white/14 bg-white/[0.04] px-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-white/28 hover:bg-white/[0.08] hover:text-white";
  const signupButtonClass = isAiReadinessPage
    ? "h-9 bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800"
    : "h-9 bg-white px-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#11100f] hover:bg-lime-100";
  const mobileToggleClass = isAiReadinessPage
    ? "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/85 p-2 text-slate-900 lg:hidden"
    : "inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/[0.04] p-2 text-white lg:hidden";
  const mobileMenuClass = isAiReadinessPage
    ? "border-t border-slate-200 bg-[#fbfaf4]/98 px-4 py-4 lg:hidden"
    : "border-t border-white/10 bg-[#11100f]/98 px-4 py-4 lg:hidden";
  const navShellClass = isAiReadinessPage
    ? "container-max flex h-11 items-center justify-between px-4 sm:h-12 sm:px-6 lg:px-8"
    : "container-max flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8";
  const navTextBaseClass = isAiReadinessPage
    ? "text-sm font-medium tracking-tight transition-colors duration-200 group-hover:text-slate-900"
    : "font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 group-hover:text-white";
  const loginIconClass = isAiReadinessPage
    ? "mr-2 h-4 w-4 transition-colors group-hover:text-slate-900"
    : "mr-1 h-3.5 w-3.5 transition-colors group-hover:text-white";
  const loginTextClass = isAiReadinessPage
    ? "transition-colors duration-200 group-hover:text-slate-900"
    : "transition-colors duration-200";

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerSurfaceClass}`}>
        <nav className={navShellClass}>
          <Link href="/" className="group flex items-center gap-2">
            <span className="pv-logo pv-logo--gradient pv-logo--md" aria-hidden="true" />
            <span className={`pv-wordmark pv-wordmark--sm ${isDarkMarketingPage ? "pv-wordmark--light" : ""}`}>
              Pivota
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
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
            <Button asChild className={signupButtonClass}>
              <a href={merchantSignupPath}>
                Get started
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {isAiReadinessCampaignMode ? null : (
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className={mobileToggleClass}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </nav>

        {isOpen && !isAiReadinessCampaignMode ? (
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
                        : "bg-white/[0.08] text-white"
                      : isAiReadinessPage
                        ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        : "text-white/68 hover:bg-white/[0.08] hover:text-white"
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
                      : "border-white/14 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  Developer Login
                </a>
                <a
                  href="https://merchant.pivota.cc/login"
                  className={`rounded-lg border px-3 py-3 text-center text-sm font-medium tracking-tight transition-colors hover:border-primary/60 hover:bg-primary/5 ${
                    isAiReadinessPage
                      ? "border-slate-200 bg-white/85 text-slate-900"
                      : "border-white/14 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  Merchant Login
                </a>
              </div>
              <a
                href={merchantSignupPath}
                className={`mt-3 flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-center text-sm font-semibold tracking-tight transition-colors ${
                  isAiReadinessPage
                    ? "border-slate-200 bg-slate-950 text-white hover:bg-slate-800"
                    : "border-white bg-white text-[#11100f] hover:bg-lime-100"
                }`}
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
