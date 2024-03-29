import { type Component, For, type JSX } from "solid-js";
import { SINGLE_DIRECTION, type Table, type TechniqueMetadata } from "$core/model";

export interface ExamSheetProps {
  table: Table;
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
    <span class={"text-sm text-secondary"}>
      ( <For each={keys}>{(key, index) => (index() > 0 ? [", ", <span>{key}</span>] : <span>{key}</span>)}</For> )
    </span>
  );
};

export const ExamSheet: Component<ExamSheetProps> = (props) => {
  return (
    <div class={"border-b border-1 border-secondary pb-4"}>
      <ForEntries object={props.table}>
        {(execution, attacks) => (
          <div>
            <h2 class={"border-b border-1 border-secondary"}>{execution}</h2>
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
