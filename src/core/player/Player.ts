import { SpeechPack } from "$core/model/SpeechPack";
import { ResolvedSpeechPack, resolveSpeechPack } from "$core/player/resolveSpeechPack";
import { AudioPlayer } from "$core/player/AudioPlayer";
import { playArrayBuffer } from "$core/basic/playArrayBuffer";

type AudioFile = keyof SpeechPack;

export async function loadSpeechPackPlayer(speechPack: SpeechPack) {
  const resolvedPack = await resolveSpeechPack(speechPack);
  return new SpeechPackPlayer(resolvedPack);
}

class SpeechPackPlayer {
  private player = new AudioPlayer();
  private readonly speechPack: ResolvedSpeechPack;
  private cache: Partial<Record<AudioFile, Promise<ArrayBuffer>>> = {};
  constructor(speechPack: ResolvedSpeechPack) {
    this.speechPack = speechPack;
  }

  async play(audioFiles: AudioFile[]): Promise<void> {
    for (const file of audioFiles) {
      await this.playSingle(file);
    }
  }

  private async playSingle(audioFile: AudioFile) {
    await playArrayBuffer(this.speechPack[audioFile]);
  }

  async close(): Promise<void> {
    await this.player.close();
  }
}
