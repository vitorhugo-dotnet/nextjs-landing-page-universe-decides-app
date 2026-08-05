import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/en", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders localized canonical, social metadata and application JSON-LD", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("seo", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/en", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  const html = await response.text();
  assert.match(html, /<link(?=[^>]*rel=["']canonical["'])(?=[^>]*href=["']https:\/\/hugodotnet\.dev\/the-universe-decides\/en["'])[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*property=["']og:type["'])(?=[^>]*content=["']website["'])[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*name=["']twitter:card["'])(?=[^>]*content=["']summary["'])[^>]*>/i);
  assert.match(html, /"@type":"SoftwareApplication"/);
});

test("keeps feature animations driven by the JavaScript panel timeline", async () => {
  const landing = await readFile(new URL("../app/[locale]/cosmic-landing.tsx", import.meta.url), "utf8");

  assert.match(landing, /window\.addEventListener\(["']scroll["'], requestUpdate/);
  assert.match(landing, /panel\.style\.setProperty\(["']--story-progress["']/);
  assert.match(landing, /window\.requestAnimationFrame\(update\)/);
});

test("defines public crawler policy and a localized sitemap", async () => {
  const robots = await readFile(new URL("../app/robots.ts", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

  assert.match(robots, /sitemap:/);
  assert.match(sitemap, /privacy-policy/);
  assert.match(sitemap, /locales\.flatMap/);
});
