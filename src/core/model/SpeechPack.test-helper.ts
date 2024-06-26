import type { SpeechPack } from "$core/model";
import { attacks, defences, executions, directions } from "$core/model/index.ts";

export function createMockSpeechPack(partial: Partial<SpeechPack> = {}): SpeechPack {
  const keys: (keyof SpeechPack)[] = [...attacks, ...defences, ...executions, ...directions];
  const defaults = Object.fromEntries(keys.map((key) => [key, `/speech/${forUrl(key)}`])) as SpeechPack;
  return {
    ...defaults,
    ...partial,
  };
}

function forUrl(file: keyof SpeechPack): string {
  return file.replace(/ /g, "_");
}
