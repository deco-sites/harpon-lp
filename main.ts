/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

// DECO_RELEASE must be set BEFORE fresh.config.ts is imported.
// fresh.config.ts calls plugins() → Deco.init() at module evaluation,
// so a static import would hoist it before any code here can run.
if (!Deno.env.get("DECO_RELEASE")) {
  Deno.env.set("DECO_RELEASE", import.meta.resolve("./.release.json"));
}

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
const { default: config } = await import("./fresh.config.ts");

await start(manifest, config);
