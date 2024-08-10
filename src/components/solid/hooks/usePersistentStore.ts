import type { Atom } from "nanostores";
import { useStore } from "@nanostores/solid";
import { createEffect, createSignal, onMount } from "solid-js";

/**
 * Make hydration work for persistant atoms that use localStorage
 * @param atom
 * @param serverSideValue the value that the store has on the server-side. This is a workaround to make sure that the value changes if the serverside-value is changed
 */
export function usePersistentStore<T>(atom: Atom<T>, serverSideValue: T) {
  const store = useStore(atom);
  const [value, setValue] = createSignal<T>(serverSideValue);
  onMount(() => {
    setValue(store);
  });
  createEffect(() => {
    setValue(store);
  });
  return value;
}
