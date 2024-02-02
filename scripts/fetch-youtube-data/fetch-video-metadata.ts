import { fetchYoutube } from "./fetch-youtube";

import { Temporal } from "@js-temporal/polyfill";

type FetchPlaylistReturn = {
  videos: VideoItem[];
};

interface VideoItem {
  id: string;
  durationSeconds: number;
}

export async function fetchVideoMetadata(id: string): Promise<FetchPlaylistReturn> {
  const result = await fetchYoutube("videos", {
    query: {
      part: "id,contentDetails",
      id,
    },
  });
  return result.items.map((item) => {
    return {
      id: item.id,
      durationSeconds: durationInSeconds(item.contentDetails.duration),
    };
  });
}

/* exported for testing */
export function durationInSeconds(iso8601duration: string): number {
  return Temporal.Duration.from(iso8601duration).total({ unit: "seconds" });
}
