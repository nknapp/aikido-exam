import type { SpeechPack, Technique } from "$core/model";
import { type Accessor, createMemo, createSignal, onCleanup, type Resource } from "solid-js";
import { createResource } from "solid-js";
import { loadSpeechPack } from "$core/playSpeechFile";
import { ExamPlayer } from "$core/ExamPlayer";

interface CreatePlayerReturn {
  play(): Promise<void>;
  playing: Accessor<boolean>;
  stop(): Promise<void>;
  skipNext(): Promise<void>;
  skipPrevious(): Promise<void>;
  setAutoPlay(enabled: boolean): void;
  autoPlay: Accessor<boolean>;
  playerLoaded: Resource<boolean>;
  lastTechnique: Accessor<Technique | null>;
  nextTechnique: Accessor<Technique | null>;
}

export function createPlayer(
  speechPack: Accessor<SpeechPack>,
  techniques: Accessor<Technique[]>,
  waitSeconds: (seconds: number) => Promise<void>,
): CreatePlayerReturn {
  const [playerLoaded] = createResource(async () => {
    await loadSpeechPack(speechPack());
    return true;
  });
  const [autoPlay, setAutoPlay] = createSignal(false);
  const [playing, setPlaying] = createSignal(false);

  const [lastTechnique, setLastTechnique] = createSignal<Technique | null>(null);
  const [nextTechnique, setNextTechnique] = createSignal<Technique | null>(null);

  const player = createMemo(() => {
    const examPlayer = new ExamPlayer(techniques(), {
      onStart: () => setPlaying(true),
      onStop: () => setPlaying(false),
      onAutoPlay: setAutoPlay,
      onUpdateNextTechnique: (technique) => setNextTechnique(technique),
      onUpdateLastTechnique: (technique) => setLastTechnique(technique),
      waitSeconds,
    });
    onCleanup(() => examPlayer.destroy());
    return examPlayer;
  });

  return {
    autoPlay,
    setAutoPlay(enabled: boolean) {
      player().setAutoPlay(enabled);
    },
    playing,
    playerLoaded,
    lastTechnique,
    nextTechnique,
    async play() {
      await player().play();
    },
    async stop() {
      await player().stop();
    },
    async skipPrevious() {
      await player().skipPrevious();
    },
    async skipNext() {
      await player().skipNext();
    },
  };
}
