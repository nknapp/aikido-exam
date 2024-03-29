import { For, type JSX } from "solid-js";

interface ForEntries<T> {
  object: Record<string, T>;
  separator?: JSX.Element;
  children: (key: string, value: T) => JSX.Element;
}

export function ForEntries<T>(props: ForEntries<T>): JSX.Element {
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
