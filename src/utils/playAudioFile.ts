import { AudioFile, audioFiles } from "../exam-tables/audio-files";

export async function playAudioFile(
  audioElement: HTMLAudioElement,
  audioFile: AudioFile,
  { playbackRate = 1 } = {},
): Promise<void> {
  audioElement.src = audioFiles[audioFile];
  audioElement.playbackRate = playbackRate;
  await audioElement.play();
  return new Promise<void>((resolve, reject) => {
    const onEnded = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      reject();
      cleanup();
    };

    function cleanup() {
      audioElement.removeEventListener("ended", onEnded);
      audioElement.removeEventListener("pause", onEnded);
      audioElement.removeEventListener("error", onError);
    }

    audioElement.addEventListener("ended", onEnded, { once: true });
    audioElement.addEventListener("pause", onEnded, { once: true });
    audioElement.addEventListener("error", onError, { once: true });
  });
}
