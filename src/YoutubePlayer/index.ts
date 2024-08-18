import type { YoutubeLink } from "$core/model";
import { renderPlayerContainer } from "@/YoutubePlayer/PlayerContainer.tsx";
import { youtubeEnabled } from "$core/store/youtube.ts";
import { loadYoutubeAdapter } from "@/YoutubePlayer/adapter.ts";

export interface YoutubePlayer {
  loadVideo(videoId: string): Promise<void>;
  play(): Promise<void>;
  stop(): Promise<void>;
  waitForStop(): Promise<void>;
}

export async function playVideo(youtubeLink: YoutubeLink): Promise<void> {
  const player = await getOrCreatePlayer();
  await player.loadVideo(youtubeLink.videoId);
  await player.play();
  await player.waitForStop();
  await player.stop();
}

let cachedPlayer: Promise<YoutubePlayer> | null = null;

export function getOrCreatePlayer(): Promise<YoutubePlayer> {
  cachedPlayer = cachedPlayer ?? createPlayer();
  return cachedPlayer;
}

youtubeEnabled.subscribe((value) => {
  if (value) {
    getOrCreatePlayer();
  }
});

async function createPlayer(): Promise<YoutubePlayer> {
  const container = await renderPlayerContainer();
  const player = await loadYoutubeAdapter(container.htmlElement);

  function updatePlayerSize() {
    player?.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", updatePlayerSize);
  updatePlayerSize();

  const result = {
    loadVideo(videoId: string) {
      return player.loadVideoById(videoId);
    },
    async play() {
      await player.playVideo();
      container.setVisible(true);
    },
    async stop() {
      await player.stopVideo();
      container.setVisible(false);
    },
    async waitForStop() {
      await player.waitForStop();
    },
  };
  container.addEventListener("stop", () => {
    result.stop();
  });
  return result;
}
