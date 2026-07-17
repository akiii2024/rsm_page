import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("GitHub Pages用の静的HTMLを生成する", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html lang="ja">/);
  assert.match(html, /<title>RC Setting Manager｜セッティングを、速さにつなげる。<\/title>/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /https:\/\/akiii2024\.github\.io\/rsm_page\/og\.png/);
  assert.match(html, /(?:src|href)="\/rsm_page\/assets\//);
  assert.doesNotMatch(html, /(?:src|href)="\/assets\//);
  assert.match(html, /https:\/\/akiii2024\.github\.io\/RC_Setting_Manager\//);
  assert.match(html, /https:\/\/github\.com\/akiii2024\/RC_Setting_Manager\/releases/);
  assert.doesNotMatch(html, /クラウド同期を利用できます/);
});

test("GitHub Pages配下で必要な静的素材を出力する", async () => {
  await Promise.all([
    access(new URL(".nojekyll", outputRoot)),
    access(new URL("app-icon.png", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("screens/home-dashboard.png", outputRoot)),
    access(new URL("screens/setting-editor.png", outputRoot)),
    access(new URL("screens/history-statistics.png", outputRoot)),
    access(new URL("screens/ai-advisor.png", outputRoot)),
  ]);
});
