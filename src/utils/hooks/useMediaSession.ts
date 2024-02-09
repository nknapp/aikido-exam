import { useEffect } from "react";
import silence from "src/assets/audio/silence.mp3";
import { useMediaSessionActionHandler } from "./useMediaSessionActionHandler";

const chromeWorkAroundElement = document.createElement("audio");
chromeWorkAroundElement.id = "mediaSessionWorkaround";
chromeWorkAroundElement.src = silence;
chromeWorkAroundElement.loop = true;
document.body.append(chromeWorkAroundElement);

interface UseMediaSessionArgs {
  title: string;
  playing: boolean;
  onPlayEvent: () => void;
  onStopEvent: () => void;
}

function useMediaSession({ title, playing, onPlayEvent, onStopEvent }: UseMediaSessionArgs): void {
  useEffect(() => {
    if (playing) {
      chromeWorkAroundElement.play();
      navigator.mediaSession.playbackState = "playing";
    } else {
      chromeWorkAroundElement.pause();
      navigator.mediaSession.playbackState = "paused";
    }
  }, [playing]);

  useMediaSessionActionHandler("play", onPlayEvent);
  useMediaSessionActionHandler("pause", onStopEvent);

  useEffect(() => {
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
    });
  }, [title]);
}

export const useMediaSessionIfPresent =
  "mediaSession" in navigator
    ? useMediaSession
    : function useMockMediaSession() {
        /* noop */
      };
