import { persistentAtom } from "@nanostores/persistent";
import { computed } from "nanostores";

const store = persistentAtom<"true" | "false">("youtubeEnabled", "false");

export const youtubeEnabled = computed(store, (value) => value === "true");

export function setYoutubeEnabled(enabled: boolean): void {
  store.set(enabled ? "true" : "false");
}
