import { assertMock } from "$core/test-utils/assertMock.ts";
import { playSpeechFile } from "$core/playSpeechFile";
import { promiseWithResolvers } from "$core/utils/promiseWithResolvers.ts";
import { nanoid } from "nanoid";

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
  let playbackFinished: Promise<void> & { id?: string } = Promise.resolve();
  playbackFinished.id = "resolved--" + nanoid(4);
  let inUse = false;
  let currentlyPlaying = "";
  assertMock(playSpeechFile);
  playSpeechFile.mockImplementation(async (filename, abortSignal) => {
    inUse = true;
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
      if (inUse) {
        throw new Error("You have to get playback control before playing anything, or never!");
      }
      let control = promiseWithResolvers<void>();
      playbackFinished = control.promise;
      return {
        finishNext(expectedFileName: string) {
          expect(currentlyPlaying).toEqual(expectedFileName);
          control.resolve();
          control = promiseWithResolvers<void>();
          playbackFinished = control.promise;
        },
        finish: () => {
          control.resolve();
        },
        error: (error: Error) => control.reject(error),
      };
    },
  };
}
