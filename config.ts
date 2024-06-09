import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
export const DEVELOPER_SITE = env.DEVELOPER_SITE;
