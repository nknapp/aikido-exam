/// <reference types="vite/client" />

import { URLSearchParams } from "url";
import { parseDotEnv } from "../utils/dotEnv";
import { readFile } from "fs/promises";

const dotEnvRaw = await readFile("./.env", "utf-8");
const dotEnv = parseDotEnv(dotEnvRaw);

const key = dotEnv.YOUTUBE_API_KEY;
if (key == null) throw new Error("No API key found");

interface FetchYoutubeOptions {
  query: Record<string, string>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchYoutube(url: string, { query }: FetchYoutubeOptions): Promise<any> {
  const searchParams = new URLSearchParams(query);
  const response = await fetch(`https://youtube.googleapis.com/v3/${url}?${searchParams}`, {
    headers: { "X-goog-api-key": key },
  });
  if (response.status >= 300) {
    throw new Error(`Invalid status for "${url}": ${response.status} ${response.statusText}`);
  }
  return response.json();
}
