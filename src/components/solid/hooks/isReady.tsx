import { createSignal, onMount } from "solid-js";

export function isReady() {
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    setReady(true);
  });
  return ready;
}
