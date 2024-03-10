import { promiseWithResolvers } from "$core/utils/promiseWithResolvers";
import { copyArrayBuffer } from "$core/utils/copyArrayBuffer";

export class AudioPlayer {
  private readonly context = new AudioContext();

  async play(arrayBuffer: ArrayBuffer) {
    const { resolve, promise } = promiseWithResolvers<void>();
    const source = this.context.createBufferSource();
    const audioCopy = copyArrayBuffer(arrayBuffer);
    source.buffer = await this.context.decodeAudioData(audioCopy);
    source.connect(this.context.destination);

    source.start();
    source.addEventListener("ended", () => resolve());
    return promise;
  }

  async close() {
    await this.context.close();
  }
}
