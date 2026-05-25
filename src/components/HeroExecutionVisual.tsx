import {
  ArrowRight,
  Bot,
  Check,
  Database,
  Network,
  Sparkles,
  ShieldCheck,
  Store,
} from "lucide-react";

const agentChannels = ["ChatGPT", "Gemini", "Brand agent"] as const;

const merchantSystems = [
  { label: "Catalog", value: "Indexed" },
  { label: "Offers", value: "Ranked" },
  { label: "Checkout", value: "Native" },
] as const;

const decisionPath = [
  { label: "Understand", icon: Database },
  { label: "Recommend", icon: Sparkles },
  { label: "Route", icon: Network },
  { label: "Write-back", icon: ShieldCheck },
] as const;

export default function HeroExecutionVisual() {
  return (
    <div className="hero-execution-visual relative min-h-[410px] overflow-hidden rounded-lg border border-white/10 bg-[#131211] p-5 shadow-2xl">
      <div className="hero-orbit-field absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(183,225,59,0.20),transparent_24rem)]" />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 760 430"
        preserveAspectRatio="none"
      >
        <path className="hero-flow-line hero-flow-line-a" d="M102 168 C 246 118, 286 205, 382 205" />
        <path className="hero-flow-line hero-flow-line-b" d="M658 168 C 514 118, 474 205, 378 205" />
        <path className="hero-flow-line hero-flow-line-c" d="M380 216 C 356 285, 295 310, 116 337" />
        <path className="hero-flow-line hero-flow-line-d" d="M380 216 C 404 285, 465 310, 644 337" />
      </svg>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime-200">
            Live decision layer
          </p>
          <p className="mt-2 max-w-[22rem] text-sm leading-6 text-white/68">
            Agent demand becomes ranked recommendation, route, and transaction state.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-lime-200/25 bg-lime-200/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-lime-100">
          <span className="h-2 w-2 rounded-full bg-lime-200 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
          Ready
        </div>
      </div>

      <div className="absolute left-5 top-[5.4rem] z-10 w-[13rem] rounded-lg border border-white/10 bg-white/[0.055] p-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-lime-200/12 text-lime-100">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Agent surfaces</p>
            <p className="text-xs text-white/50">Incoming demand</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {agentChannels.map((channel, index) => (
            <div
              key={channel}
              className="flex items-center justify-between rounded-md border border-white/8 bg-black/18 px-3 py-1.5"
            >
              <span className="text-xs text-white/78">{channel}</span>
              <span className="font-mono text-[10px] text-lime-200/80">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-5 top-[5.4rem] z-10 w-[13.5rem] rounded-lg border border-white/10 bg-white/[0.055] p-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-200/12 text-cyan-100">
            <Store className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Merchant stack</p>
            <p className="text-xs text-white/50">Control stays here</p>
          </div>
        </div>
        <div className="mt-3 grid gap-1.5">
          {merchantSystems.map((system) => (
            <div
              key={system.label}
              className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-white/8 bg-black/18 px-3 py-1.5"
            >
              <span className="text-xs text-white/72">{system.label}</span>
              <span className="rounded-full bg-white/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-100">
                {system.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-core absolute left-1/2 top-[48%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="hero-core-ring absolute h-40 w-40 rounded-full border border-lime-200/16" />
        <div className="hero-core-ring hero-core-ring-delayed absolute h-28 w-28 rounded-full border border-cyan-100/14" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-lime-200/25 bg-[#11100f] shadow-[0_0_60px_rgba(183,225,59,0.22)]">
          <span className="pv-logo pv-logo--gradient pv-logo--lg" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-lg border border-white/10 bg-[#11100f]/82 p-3 backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/58">
            Decision path
          </p>
          <div className="flex items-center gap-1.5 text-xs text-lime-100">
            <Check className="h-3.5 w-3.5" />
            decision checked
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {decisionPath.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className="rounded-md border border-white/8 bg-white/[0.045] px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className="h-4 w-4 text-lime-200" />
                  {index < decisionPath.length - 1 ? (
                    <ArrowRight className="h-3.5 w-3.5 text-white/28" />
                  ) : (
                    <Check className="h-3.5 w-3.5 text-lime-200" />
                  )}
                </div>
                <p className="mt-3 text-xs font-medium text-white">{step.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
