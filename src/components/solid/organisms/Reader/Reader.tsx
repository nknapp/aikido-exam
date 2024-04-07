import { type Component, createEffect, createSignal, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { buildTechniqueId, type SpeechPack, type Technique } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { ExamScroll } from "@/components/solid/organisms/Reader/ExamScroll.tsx";
import { IconPause, IconPlay, IconSkipNext, IconSkipPrevious } from "@/icons";

import { createPlayer } from "@/components/solid/organisms/Reader/createPlayer.ts";

export const Reader: Component<{ dojoInfo: DojoInfo; speechPack: SpeechPack }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });

  const { lastTechnique, playerLoaded, stop, play, playing } = createPlayer(() => props.speechPack);
  const [nextTechnique, setNextTechnique] = createSignal<Technique | null>(null);

  createEffect(() => {
    setNextTechnique(techniques()[0]);
  });

  function nextTechniqueBy(step: number) {
    const next = nextTechnique();
    if (next == null) {
      setNextTechnique(techniques()[0]);
      return;
    }
    const nextTechniqueId = buildTechniqueId(next);
    const currentIndex = techniques().findIndex((technique) => buildTechniqueId(technique) === nextTechniqueId);
    const newIndex = currentIndex + step;
    if (newIndex >= 0 && newIndex < techniques().length) {
      setNextTechnique(techniques()[newIndex]);
    }
  }

  return (
    <div class={"flex flex-col gap-4"}>
      <Suspense fallback={"Loading"}>
        <Player
          playing={playing()}
          onClickPlay={async () => {
            await play(nextTechnique() ?? techniques()[0]);
            nextTechniqueBy(1);
          }}
          onClickStop={async () => {
            await stop();
            setTimeout(() => setNextTechnique(lastTechnique()), 10);
          }}
          onClickNext={() => nextTechniqueBy(1)}
          onClickPrevious={() => nextTechniqueBy(-1)}
          ready={playerLoaded()}
        />
        <ExamScroll
          class={"h-[60vh]"}
          techniques={techniques()}
          lastTechnique={lastTechnique()}
          nextTechnique={nextTechnique()}
        />
      </Suspense>
    </div>
  );
};

const Player: Component<{
  playing: boolean;
  ready?: boolean;
  onClickPlay(): void;
  onClickStop(): void;
  onClickNext(): void;
  onClickPrevious(): void;
}> = (props) => {
  /* TODO: Implement auto-play */
  // const [autoPlay, setAutoPlay] = createSignal(false);
  // const [speed, setSpeed] = createSignal<Speed>("normal");
  return (
    <>
      <div class={"grid grid-cols-3 gap-4"}>
        <SimpleButton
          label={"Previous"}
          hideLabel={true}
          size="large"
          icon={IconSkipPrevious}
          disabled={!props.ready}
          onClick={props.onClickPrevious}
        />
        <SimpleButton
          disabled={!props.ready}
          size="large"
          onClick={() => (props.playing ? props.onClickStop() : props.onClickPlay())}
          label={"Play"}
          hideLabel={true}
          icon={props.playing ? IconPause : IconPlay}
        />
        <SimpleButton
          label={"Next"}
          hideLabel={true}
          size="large"
          icon={IconSkipNext}
          disabled={!props.ready}
          onClick={props.onClickNext}
        />
      </div>
      {/* TODO: Implement auto-play */}
      {/*<div class={"grid grid-cols-2 gap-4"}>*/}
      {/*  <CheckButton*/}
      {/*    size="small"*/}
      {/*    icon={IconAutoMode}*/}
      {/*    label={"Autoplay"}*/}
      {/*    value={autoPlay()}*/}
      {/*    onChange={setAutoPlay}*/}
      {/*    disabled={!props.ready}*/}
      {/*  />*/}
      {/*  <SpeedButton disabled={!autoPlay() && !props.ready} value={speed()} onChange={setSpeed} />*/}
      {/*</div>*/}
    </>
  );
};
