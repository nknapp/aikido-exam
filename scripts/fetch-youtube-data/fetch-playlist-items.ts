import { fetchYoutube } from "./fetch-youtube";

interface FetchPlaylistReturn {
  nextPageToken?: string;
  items: PlaylistItem[];
}

interface PlaylistItem {
  title: string;
  videoId: string;
}

export async function fetchPlaylistItems(playlistId: string, pageToken?: string): Promise<FetchPlaylistReturn> {
  const result = await fetchYoutube("playlistItems", {
    query: {
      part: "contentDetails,snippet",
      maxResults: "50",
      playlistId,
      ...(pageToken ? { pageToken } : {}),
    },
  });
  return {
    nextPageToken: result.nextPageToken,
    items: result.items.map((item: any) => ({
      title: item.snippet.title,
      videoId: item.contentDetails.videoId,
    })),
  };
}
