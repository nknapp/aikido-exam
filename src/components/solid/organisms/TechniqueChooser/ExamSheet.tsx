import { type Component, createMemo, For, Match, Show, Switch } from "solid-js";
import { SINGLE_DIRECTION, type Technique, type TechniqueMetadata, type YoutubeLink } from "$core/model";
import { ForEntries } from "./ForEntries.tsx";
import { buildExamTable } from "$core/buildExamTable";
import { t } from "@/i18n";
import { youtubeEnabled } from "$core/store/youtube.ts";
import { usePersistentStore } from "@/components/solid/hooks/usePersistentStore.ts";
import { YoutubePlayButton } from "@/components/solid/atoms/YoutubePlayButton.tsx";

export interface ExamSheetProps {
  techniques: Technique[];
}

export const ExamSheet: Component<ExamSheetProps> = (props) => {
  return (
    <div>
      <ForEntries object={buildExamTable(props.techniques)}>
        {(execution, attacks) => (
          <div>
            <h2 class={"border-b border-1 border-secondary break-after-avoid"}>{execution}</h2>
            <div>
              <ForEntries object={attacks}>
                {(attack, defences) => (
                  <div class={"grid grid-cols-3 mt-4 break-inside-avoid"}>
                    <div>{attack}</div>
                    <div class={"col-span-2 md:flex flex-wrap"}>
                      <ForEntries object={defences}>
                        {(defence, directions) => (
                          <div class={"md:me-6"}>
                            <span>{defence}</span>
                            &nbsp;
                            <ShowDirections directions={directions} />
                          </div>
                        )}
                      </ForEntries>
                    </div>
                  </div>
                )}
              </ForEntries>
            </div>
          </div>
        )}
      </ForEntries>
      <div class={"mt-8 border-secondary border-t text-sm hidden print:block"}>
        {t("examChooser.created-by", { url: window.location.origin })}
      </div>
    </div>
  );
};

interface DirectionsProps {
  directions: Record<string, TechniqueMetadata>;
}

const ShowDirections: Component<DirectionsProps> = (props) => {
  const names = createMemo(() => Object.keys(props.directions));
  const singleDirection = createMemo(() => {
    return names().length === 1 && names()[0] === SINGLE_DIRECTION;
  });
  return (
    <Switch>
      <Match when={singleDirection()}>
        <YoutubeLink metadata={props.directions[SINGLE_DIRECTION]} />
      </Match>
      <Match when={!singleDirection()}>
        <ForEntries object={props.directions} separator={","}>
          {(direction, metadata) => {
            return (
              <span>
                {direction}
                <YoutubeLink metadata={metadata} />
              </span>
            );
          }}
        </ForEntries>
      </Match>
    </Switch>
  );
};

const YoutubeLink: Component<{ metadata: TechniqueMetadata }> = (props) => {
  const showYoutube = usePersistentStore(youtubeEnabled, false);
  const youtube =
    props.metadata.youtube == null
      ? []
      : Array.isArray(props.metadata.youtube)
        ? props.metadata.youtube
        : [props.metadata.youtube];
  return (
    <Show when={showYoutube()}>
      <span class={"print:hidden"}>
        <For each={youtube}>{(video) => <YoutubePlayButton type={"icon"} class={"inline mx-2"} link={video} />}</For>
      </span>
    </Show>
  );
};
