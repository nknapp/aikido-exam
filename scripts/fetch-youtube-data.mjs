/// <reference types="vite/client" />

import { fetchPlaylistItems } from "./fetch-youtube-data/fetch-playlist-items";
import { fetchVideoMetadata } from "./fetch-youtube-data/fetch-video-metadata";
import { keyBy } from "lodash";
import { fetchPlaylistItemsWithDuration } from "./fetch-youtube-data/fetchPlaylistItemsWithDuration";

const playlists = {
  kyu5: "PLll6vwb_Q_aPG4GR7b220rWrx1LpZZLJZ",
  kyu4: "PLll6vwb_Q_aOq4IQ468wVSDrh2fqlG_4g",
  kyu3: "PLll6vwb_Q_aOVGnf-eUqsSRZ9qP00XhtG",
  kyu2: "PLll6vwb_Q_aOQqAUD5NE7vgCP1pI49wGd",
  kyu1: "PLll6vwb_Q_aPG53BTwYxuB_Ofn-32Z3UK",
};

let result = {};
for (const [name, playlistId] of Object.entries(playlists)) {
  const playlistItems = await fetchPlaylistItemsWithDuration(playlistId);
  result[name] = playlistItems.map((item) => ({ ...item, list: name }));
}

console.log(JSON.stringify(result, null, 2));

export {};
