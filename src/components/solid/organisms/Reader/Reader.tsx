import { type Component, createSignal, For, lazy, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { type SpeechPack, type YoutubeLink } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { ExamScroll } from "@/components/solid/organisms/Reader/ExamScroll.tsx";
import { IconAutoMode, IconPlay, IconSkipNext, IconSkipPrevious, IconStop } from "@/icons";

import { createPlayer } from "@/components/solid/organisms/Reader/createPlayer.ts";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { type Speed, SpeedButton } from "@/components/solid/organisms/Reader/SpeedButton.tsx";
import { type DelayControl, DelayIndicator } from "@/components/solid/atoms/DelayIndicator.tsx";
import { useStore } from "@nanostores/solid";
import { youtubeEnabled } from "$core/store/youtube.ts";

const YoutubePlayer = lazy(() =>
  import("@/components/solid/atoms/YoutubePlayer.tsx").then(({ YoutubePlayer }) => ({ default: YoutubePlayer })),
);

export const Reader: Component<{ dojoInfo: DojoInfo; speechPack: SpeechPack }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });
  const [delayControl, setDelayControl] = createSignal<DelayControl>();

  const {
    lastTechnique,
    nextTechnique,
    skipNext,
    skipPrevious,
    playerLoaded,
    stop,
    play,
    playing,
    setAutoPlay,
    autoPlay,
  } = createPlayer(
    () => props.speechPack,
    techniques,
    async (seconds, abortSignal) => {
      await delayControl()?.animateDelay(seconds, abortSignal);
    },
  );

  return (
    <div class={"h-full flex flex-col gap-4"}>
      <Suspense fallback={"Loading"}>
        <Player
          playing={playing()}
          onClickPlay={async () => {
            await play();
          }}
          onClickStop={async () => {
            setAutoPlay(false);
            await stop();
          }}
          onClickNext={() => skipNext()}
          onClickPrevious={() => skipPrevious()}
          ready={playerLoaded()}
          onClickAutoPlay={() => setAutoPlay(!autoPlay())}
          autoPlayEnabled={autoPlay()}
          youtube={youtubeLinks(lastTechnique()?.metadata?.youtube)}
        />
        <DelayIndicator setDelayControl={setDelayControl} disabled={!autoPlay()} />
        <ExamScroll
          class={"flex-1"}
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
  autoPlayEnabled: boolean;
  onClickAutoPlay(): void;
  youtube: YoutubeLink[];
}> = (props) => {
  const [speed, setSpeed] = createSignal<Speed>("normal");
  const showYoutube = useStore(youtubeEnabled);
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
          label={props.playing ? "Stop" : "Play"}
          hideLabel={true}
          icon={props.playing ? IconStop : IconPlay}
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
      <div class={"grid grid-cols-2 gap-4"}>
        <CheckButton
          size="small"
          icon={IconAutoMode}
          label={"Autoplay"}
          value={props.autoPlayEnabled}
          onChange={props.onClickAutoPlay}
          disabled={!props.ready}
        />
        {showYoutube() && (
          <div class={"h-8 w-full flex"}>
            <For each={props.youtube}>
              {(link) => {
                return <YoutubePlayer class={"flex-1"} link={link} />;
              }}
            </For>
          </div>
        )}
        {/*TODO: Implement speed */}
        <SpeedButton
          class={"hidden"}
          size={"small"}
          disabled={!props.autoPlayEnabled && !props.ready}
          value={speed()}
          onChange={setSpeed}
        />
      </div>
    </>
  );
};

function youtubeLinks(links: YoutubeLink[] | YoutubeLink | undefined): YoutubeLink[] {
  if (Array.isArray(links)) return links;
  return links ? [links] : [];
}
