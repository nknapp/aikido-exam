import { type Component, createSignal, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { loadSpeechPackPlayer } from "@/core";
import { playArrayBuffer } from "@/adapters/playArrayBuffer";
import speechPack from "@/data/speechpacks/default";
import { SINGLE_DIRECTION, type Technique } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { ExamScroll } from "@/components/solid/organisms/Reader/ExamScroll.tsx";
import { IconAutoMode, IconPause, IconPlay, IconSkipNext, IconSkipPrevious } from "@/icons";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { type Speed, SpeedButton } from "@/components/solid/organisms/Reader/SpeedButton.tsx";

export const Reader: Component<{ dojoInfo: DojoInfo }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });
  const [playing, setPlaying] = createSignal(false);
  const [player] = createResource(
    async () => {
      const speechPackPlayer = await loadSpeechPackPlayer(speechPack, playArrayBuffer);
      return {
        play: async (technique: Technique) => {
          setPlaying(true);
          if (technique.direction === SINGLE_DIRECTION) {
            await speechPackPlayer.play([technique.execution, technique.attack, technique.defence]);
          } else {
            await speechPackPlayer.play([
              technique.execution,
              technique.attack,
              technique.defence,
              technique.direction,
            ]);
          }
          setPlaying(false);
        },
        stop: async () => speechPackPlayer.stop(),
      };
    },
    {
      initialValue: { play: async () => {}, stop: async () => {} },
    },
  );

  return (
    <div class={"flex flex-col gap-4"}>
      <Suspense fallback={"Loading"}>
        <Player player={player()} techniques={techniques()} playing={playing()} />
        <ExamScroll class={"h-[40vh]"} techniques={techniques()} currentTechnique={techniques()[0]} />
      </Suspense>
    </div>
  );
};

const Player: Component<{
  player: { play: (technique: Technique) => Promise<void>; stop: () => Promise<void> };
  techniques: Technique[];
  playing: boolean;
}> = (props) => {
  const [autoPlay, setAutoPlay] = createSignal(false);
  const [speed, setSpeed] = createSignal<Speed>("normal");
  return (
    <>
      <div class={"grid grid-cols-3 gap-4"}>
        <SimpleButton size="large" icon={IconSkipPrevious} />
        <SimpleButton
          size="large"
          onClick={() => (props.playing ? props.player.stop() : props.player.play(props.techniques[0]))}
          icon={props.playing ? IconPause : IconPlay}
        />
        <SimpleButton size="large" icon={IconSkipNext} />
      </div>
      <div class={"grid grid-cols-2 gap-4"}>
        <CheckButton size="small" icon={IconAutoMode} label={"Autoplay"} value={autoPlay()} onChange={setAutoPlay} />
        <SpeedButton disabled={!autoPlay()} value={speed()} onChange={setSpeed} />
      </div>
    </>
  );
};
