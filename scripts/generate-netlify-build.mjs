import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import server from "../dist/server/server.js";

const root = resolve(import.meta.dirname, "..");
const clientDir = resolve(root, "dist/client");
const buildDir = resolve(root, "build");

await rm(buildDir, { recursive: true, force: true });
await mkdir(buildDir, { recursive: true });
await cp(clientDir, buildDir, { recursive: true });

const response = await server.fetch(new Request("http://localhost/"), {}, {});

if (!response.ok) {
  throw new Error(`Failed to prerender /: ${response.status} ${response.statusText}`);
}

const html = await response.text();

await writeFile(resolve(buildDir, "index.html"), html);
await writeFile(resolve(buildDir, "_redirects"), "/* /index.html 200\n");

console.log("Generated Netlify drag-and-drop build folder.");
