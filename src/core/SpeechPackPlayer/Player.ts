import { type ResolvedSpeechPack, resolveSpeechPack } from "$core/SpeechPackPlayer/resolveSpeechPack";
import type { SpeechFile, SpeechPack } from "$core/model";
import { playArrayBuffer } from "$core/playArrayBuffer";

export async function loadSpeechPackPlayer(speechPack: SpeechPack) {
  return new SpeechPackPlayer(resolveSpeechPack(speechPack));
}

class SpeechPackPlayer {
  private readonly speechPack: Promise<ResolvedSpeechPack>;
  private abortController: AbortController;
  constructor(speechPack: Promise<ResolvedSpeechPack>) {
    this.abortController = new AbortController();
    this.speechPack = speechPack;
  }

  async play(audioFiles: SpeechFile[]): Promise<void> {
    this.abortController.abort();
    const abortController = new AbortController();
    this.abortController = abortController;
    for (const file of audioFiles) {
      if (abortController.signal.aborted) return;
      await this.playSingle(file, abortController);
    }
  }

  async stop() {
    this.abortController.abort();
  }

  private async playSingle(audioFile: SpeechFile, abortController: AbortController) {
    const loadedSpeechPack = await this.speechPack;
    await playArrayBuffer(loadedSpeechPack[audioFile], { abortSignal: abortController.signal });
  }
}
