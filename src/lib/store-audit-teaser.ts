/**
 * Client for the backend's anonymous store-audit teaser lane.
 *
 * POST /public/store-audit/intake queues (or reuses) one UCP protocol probe
 * for the store's domain; GET /public/store-audit/teaser polls the redacted
 * domain-level state. The endpoints are flag-gated server-side and answer 404
 * while dark — every caller here must treat any failure as "fall back to the
 * plain signup redirect", never as a broken page.
 *
 * The probe worker drains its queue on a ~5-minute cadence, so a cold domain
 * will not complete while the visitor watches. Poll briefly to catch fresh or
 * nearly-done evidence, then settle for "queued".
 */

const PIVOTA_API_BASE =
  process.env.NEXT_PUBLIC_PIVOTA_API_URL ?? "https://api.pivota.cc";

export type StoreAuditTeaser = {
  domain: string;
  state: "unknown" | "pending" | "ready" | "inconclusive";
  agent_ready?: boolean | null;
  evidence_level?: "detected" | "tested" | null;
  checked_at?: string | null;
};

function parseTeaser(payload: unknown): StoreAuditTeaser | null {
  if (!payload || typeof payload !== "object") return null;
  const record = payload as Record<string, unknown>;
  const domain = typeof record.domain === "string" ? record.domain : null;
  const state = typeof record.state === "string" ? record.state : null;
  if (!domain || !state) return null;
  if (!["unknown", "pending", "ready", "inconclusive"].includes(state)) {
    return null;
  }
  return {
    domain,
    state: state as StoreAuditTeaser["state"],
    agent_ready:
      typeof record.agent_ready === "boolean" ? record.agent_ready : null,
    evidence_level:
      record.evidence_level === "detected" || record.evidence_level === "tested"
        ? record.evidence_level
        : null,
    checked_at:
      typeof record.checked_at === "string" ? record.checked_at : null,
  };
}

export async function requestStoreAuditIntake(
  storeUrl: string,
  signal?: AbortSignal,
): Promise<StoreAuditTeaser | null> {
  const response = await fetch(`${PIVOTA_API_BASE}/public/store-audit/intake`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ store_url: storeUrl }),
    signal,
  });
  if (!response.ok) return null;
  return parseTeaser(await response.json());
}

export async function fetchStoreAuditTeaser(
  storeUrl: string,
  signal?: AbortSignal,
): Promise<StoreAuditTeaser | null> {
  const query = new URLSearchParams({ store_url: storeUrl });
  const response = await fetch(
    `${PIVOTA_API_BASE}/public/store-audit/teaser?${query}`,
    { signal },
  );
  if (!response.ok) return null;
  return parseTeaser(await response.json());
}

const POLL_ATTEMPTS = 2;
const POLL_INTERVAL_MS = 4_000;

/**
 * One intake plus a short poll. Resolves with the freshest teaser seen, or
 * null when the lane is dark/unreachable (the caller falls back to the plain
 * signup redirect).
 */
export async function probeStoreForTeaser(
  storeUrl: string,
  signal?: AbortSignal,
): Promise<StoreAuditTeaser | null> {
  let teaser: StoreAuditTeaser | null;
  try {
    teaser = await requestStoreAuditIntake(storeUrl, signal);
  } catch {
    return null;
  }
  if (!teaser) return null;
  for (
    let attempt = 0;
    teaser.state === "pending" && attempt < POLL_ATTEMPTS;
    attempt += 1
  ) {
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
    if (signal?.aborted) return teaser;
    try {
      const next = await fetchStoreAuditTeaser(storeUrl, signal);
      if (next) teaser = next;
    } catch {
      break;
    }
  }
  return teaser;
}
