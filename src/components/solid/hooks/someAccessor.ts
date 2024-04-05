import type { Accessor } from "solid-js";

export function someAccessor(...accessors: Array<Accessor<boolean | undefined | null>>): Accessor<boolean> {
  return () => accessors.some((accessor) => accessor());
}
