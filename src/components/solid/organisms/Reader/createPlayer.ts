import type { SpeechPack, Technique } from "$core/model";
import { type Accessor, createSignal, type Resource } from "solid-js";
import { SpeechPackPlayer } from "@/core";
import { createResource } from "solid-js";
import { loadSpeechPack } from "$core/playSpeechFile";

interface CreatePlayerReturn {
  play(technique: Technique): Promise<void>;
  playing: Accessor<boolean>;
  stop(): Promise<void>;
  playerLoaded: Resource<boolean>;
  lastTechnique: Accessor<Technique | null>;
}

export function createPlayer(speechPack: Accessor<SpeechPack>): CreatePlayerReturn {
  const [playerLoaded] = createResource(async () => {
    await loadSpeechPack(speechPack());
    return true;
  });
  const [playing, setPlaying] = createSignal(false);

  const player = new SpeechPackPlayer();
  const [lastTechnique, setLastTechnique] = createSignal<Technique | null>(null);

  return {
    playing,
    playerLoaded,
    lastTechnique,
    async play(technique) {
      setPlaying(true);
      setLastTechnique(technique);
      await player.playTechnique(technique);
      setPlaying(false);
    },
    async stop() {
      await player.stop();
    },
  };
}
