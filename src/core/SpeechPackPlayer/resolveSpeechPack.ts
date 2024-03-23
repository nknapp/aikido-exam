import type { SpeechPack } from "$core/slots";
import { logWarn } from "$core/utils/logger.ts";

export type ResolvedSpeechPack = Record<keyof SpeechPack, ArrayBuffer>;

export async function resolveSpeechPack(speechPack: SpeechPack): Promise<ResolvedSpeechPack> {
  return mapResolvedValues(speechPack, async (value) => {
    for (let i = 0; i < 2; i++) {
      try {
        const url = new URL(value, window.location.href);
        const response = await fetch(url);
        return await response.arrayBuffer();
      } catch (error) {
        logWarn("Retrying after ", error);
      }
    }
    const url = new URL(value, window.location.href);
    const response = await fetch(url);
    return await response.arrayBuffer();
  });
}

async function mapResolvedValues<K extends string, V, T>(
  input: Record<K, V>,
  mapper: (value: V) => Promise<T>,
): Promise<Record<K, T>> {
  const entries = Object.entries(input) as [K, V][];
  const resolved = await Promise.all(entries.map(async ([key, value]) => [key, await mapper(value)]));
  return Object.fromEntries(resolved);
}
