import { type Component, createSignal, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { type SpeechPack } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { ExamScroll } from "@/components/solid/organisms/Reader/ExamScroll.tsx";
import { IconAutoMode, IconPause, IconPlay, IconSkipNext, IconSkipPrevious } from "@/icons";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { type Speed, SpeedButton } from "@/components/solid/organisms/Reader/SpeedButton.tsx";
import { createPlayer } from "@/components/solid/organisms/Reader/createPlayer.ts";

export const Reader: Component<{ dojoInfo: DojoInfo; speechPack: SpeechPack }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });

  const { lastTechnique, playerLoaded, stop, play, playing } = createPlayer(() => props.speechPack);

  return (
    <div class={"flex flex-col gap-4"}>
      <Suspense fallback={"Loading"}>
        <Player
          playing={playing()}
          onClickPlay={() => play(techniques()[0])}
          onClickStop={stop}
          ready={playerLoaded()}
        />
        <ExamScroll class={"h-[40vh]"} techniques={techniques()} lastTechnique={lastTechnique()} />
      </Suspense>
    </div>
  );
};

const Player: Component<{
  playing: boolean;
  ready?: boolean;
  onClickPlay(): void;
  onClickStop(): void;
}> = (props) => {
  const [autoPlay, setAutoPlay] = createSignal(false);
  const [speed, setSpeed] = createSignal<Speed>("normal");
  return (
    <>
      <div class={"grid grid-cols-3 gap-4"}>
        <SimpleButton
          label={"Previous"}
          hideLabel={true}
          size="large"
          icon={IconSkipPrevious}
          disabled={!props.ready}
        />
        <SimpleButton
          disabled={!props.ready}
          size="large"
          onClick={() => (props.playing ? props.onClickStop() : props.onClickPlay())}
          label={"Play"}
          hideLabel={true}
          icon={props.playing ? IconPause : IconPlay}
        />
        <SimpleButton label={"Next"} hideLabel={true} size="large" icon={IconSkipNext} disabled={!props.ready} />
      </div>
      <div class={"grid grid-cols-2 gap-4"}>
        <CheckButton
          size="small"
          icon={IconAutoMode}
          label={"Autoplay"}
          value={autoPlay()}
          onChange={setAutoPlay}
          disabled={!props.ready}
        />
        <SpeedButton disabled={!autoPlay() && !props.ready} value={speed()} onChange={setSpeed} />
      </div>
    </>
  );
};
