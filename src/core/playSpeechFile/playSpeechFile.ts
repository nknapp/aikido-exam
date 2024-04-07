import type { SpeechFile, SpeechPack } from "$core/model";
import { type ResolvedSpeechPack, resolveSpeechPack } from "$core/SpeechPackPlayer/resolveSpeechPack.ts";
import { playArrayBuffer } from "$core/playArrayBuffer";

let currentSpeechPack: ResolvedSpeechPack | null = null;

export async function playSpeechFile(file: SpeechFile, abortSignal: AbortSignal): Promise<void> {
  if (currentSpeechPack == null) throw new Error("No SpeechPack loaded");
  await playArrayBuffer(currentSpeechPack[file], { abortSignal });
}

export async function loadSpeechPack(speechPack: SpeechPack) {
  currentSpeechPack = await resolveSpeechPack(speechPack);
}
