import { parseDotEnv } from "./utils/dotEnv";
import { readFile } from "fs/promises";

const dotEnvRaw = await readFile("./.env", "utf-8");
const dotEnv = parseDotEnv(dotEnvRaw);

const key = dotEnv.YOUTUBE_API_KEY;
if (key == null) throw new Error("No API key found");

export const youtubeApiKey = key;
