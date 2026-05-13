import { build } from "@deco/dev/tailwind";
await build();

// DECO_RELEASE must be set BEFORE fresh.config.ts is imported.
// fresh.config.ts calls plugins() → Deco.init() at module evaluation,
// so a static import would hoist it before any code here can run.
if (!Deno.env.get("DECO_RELEASE")) {
  Deno.env.set("DECO_RELEASE", import.meta.resolve("./.release.json"));
}

import dev from "$fresh/dev.ts";
const { default: config } = await import("./fresh.config.ts");

await dev(import.meta.url, "./main.ts", config);

if (Deno.args.includes("build")) {
  Deno.exit(0);
}
