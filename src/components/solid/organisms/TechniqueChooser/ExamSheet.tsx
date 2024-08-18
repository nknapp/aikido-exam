import { type Component, createMemo, For, Match, Show, Switch } from "solid-js";
import { type BaseTechnique, SINGLE_DIRECTION, type Technique, type YoutubeLink } from "$core/model";
import { ForEntries } from "./ForEntries.tsx";
import { t } from "@/i18n";
import { youtubeEnabled } from "$core/store/youtube.ts";
import { usePersistentStore } from "@/components/solid/hooks/usePersistentStore.ts";
import { YoutubePlayButton } from "@/components/solid/atoms/YoutubePlayButton.tsx";
import { resolveYoutubeLinks } from "@/utils/resolveYoutubeLinks.ts";
import { buildTechniqueTree } from "$core/buildExamTable/buildExamTable.ts";

export interface ExamSheetProps {
  techniques: Technique[];
}

export const ExamSheet: Component<ExamSheetProps> = (props) => {
  const examTable = createMemo(() =>
    buildTechniqueTree(props.techniques, (technique) => {
      return technique;
    }),
  );
  return (
    <div>
      <ForEntries object={examTable()}>
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
  directions: Record<string, BaseTechnique>;
}

const ShowDirections: Component<DirectionsProps> = (props) => {
  const names = createMemo(() => Object.keys(props.directions));
  const singleDirection = createMemo(() => {
    return names().length === 1 && names()[0] === SINGLE_DIRECTION;
  });
  return (
    <Switch>
      <Match when={singleDirection()}>
        <YoutubeLink technique={props.directions[SINGLE_DIRECTION]} />
      </Match>
      <Match when={!singleDirection()}>
        <span class={"text-sm"}>
          (
          <ForEntries object={props.directions} separator={", "}>
            {(direction, metadata) => {
              return (
                <span>
                  {direction}
                  <YoutubeLink technique={metadata} />
                </span>
              );
            }}
          </ForEntries>
          )
        </span>
      </Match>
    </Switch>
  );
};

const YoutubeLink: Component<{ technique: BaseTechnique }> = (props) => {
  const showYoutube = usePersistentStore(youtubeEnabled, false);
  const youtube = resolveYoutubeLinks(props.technique);
  return (
    <Show when={showYoutube()}>
      <span class={"print:hidden"}>
        <For each={youtube}>{(video) => <YoutubePlayButton type={"icon"} class={"inline mx-2"} link={video} />}</For>
      </span>
    </Show>
  );
};
