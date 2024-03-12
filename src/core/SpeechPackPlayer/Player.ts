import { ResolvedSpeechPack, resolveSpeechPack } from "$core/SpeechPackPlayer/resolveSpeechPack";
import { PlayArrayBuffer, SpeechFile, SpeechPack } from "$core/slots";

export async function loadSpeechPackPlayer(speechPack: SpeechPack, playArrayBuffer: PlayArrayBuffer) {
  return new SpeechPackPlayer(resolveSpeechPack(speechPack), playArrayBuffer);
}

class SpeechPackPlayer {
  private readonly speechPack: Promise<ResolvedSpeechPack>;
  private readonly playArrayBuffer: PlayArrayBuffer;
  constructor(speechPack: Promise<ResolvedSpeechPack>, playArrayBuffer: PlayArrayBuffer) {
    this.speechPack = speechPack;
    this.playArrayBuffer = playArrayBuffer;
  }

  async play(audioFiles: SpeechFile[]): Promise<void> {
    for (const file of audioFiles) {
      await this.playSingle(file);
    }
  }

  private async playSingle(audioFile: SpeechFile) {
    const loadedSpeechPack = await this.speechPack;
    await this.playArrayBuffer(loadedSpeechPack[audioFile]);
  }
}
