import { SpeechFile, SpeechPack } from "$core/model/SpeechPack";
import { copyArrayBuffer } from "$core/utils/copyArrayBuffer";
import { promiseWithResolvers } from "$core/utils/promiseWithResolvers";

type AudioFile = keyof SpeechPack;

export class Player {
  private readonly context = new AudioContext();
  private readonly speechPack: SpeechPack;
  private cache: Partial<Record<AudioFile, Promise<ArrayBuffer>>> = {};
  constructor(speechPack: SpeechPack) {
    this.speechPack = speechPack;
  }

  async play(audioFiles: AudioFile[]): Promise<void> {
    for (const file of audioFiles) {
        this.addToCache(file)
    }
    for (const file of audioFiles) {
      await this.playSingle(file);
    }
  }

  private async playSingle(audioFile: AudioFile) {
    const { resolve, promise } = promiseWithResolvers<void>();
    const source = this.context.createBufferSource();
    source.buffer = await this.context.decodeAudioData(await this.loadCached(audioFile));
    source.connect(this.context.destination);

    source.start();
    source.addEventListener("ended", () => resolve());
    return promise;
  }

  private async loadCached(file: keyof SpeechPack): Promise<ArrayBuffer> {
    this.addToCache(file);
    return copyArrayBuffer(await this.cache[file]!);
  }

  private addToCache(file: SpeechFile): void {
    if (this.cache[file] == null) {
      this.cache[file] = this.loadFile(file);
    }
  }

  private async loadFile(file: SpeechFile): Promise<ArrayBuffer> {
    const response = await fetch(this.speechPack[file]);
    return response.arrayBuffer();
  }

  async close(): Promise<void> {
    await this.context.close();
  }
}
