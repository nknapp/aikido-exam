import { fetchPlaylistItems } from "./fetch-playlist-items";
import { keyBy } from "lodash";
import { fetchVideoMetadata } from "./fetch-video-metadata";

interface PlaylistItemWithDuration {
  title: string;
  videoId: string;
  durationSeconds: number;
}

export async function fetchPlaylistItemsWithDuration(playlistId: string): Promise<PlaylistItemWithDuration[]> {
  let page = await fetchSinglePage(playlistId);
  const items = [...page.items];
  while (page.nextPageToken != null) {
    page = await fetchSinglePage(playlistId, page.nextPageToken);
    items.push(...page.items);
  }
  return items;
}

export async function fetchSinglePage(
  playlistId: string,
  pageToken?: string,
): Promise<{ items: PlaylistItemWithDuration[]; nextPageToken?: string }> {
  const { items, nextPageToken } = await fetchPlaylistItems(playlistId, pageToken);
  const byVideoId = keyBy(items, "videoId");

  const videos = await fetchVideoMetadata(Object.keys(byVideoId).join(","));
  if (videos.length != items.length)
    throw new Error("bulk video call returned different length: " + videos.length + ", expected was " + items.length);

  const combinedItems: PlaylistItemWithDuration[] = videos.map((video, index) => {
    const playlistItem = items[index];
    if (playlistItem.videoId !== video.id) {
      throw new Error("Bulk video call returned different order of videos");
    }
    return {
      title: playlistItem.title,
      videoId: playlistItem.videoId,
      durationSeconds: video.durationSeconds,
    };
  });
  return { items: combinedItems, nextPageToken };
}
