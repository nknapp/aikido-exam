import { type Component, For, lazy } from "solid-js";
import { SINGLE_DIRECTION, type Technique, type TechniqueMetadata } from "$core/model";
import { ForEntries } from "./ForEntries.tsx";
import { buildExamTable } from "$core/buildExamTable";
import { t } from "@/i18n";
import { insertBetweenElements } from "@/utils/insertBetweenElements.ts";
import { youtubeEnabled } from "$core/store/youtube.ts";
import { usePersistentStore } from "@/components/solid/hooks/usePersistentStore.ts";

const YoutubePlayer = lazy(() =>
  import("@/components/solid/atoms/YoutubePlayer.tsx").then(({ YoutubePlayer }) => ({ default: YoutubePlayer })),
);

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
  const showYoutube = usePersistentStore(youtubeEnabled, false);
  const names = Object.keys(props.directions);
  if (names.length === 1 && names[0] === SINGLE_DIRECTION) {
    return null;
  }
  const withVideos = names.map((item) => {
    return (
      <span>
        {item}
        {showYoutube() && <YoutubeLink metadata={props.directions[item]} />}
      </span>
    );
  });
  return <span class={"text-sm text-secondary"}>( {insertBetweenElements(withVideos, ", ").flat()} )</span>;
};

// WIP
const YoutubeLink: Component<{ metadata: TechniqueMetadata }> = (props) => {
  const youtube =
    props.metadata.youtube == null
      ? []
      : Array.isArray(props.metadata.youtube)
        ? props.metadata.youtube
        : [props.metadata.youtube];
  return (
    <span class={"print:hidden"}>
      <For each={youtube}>{(video) => <YoutubePlayer type={"icon"} class={"inline mx-2"} link={video} />}</For>
    </span>
  );
};
