import { assertMock } from "$core/test-utils/assertMock.ts";
import { playSpeechFile } from "$core/playSpeechFile";
import { promiseWithResolvers } from "$core/utils/promiseWithResolvers.ts";

export function watchPlaySpeechFile() {
  const playSpeechFileEvents: string[] = [];
  let playbackFinished = Promise.resolve();

  beforeEach(() => {
    playSpeechFileEvents.splice(0, Infinity);
    assertMock(playSpeechFile);
    playSpeechFile.mockImplementation(async (filename, abortSignal) => {
      playSpeechFileEvents.push(`play: ${filename}`);
      const handleAbort = () => {
        playSpeechFileEvents.push(`abort: ${filename}`);
      };
      abortSignal?.addEventListener("abort", handleAbort);
      await playbackFinished;
      abortSignal?.removeEventListener("abort", handleAbort);
    });
  });

  return {
    playSpeechFileEvents,
    controlPlayback() {
      const { resolve, reject, promise } = promiseWithResolvers<void>();
      playbackFinished = promise;
      return {
        finish: resolve,
        error: reject,
      };
    },
  };
}
