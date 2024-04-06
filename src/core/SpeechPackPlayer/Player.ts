import { type ResolvedSpeechPack, resolveSpeechPack } from "$core/SpeechPackPlayer/resolveSpeechPack";
import type { PlayArrayBuffer, SpeechFile, SpeechPack } from "$core/slots";

export async function loadSpeechPackPlayer(speechPack: SpeechPack, playArrayBuffer: PlayArrayBuffer) {
  return new SpeechPackPlayer(resolveSpeechPack(speechPack), playArrayBuffer);
}

class SpeechPackPlayer {
  private readonly speechPack: Promise<ResolvedSpeechPack>;
  private readonly playArrayBuffer: PlayArrayBuffer;
  private abortController: AbortController;
  constructor(speechPack: Promise<ResolvedSpeechPack>, playArrayBuffer: PlayArrayBuffer) {
    this.abortController = new AbortController();
    this.speechPack = speechPack;
    this.playArrayBuffer = playArrayBuffer;
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
    await this.playArrayBuffer(loadedSpeechPack[audioFile], { abortSignal: abortController.signal });
  }
}
