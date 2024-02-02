import { fetchYoutube } from "./fetch-youtube";

interface FetchPlaylistReturn {
  items: PlaylistItem[];
}

interface PlaylistItem {
  title: string;
  videoId: string;
}

export async function fetchPlaylistItems(playlistId: string): Promise<FetchPlaylistReturn> {
  const result = await fetchYoutube("playlistItems", {
    query: {
      part: "contentDetails,snippet",
      maxResults: "50",
      playlistId,
    },
  });

  return {
    items: result.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.contentDetails.videoId,
    })),
  };
}
