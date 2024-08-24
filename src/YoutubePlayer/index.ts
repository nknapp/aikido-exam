import { renderPlayerContainer } from "@/YoutubePlayer/PlayerContainer.tsx";
import { setYoutubeEnabled, youtubeEnabled } from "$core/store/youtube.ts";
import { loadYoutubeAdapter } from "@/YoutubePlayer/adapter.ts";
import type { ResolvedYoutubeLink } from "@/utils/resolveYoutubeLinks.ts";
import { askYoutubeConsent } from "@/YoutubePlayer/askYoutubeConsent.tsx";

export interface YoutubePlayer {
  loadVideo(video: ResolvedYoutubeLink): Promise<void>;
  play(): Promise<void>;
  stop(): Promise<void>;
  waitForStop(): Promise<void>;
}

export async function playVideo(youtubeLink: ResolvedYoutubeLink): Promise<void> {
  const consent = youtubeEnabled.get() || (await askYoutubeConsent());
  if (!consent) return;
  setYoutubeEnabled(consent);
  const player = await getOrCreatePlayer();
  await player.loadVideo(youtubeLink);
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

  const result: YoutubePlayer = {
    loadVideo(video: ResolvedYoutubeLink) {
      container.setVideo(video);
      return player.loadVideoById(video.videoId, video.startSeconds, video.endSeconds);
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
