import { type Component, For } from "solid-js";
import { SINGLE_DIRECTION, type Technique, type TechniqueMetadata } from "$core/model";
import { ForEntries } from "./ForEntries.tsx";
import { buildExamTable } from "$core/buildExamTable";
import { t } from "@/i18n";

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
  const keys = Object.keys(props.directions);
  if (keys.length === 1 && keys[0] === SINGLE_DIRECTION) {
    return null;
  }
  return (
    <span class={"text-sm text-secondary"}>
      ( <For each={keys}>{(key, index) => (index() > 0 ? [", ", <span>{key}</span>] : <span>{key}</span>)}</For> )
    </span>
  );
};