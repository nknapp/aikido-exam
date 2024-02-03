/// <reference types="vite/client" />

import { youtubeApiKey } from "../config";
import { URLSearchParams } from "url";

interface FetchYoutubeOptions {
  query: Record<string, string>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchYoutube(url: string, { query }: FetchYoutubeOptions): Promise<any> {
  const searchParams = new URLSearchParams(query);
  const response = await fetch(`https://youtube.googleapis.com/v3/${url}?${searchParams}`, {
    headers: { "X-goog-api-key": youtubeApiKey },
  });
  if (response.status >= 300) {
    throw new Error(`Invalid status for "${url}": ${response.status} ${response.statusText}`);
  }
  return response.json();
}
