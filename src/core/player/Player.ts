import { SpeechPack } from "$core/model/SpeechPack";
import { copyArrayBuffer } from "$core/utils/copyArrayBuffer";
import { promiseWithResolvers } from "$core/utils/promiseWithResolvers";
import { ResolvedSpeechPack, resolveSpeechPack } from "$core/player/resolveSpeechPack";

type AudioFile = keyof SpeechPack;

export async function loadPlayer(speechPack: SpeechPack) {
  const resolvedPack = await resolveSpeechPack(speechPack);
  return new Player(resolvedPack);
}

class Player {
  private readonly context = new AudioContext();
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
    const { resolve, promise } = promiseWithResolvers<void>();
    const source = this.context.createBufferSource();
    const audioCopy = copyArrayBuffer(this.speechPack[audioFile]);
    source.buffer = await this.context.decodeAudioData(audioCopy);
    source.connect(this.context.destination);

    source.start();
    source.addEventListener("ended", () => resolve());
    return promise;
  }

  async close(): Promise<void> {
    await this.context.close();
  }
}
