/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

// Fall back to the committed .release.json when DECO_RELEASE is not injected by the environment
if (!Deno.env.get("DECO_RELEASE")) {
  Deno.env.set("DECO_RELEASE", import.meta.resolve("./.release.json"));
}

import { start } from "$fresh/server.ts";
import config from "./fresh.config.ts";
import manifest from "./fresh.gen.ts";

await start(manifest, config);
