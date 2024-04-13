import { assertMock } from "$core/test-utils/assertMock.ts";
import { playSpeechFile } from "$core/playSpeechFile";
import { promiseWithResolvers } from "$core/utils/promiseWithResolvers.ts";

interface Controller {
  finish: () => void;
  finishNext: (expectedFilename: string) => void;
}

export function watchPlaySpeechFile() {
  const playSpeechFileEvents: string[] = [];
  let controlPlayback: () => Controller;

  beforeEach(() => {
    playSpeechFileEvents.splice(0, Infinity);
    controlPlayback = onPlaySpeechFile((event) => playSpeechFileEvents.push(event)).controlPlayback;
  });

  return {
    playSpeechFileEvents,
    controlPlayback() {
      return controlPlayback();
    },
  };
}

export function onPlaySpeechFile(callback: (event: string) => void) {
  let playbackFinished = Promise.resolve();
  let currentlyPlaying = "";
  assertMock(playSpeechFile);
  playSpeechFile.mockImplementation(async (filename, abortSignal) => {
    currentlyPlaying = filename;
    callback(`play: ${filename}`);
    const handleAbort = () => {
      callback(`abort: ${filename}`);
    };
    abortSignal?.addEventListener("abort", handleAbort);
    await playbackFinished;
    abortSignal?.removeEventListener("abort", handleAbort);
  });

  return {
    controlPlayback() {
      let control = promiseWithResolvers<void>();
      playbackFinished = control.promise;
      return {
        finishNext(expectedFileName: string) {
          expect(currentlyPlaying).toEqual(expectedFileName);
          control.resolve();
          control = promiseWithResolvers<void>();
          playbackFinished = control.promise;
        },
        finish: () => control.resolve(),
        error: (error: Error) => control.reject(error),
      };
    },
  };
}
