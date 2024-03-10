import { promiseWithResolvers } from "$core/utils/promiseWithResolvers";
import { copyArrayBuffer } from "$core/utils/copyArrayBuffer";

interface PlayArrayBufferOptions {
  abortSignal?: AbortSignal;
}

export async function playArrayBuffer(arrayBuffer: ArrayBuffer, options: PlayArrayBufferOptions = {}) {
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
}

let audioContext: AudioContext | null = null;
function getOrCeateContext(): AudioContext {
  if (audioContext == null) {
    audioContext = new AudioContext();
  }
  return audioContext;
}
