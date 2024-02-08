import { durationInSeconds } from "./durationInSeconds";
import { fetchYoutube } from "./fetch-youtube";

type FetchVideosReturn = VideoItem[];

interface VideoItem {
  id: string;
  durationSeconds: number;
}

export async function fetchVideoMetadata(id: string): Promise<FetchVideosReturn> {
  const result = await fetchYoutube("videos", {
    query: {
      part: "id,contentDetails",
      id,
    },
  });
  return result.items.map((item: any) => {
    return {
      id: item.id,
      durationSeconds: durationInSeconds(item.contentDetails.duration),
    };
  });
}
