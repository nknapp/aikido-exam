import { Announcement } from "../resolve-exam-tables";
import { MutableRefObject, useCallback, useRef, useState } from "react";
import { AudioFile } from "../../exam-tables/audio-files";
import { relevantQueryParts } from "../relevant-query-parts";
import { playAudioFile } from "../playAudioFile";

interface UseAudioPlayerResult {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  playing: boolean;
  play(query: Announcement, lastQuery?: Announcement): Promise<void>;
  stop(): void;
}

export function useAudioPlayer(): UseAudioPlayerResult {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { playing, playingRef, setPlaying } = usePlayingState();

  const playAudioFiles = useCallback(
    async (audioFiles: (AudioFile | undefined)[]) => {
      const audioElement = audioRef.current;
      if (audioElement == null) {
        throw new Error("<audio> does not exist yet.");
      }
      setPlaying(true);
      for (const file of audioFiles) {
        if (!playingRef.current) {
          return;
        }
        if (file != null) {
          await playAudioFile(audioElement, file);
        }
      }
      setPlaying(false);
    },
    [playingRef, setPlaying]
  );

  const stop = useCallback(() => {
    setPlaying(false);

    const audioElement = audioRef.current;
    if (audioElement == null) {
      throw new Error("<audio> does not exist yet.");
    }

    audioElement.pause();
    audioElement.src = "";
  }, [setPlaying]);

  return {
    async play(query: Announcement, lastQuery?: Announcement): Promise<void> {
      await playAudioFiles(relevantQueryParts(query, lastQuery));
    },
    audioRef,
    playing,
    stop,
  };
}

function usePlayingState(): {
  playing: boolean;
  playingRef: MutableRefObject<boolean>;
  setPlaying: (newValue: boolean) => void;
} {
  const playingRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  return {
    playing,
    setPlaying: useCallback((newValue: boolean) => {
      setPlaying(newValue);
      playingRef.current = newValue;
    }, []),
    playingRef,
  };
}
