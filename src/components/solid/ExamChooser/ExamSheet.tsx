import { type Component, createMemo, For, type JSX } from "solid-js";
import { SINGLE_DIRECTION, type Technique, type TechniqueMetadata } from "$core/model";
import { buildExamTable } from "$core/buildExamTable";

export interface ExamSheetProps {
  techniques: Technique[];
}

interface RenderGroupsProps<T> {
  object: Record<string, T>;
  separator?: JSX.Element;
  children: (key: string, value: T) => JSX.Element;
}

function ForEntries<T>(props: RenderGroupsProps<T>): JSX.Element {
  return (
    <For each={Object.entries(props.object)}>
      {(entry, index) => {
        if (index() > 0) {
          return [props.separator, props.children(entry[0], entry[1])];
        }
        return props.children(entry[0], entry[1]);
      }}
    </For>
  );
}

interface DirectionsProps {
  directions: Record<string, TechniqueMetadata>;
}

const ShowDirections: Component<DirectionsProps> = (props) => {
  const keys = Object.keys(props.directions);
  if (keys.length === 1 && keys[0] === SINGLE_DIRECTION) {
    return null;
  }
  return (
    <span class={"text-sm text-secondary-dark"}>
      ( <For each={keys}>{(key, index) => (index() > 0 ? [", ", <span>{key}</span>] : <span>{key}</span>)}</For> )
    </span>
  );
};

export const ExamSheet: Component<ExamSheetProps> = (props) => {
  const table = createMemo(() => buildExamTable(props.techniques));
  return (
    <div>
      <ForEntries object={table()}>
        {(execution, attacks) => (
          <div>
            <h2>{execution}</h2>
            <div>
              <ForEntries object={attacks}>
                {(attack, defences) => (
                  <div class={"grid grid-cols-3 mt-4"}>
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
    </div>
  );
};
