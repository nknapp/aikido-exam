import { type Component, createSignal, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { type SpeechPack } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { ExamScroll } from "@/components/solid/organisms/Reader/ExamScroll.tsx";
import { IconAutoMode, IconPause, IconPlay, IconSkipNext, IconSkipPrevious } from "@/icons";

import { createPlayer } from "@/components/solid/organisms/Reader/createPlayer.ts";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { type Speed, SpeedButton } from "@/components/solid/organisms/Reader/SpeedButton.tsx";

export const Reader: Component<{ dojoInfo: DojoInfo; speechPack: SpeechPack }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });

  const { lastTechnique, nextTechnique, skipNext, skipPrevious, playerLoaded, stop, play, playing } = createPlayer(
    () => props.speechPack,
    techniques,
  );

  return (
    <div class={"h-full flex flex-col gap-4"}>
      <Suspense fallback={"Loading"}>
        <Player
          playing={playing()}
          onClickPlay={async () => {
            await play(nextTechnique() ?? techniques()[0]);
          }}
          onClickStop={async () => {
            await stop();
          }}
          onClickNext={() => skipNext()}
          onClickPrevious={() => skipPrevious()}
          ready={playerLoaded()}
        />
        <ExamScroll techniques={techniques()} lastTechnique={lastTechnique()} nextTechnique={nextTechnique()} />
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
  const [autoPlay, setAutoPlay] = createSignal(false);
  const [speed, setSpeed] = createSignal<Speed>("normal");
  return (
    <>
      <div class={"grid grid-cols-4 gap-4"}>
        <SimpleButton
          label={"Previous"}
          hideLabel={true}
          size="large"
          icon={IconSkipPrevious}
          disabled={!props.ready}
          onClick={props.onClickPrevious}
        />
        <SimpleButton
          class={"col-span-2"}
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
      <div class={"grid grid-cols-2 gap-4 hidden"}>
        TODO: Implement auto-play
        <CheckButton
          size="small"
          icon={IconAutoMode}
          label={"Autoplay"}
          value={autoPlay()}
          onChange={setAutoPlay}
          disabled={!props.ready}
        />
        <SpeedButton size={"small"} disabled={!autoPlay() && !props.ready} value={speed()} onChange={setSpeed} />
      </div>
    </>
  );
};
