#!/usr/bin/env node
// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver, ...) which pivota.cc URLs changed.
// Google does not take part; use Search Console for it.
//
//   node scripts/indexnow.mjs diff <before-sitemap.xml> <after-sitemap.xml> [--dry-run]
//       Submit URLs that are new in <after> or whose <lastmod> changed. The deploy workflow
//       runs this with the live sitemap captured before and after a deploy.
//   node scripts/indexnow.mjs urls <url> [<url> ...] [--dry-run]
//       Submit specific URLs (for a one-off ping).
//
// IndexNow asks for changed URLs only, so an empty or missing <before> sitemap submits
// nothing rather than the whole site. The key is public by design: it is served at
// https://pivota.cc/<key>.txt (public/<key>.txt), which proves the submission comes from
// the site owner.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "pivota.cc";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10_000;

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

export function readKey(dir = publicDir) {
  const keys = readdirSync(dir).filter((f) => /^[a-f0-9]{32}\.txt$/.test(f));
  if (keys.length !== 1) throw new Error(`expected one IndexNow key file in public/, found ${keys.length}`);
  const key = keys[0].slice(0, -4);
  if (readFileSync(join(dir, keys[0]), "utf8").trim() !== key) throw new Error("key file content does not match its name");
  return key;
}

export function parseSitemap(xml) {
  const entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/)?.[1];
    if (!loc) continue;
    entries.set(loc, block.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/)?.[1] ?? "");
  }
  return entries;
}

export function changedUrls(beforeXml, afterXml) {
  const before = parseSitemap(beforeXml);
  if (before.size === 0) return [];
  const changed = [];
  for (const [loc, lastmod] of parseSitemap(afterXml)) {
    if (before.get(loc) !== lastmod) changed.push(loc);
  }
  return changed;
}

export function onHost(urls) {
  return [...new Set(urls)].filter((u) => {
    try {
      const url = new URL(u);
      return url.protocol === "https:" && url.hostname === HOST;
    } catch {
      return false;
    }
  });
}

async function submit(urls, { dryRun }) {
  if (urls.length === 0) {
    console.log("IndexNow: no changed URLs; nothing submitted.");
    return 0;
  }
  if (urls.length > MAX_URLS) throw new Error(`too many URLs (${urls.length} > ${MAX_URLS})`);
  const key = readKey();
  const body = { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls };
  console.log(`IndexNow: ${urls.length} URL(s)${dryRun ? " (dry run, not sent)" : ""}:\n  ${urls.join("\n  ")}`);
  if (dryRun) return 0;
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  // 200 = accepted; 202 = accepted, key validation pending. Anything else is a failure.
  console.log(`IndexNow: HTTP ${res.status} ${res.statusText}`);
  return res.status === 200 || res.status === 202 ? 0 : 1;
}

async function main(argv) {
  const dryRun = argv.includes("--dry-run");
  const [mode, ...rest] = argv.filter((a) => a !== "--dry-run");
  if (mode === "diff" && rest.length === 2) {
    const [beforePath, afterPath] = rest;
    const before = existsSync(beforePath) ? readFileSync(beforePath, "utf8") : "";
    if (!before.trim()) console.log("IndexNow: no baseline sitemap; nothing submitted.");
    return submit(onHost(changedUrls(before, readFileSync(afterPath, "utf8"))), { dryRun });
  }
  if (mode === "urls" && rest.length > 0) {
    const urls = onHost(rest);
    if (urls.length !== new Set(rest).size) throw new Error(`only https://${HOST}/ URLs can be submitted`);
    return submit(urls, { dryRun });
  }
  console.error("usage: indexnow.mjs diff <before.xml> <after.xml> [--dry-run] | urls <url>... [--dry-run]");
  return 2;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).then(
    (code) => process.exit(code),
    (err) => {
      console.error(`IndexNow: ${err.message}`);
      process.exit(1);
    },
  );
}
