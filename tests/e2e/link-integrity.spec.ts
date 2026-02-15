import { expect, test } from "@playwright/test";

const crawlSeeds = ["/", "/university-showcase/"];

function normalizeInternalPath(rawHref: string): string | null {
  if (!rawHref) {
    return null;
  }

  const href = rawHref.trim();
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:") ||
    href.startsWith("#")
  ) {
    return null;
  }

  let path = href;
  if (!path.startsWith("/")) {
    return null;
  }

  path = path.split("#")[0] || "/";
  path = path.split("?")[0] || path;

  if (path !== "/" && path.endsWith("/")) {
    return path;
  }

  return path;
}

function extractInternalPaths(html: string): string[] {
  const hrefRegex = /href=["']([^"']+)["']/g;
  const paths = new Set<string>();

  let match = hrefRegex.exec(html);
  while (match) {
    const normalized = normalizeInternalPath(match[1]);
    if (normalized) {
      paths.add(normalized);
    }
    match = hrefRegex.exec(html);
  }

  return [...paths];
}

test("internal links from core pages are not broken", async ({ request }) => {
  const queue = [...crawlSeeds];
  const seen = new Set<string>();

  while (queue.length > 0) {
    const path = queue.shift();
    if (!path || seen.has(path)) {
      continue;
    }

    seen.add(path);

    const response = await request.get(path);
    expect(response.status(), `Broken internal path: ${path}`).toBeLessThan(400);

    const contentType = response.headers()["content-type"] || "";
    if (!contentType.includes("text/html")) {
      continue;
    }

    const html = await response.text();
    const discovered = extractInternalPaths(html);

    for (const discoveredPath of discovered) {
      if (!seen.has(discoveredPath)) {
        queue.push(discoveredPath);
      }
    }
  }

  expect(seen.size).toBeGreaterThanOrEqual(crawlSeeds.length);
});
