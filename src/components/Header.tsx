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
import { primaryNavItems } from "@/lib/marketing";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = normalizePath(usePathname());

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

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-background/92 backdrop-blur-xl"
            : "border-transparent bg-background/78 backdrop-blur-md"
        }`}
      >
        <nav className="container-max flex h-12 items-center justify-between px-4 sm:h-[3.25rem] sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/pivota-logo.png"
              alt="Pivota logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
              priority
            />
            <span className="font-nav-display text-sm font-semibold uppercase tracking-[0.28em] text-foreground sm:text-[0.95rem]">
              Pivota
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-nav-display text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="font-nav-display h-8 border-input bg-background/30 px-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-primary/50 hover:bg-primary/5"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
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
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background/30 p-2 text-foreground lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-border bg-background/95 px-4 py-4 lg:hidden">
            <div className="container-max space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-nav-display block rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    item.active
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href="https://developer.pivota.cc/login"
                  className="font-nav-display rounded-lg border border-input px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  Developer Login
                </a>
                <a
                  href="https://merchant.pivota.cc/login"
                  className="font-nav-display rounded-lg border border-input px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5"
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
