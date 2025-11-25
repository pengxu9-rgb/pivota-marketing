"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

const ShoppingAgentBadge = () => {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");
  const onShoppingAgentPage =
    pathname === "/shopping-agent" || pathname === "/zh/shopping-agent";

  if (onShoppingAgentPage) {
    return null;
  }

  const href = isZh ? "/zh/shopping-agent" : "/shopping-agent";

  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 pointer-events-none">
      {/* Glowing aura */}
      <div className="absolute inset-0 rounded-full blur-xl bg-primary/30 animate-glow pointer-events-none" />

      <Link
        href={href}
        className="relative inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-[var(--shadow-neon)] hover:scale-105 transition-transform duration-300 pointer-events-auto"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/20">
          <Sparkles className="h-4 w-4" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span>
            {isZh ? "Shopping Agent 入口" : "Pivota Shopping Agent"}
          </span>
          <span className="text-[11px] opacity-80 mt-0.5">
            {isZh ? "面向大模型的购物层" : "AI shopping layer for LLMs"}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default ShoppingAgentBadge;

