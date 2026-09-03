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
  /**
   * The visitor's own audit run. Threading this into the signup URL is what
   * turns "we checked your store" into "this audit is yours" — the merchant
   * portal claims this exact run after registration rather than starting a
   * fresh one. Null on the paths that reuse another lane's route, where there
   * is no run this visitor may read or claim.
   */
  audit_run_id?: string | null;
};

/** The deterministic projection an unregistered visitor may read. */
export type PublicAuditRun = {
  audit_run_id: string;
  domain: string;
  /**
   * Signals we OBSERVED, never a "not detected" — the backend emits a signal
   * only when evidence of that type exists, because saying a store lacks an
   * agent checkout when we simply never saw one is a claim we cannot make.
   */
  observed_signals: Array<{
    signal: string;
    evidence_level: "detected" | "tested" | null;
  }>;
  claimable: boolean;
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
    audit_run_id:
      typeof record.audit_run_id === "string" ? record.audit_run_id : null,
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

  // ONLY the intake mints a run id; the teaser poll is domain-keyed and
  // answers with audit_run_id: null. Replacing the teaser wholesale on each
  // poll therefore threw the visitor's run away, and the signup URL lost the
  // one parameter that makes the audit theirs — caught by running the form,
  // not by reading it. Carry it forward across every poll.
  const auditRunId = teaser.audit_run_id ?? null;

  for (
    let attempt = 0;
    teaser.state === "pending" && attempt < POLL_ATTEMPTS;
    attempt += 1
  ) {
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
    if (signal?.aborted) return { ...teaser, audit_run_id: auditRunId };
    try {
      const next = await fetchStoreAuditTeaser(storeUrl, signal);
      if (next) teaser = next;
    } catch {
      break;
    }
  }
  return { ...teaser, audit_run_id: auditRunId ?? teaser.audit_run_id ?? null };
}

/**
 * Read the deterministic projection for one unclaimed run.
 *
 * 404 is a NORMAL answer, not an error: the endpoint refuses unknown ids,
 * other lanes, and — deliberately — runs that have already been claimed, so a
 * visitor returning with an old link simply gets nothing rather than someone
 * else's audit. Every failure resolves to null and the caller degrades to the
 * teaser it already has.
 */
export async function fetchPublicAuditRun(
  auditRunId: string,
  signal?: AbortSignal,
): Promise<PublicAuditRun | null> {
  let response: Response;
  try {
    response = await fetch(
      `${PIVOTA_API_BASE}/public/store-audit/run/${encodeURIComponent(auditRunId)}`,
      { signal },
    );
  } catch {
    return null;
  }
  if (!response.ok) return null;

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    return null;
  }
  if (!payload || typeof payload !== "object") return null;

  const record = payload as Record<string, unknown>;
  const projection =
    record.projection && typeof record.projection === "object"
      ? (record.projection as Record<string, unknown>)
      : {};
  const rawSignals = Array.isArray(projection.observed_signals)
    ? projection.observed_signals
    : [];

  return {
    audit_run_id:
      typeof record.audit_run_id === "string" ? record.audit_run_id : auditRunId,
    domain: typeof record.domain === "string" ? record.domain : "",
    observed_signals: rawSignals.flatMap((entry) => {
      if (!entry || typeof entry !== "object") return [];
      const item = entry as Record<string, unknown>;
      if (typeof item.signal !== "string") return [];
      const level = item.evidence_level;
      return [{
        signal: item.signal,
        evidence_level:
          level === "detected" || level === "tested" ? level : null,
      }];
    }),
    claimable: projection.claimable === true,
  };
}
