import type { YoutubeLink } from "$core/model";
import { renderPlayerContainer } from "@/YoutubePlayer/PlayerContainer.tsx";

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

async function createPlayer(): Promise<YoutubePlayer> {
  const container = await renderPlayerContainer();
  const { default: Player } = await import("youtube-player");
  const player = Player(container.htmlElement, {
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      rel: 0,
      autoplay: 0,
      modestbranding: 1,
    },
  });

  function updatePlayerSize() {
    player?.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", updatePlayerSize);
  updatePlayerSize();

  const result = {
    loadVideo(videoId: string) {
      return player.loadVideoById({ videoId });
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
      return new Promise<void>((resolve) => {
        player.on("stateChange", (event) => {
          if (event.data === 0) {
            // Video has ended
            resolve();
          }
        });
      });
    },
  };
  container.addEventListener("stop", () => {
    result.stop();
  });
  return result;
}
