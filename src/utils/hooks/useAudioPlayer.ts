import { MutableRefObject, useCallback, useRef, useState } from "react";
import { AudioFile } from "../../exam-tables/audio-files";
import { relevantTechniqueParts } from "../relevant-technique-parts";
import { playAudioFile } from "../playAudioFile";
import { Technique } from "../../model/Technique";

interface UseAudioPlayerResult {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  playing: boolean;
  play(technique: Technique, lastTechnique?: Technique): Promise<void>;
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
    [playingRef, setPlaying],
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
    async play(technique: Technique, lastTechnique?: Technique): Promise<void> {
      await playAudioFiles(relevantTechniqueParts(technique, lastTechnique));
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
