import { promiseWithResolvers } from "$core/utils/promiseWithResolvers.ts";
import { copyArrayBuffer } from "$core/utils/copyArrayBuffer.ts";

export interface PlayArrayBufferOptions {
  abortSignal?: AbortSignal;
}

export const playArrayBuffer = async (
  arrayBuffer: ArrayBuffer,
  options: PlayArrayBufferOptions = {},
): Promise<void> => {
  const context = getOrCeateContext();

  const { resolve, promise } = promiseWithResolvers<void>();
  const source = context.createBufferSource();
  const audioCopy = copyArrayBuffer(arrayBuffer);
  source.buffer = await context.decodeAudioData(audioCopy);
  source.connect(context.destination);

  if (options.abortSignal?.aborted) return;
  options.abortSignal?.addEventListener("abort", () => source.stop());
  source.start();
  source.addEventListener("ended", () => resolve());
  return promise;
};

let audioContext: AudioContext | null = null;
function getOrCeateContext(): AudioContext {
  if (audioContext == null) {
    audioContext = new AudioContext();
  }
  return audioContext;
}
