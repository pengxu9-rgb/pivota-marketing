// node --test scripts/indexnow.test.mjs
import assert from "node:assert/strict";
import { test } from "node:test";
import { changedUrls, onHost, parseSitemap, readKey } from "./indexnow.mjs";

const sitemap = (rows) =>
  `<?xml version="1.0" encoding="UTF-8"?><urlset>${rows
    .map(([loc, lastmod]) => `<url>\n<loc>${loc}</loc>\n${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}\n</url>`)
    .join("")}</urlset>`;

const before = sitemap([
  ["https://pivota.cc/", "2026-10-08T00:00:00.000Z"],
  ["https://pivota.cc/about", "2026-10-08T00:00:00.000Z"],
  ["https://pivota.cc/removed", "2026-01-01T00:00:00.000Z"],
  ["https://pivota.cc/unchanged", "2026-05-26T00:00:00.000Z"],
]);
const after = sitemap([
  ["https://pivota.cc/", "2026-10-08T00:00:00.000Z"],
  ["https://pivota.cc/about", "2026-10-09T00:00:00.000Z"],
  ["https://pivota.cc/press", "2026-10-09T00:00:00.000Z"],
  ["https://pivota.cc/unchanged", "2026-05-26T00:00:00.000Z"],
]);

test("parses loc and lastmod", () => {
  assert.equal(parseSitemap(after).get("https://pivota.cc/press"), "2026-10-09T00:00:00.000Z");
  assert.equal(parseSitemap(after).size, 4);
});

test("submits only new URLs and URLs whose lastmod changed", () => {
  assert.deepEqual(changedUrls(before, after), ["https://pivota.cc/about", "https://pivota.cc/press"]);
});

test("submits nothing without a baseline or when nothing changed", () => {
  assert.deepEqual(changedUrls("", after), []);
  assert.deepEqual(changedUrls(after, after), []);
});

test("keeps only https://pivota.cc URLs, deduplicated", () => {
  assert.deepEqual(
    onHost(["https://pivota.cc/a", "https://pivota.cc/a", "http://pivota.cc/b", "https://www.pivota.cc/c", "https://example.com/d", "nope"]),
    ["https://pivota.cc/a"],
  );
});

test("exactly one key file, named after its content", () => {
  assert.match(readKey(), /^[a-f0-9]{32}$/);
});
