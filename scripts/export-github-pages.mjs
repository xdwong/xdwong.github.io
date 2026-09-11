import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "docs");
const origin = process.env.EXPORT_ORIGIN || "http://127.0.0.1:4310";
const publicationSource = await readFile(path.join(projectRoot, "app/research/publications.ts"), "utf8");
const slugs = [...publicationSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const routes = [
  "",
  "about",
  "research",
  "leadership",
  "institute",
  "team",
  "people",
  "media",
  "cv",
  "service",
  "talks",
  "teaching",
  ...slugs.map((slug) => `research/${slug}`),
];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, { recursive: true });

for (const route of routes) {
  const response = await fetch(`${origin}/${route}`, { headers: { accept: "text/html" } });
  if (!response.ok) throw new Error(`Failed to export /${route}: ${response.status}`);
  const directory = route ? path.join(outputRoot, route) : outputRoot;
  await mkdir(directory, { recursive: true });
  const html = (await response.text())
    .replaceAll("https://127.0.0.1:4310", "https://www.mengli.us")
    .replaceAll("http://127.0.0.1:4310", "https://www.mengli.us");
  await writeFile(path.join(directory, "index.html"), html);
}

await writeFile(path.join(outputRoot, "CNAME"), "www.mengli.us\n");
await writeFile(path.join(outputRoot, ".nojekyll"), "");
await cp(path.join(outputRoot, "index.html"), path.join(outputRoot, "404.html"));
console.log(`Exported ${routes.length} routes to ${outputRoot}`);
