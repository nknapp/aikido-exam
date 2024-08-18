import { youtubeEnabled } from "$core/store/youtube.ts";

export interface YoutubeAdapter {
  loadVideoById(videoId: string, startSeconds?: number, endSeconds?: number): Promise<void>;
  playVideo(): Promise<void>;
  stopVideo(): Promise<void>;
  setSize(width: number, height: number): Promise<object>;
  waitForStop(): Promise<void>;
  getCurrentTime(): Promise<number>;
  destroy(): Promise<void>;
}

export async function loadYoutubeAdapter(container: HTMLDivElement): Promise<YoutubeAdapter> {
  if (!youtubeEnabled.get()) {
    throw new Error("No youtube consent was given.");
  }
  const { default: Player } = await import("youtube-player");
  const player = Player(container, {
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      rel: 0,
      autoplay: 0,
      modestbranding: 1,
      controls: 1,
    },
  });

  return {
    playVideo: player.playVideo,
    loadVideoById(videoId, startSeconds, endSeconds) {
      return player.loadVideoById({ videoId, startSeconds, endSeconds });
    },
    stopVideo: player.stopVideo,
    setSize: player.setSize,
    waitForStop() {
      return new Promise<void>((resolve) => {
        player.on("stateChange", (event) => {
          if (event.data === 0) {
            // Video has ended
            resolve();
          }
        });
      });
    },
    getCurrentTime: player.getCurrentTime,
    destroy: player.destroy,
  };
}
