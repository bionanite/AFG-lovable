import { test } from "node:test";
import assert from "node:assert/strict";
import { sectorSearch } from "./sectorSearch";
import { sectors } from "./sectors";
import { resources } from "./resources";
import { allUrls } from "../lib/site-urls";
import { absoluteUrl, pageHead } from "../lib/site";

test("all eight sectors have distinct search content and existing planning resources", () => {
  assert.equal(sectors.length, 8);
  assert.deepEqual(Object.keys(sectorSearch).sort(), sectors.map((sector) => sector.slug).sort());
  for (const sector of sectors) {
    const search = sectorSearch[sector.slug];
    assert.ok(search);
    assert.equal(search.questions.length, 2);
    assert.equal(search.prepare.length, 4);
    for (const slug of search.resources) assert.ok(resources.some((resource) => resource.slug === slug));
  }
});

test("each sector is included once in the primary-domain sitemap mapping", () => {
  const urls = allUrls();
  for (const sector of sectors) {
    const path = `/sectors/${sector.slug}`;
    assert.equal(urls.filter((url) => url.path === path).length, 1);
    assert.equal(absoluteUrl(path), `https://alliedforcegroup.com${path}`);
  }
});

test("social images are emitted only for explicitly supplied absolute images", () => {
  const base = { path: "/sectors/rail", title: "Rail | Allied Force Group", description: "Rail facilities services" };
  assert.equal(pageHead(base).meta.filter((meta) => meta["property"] === "og:image" || meta["name"] === "twitter:image").length, 0);
  const head = pageHead({ ...base, image: "https://alliedforcegroup.com/rail.jpg" });
  assert.equal(head.meta.find((meta) => meta["property"] === "og:image")?.["content"], "https://alliedforcegroup.com/rail.jpg");
  assert.equal(head.meta.find((meta) => meta["name"] === "twitter:image")?.["content"], "https://alliedforcegroup.com/rail.jpg");
});