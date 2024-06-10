import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const env = config();
export const DEVELOPER_SITE = env.DEVELOPER_SITE;
