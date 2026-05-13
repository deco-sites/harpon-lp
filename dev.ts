#!/usr/bin/env -S deno run -A --watch

// Load .env.local first (local overrides, gitignored), then .env
import { config as loadEnv } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
try { loadEnv({ path: ".env.local", export: true, allowEmptyValues: true }); } catch (_) { /* file may not exist */ }
try { loadEnv({ path: ".env", export: true, allowEmptyValues: true }); } catch (_) { /* ignore */ }

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", config);

if (Deno.args.includes("build")) {
  Deno.exit(0);
}
