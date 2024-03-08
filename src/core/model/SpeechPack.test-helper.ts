import { SpeechPack } from "$core/model/SpeechPack";
import { attacks, defences, executions, directions } from "$core/model";

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
