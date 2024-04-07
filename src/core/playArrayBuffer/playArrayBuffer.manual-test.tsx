import fixture from "./playArrayBuffer.fixture.mp3?url";
import { playArrayBuffer } from "./playArrayBuffer.ts";
import { type Component, createResource, createSignal } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { delay } from "@/utils/delay.ts";

async function loadMp3() {
  const response = await fetch(fixture);
  await delay(1000);
  return await response.arrayBuffer();
}

export const ManualTest: Component = () => {
  let abortController = new AbortController();
  const [playing, setPlaying] = createSignal(0);

  const stop = () => {
    abortController.abort();
    abortController = new AbortController();
  };

  const play = async (arrayBuffer: ArrayBuffer) => {
    stop();
    setPlaying((playing) => playing + 1);
    await playArrayBuffer(arrayBuffer, { abortSignal: abortController.signal });
    setPlaying((playing) => playing - 1);
  };

  const [mp3, { refetch }] = createResource(loadMp3, {
    ssrLoadFrom: "initial",
    onHydrated() {
      refetch();
    },
  });

  function playMp3() {
    const value = mp3();
    if (value != null) {
      play(value);
    }
  }

  return (
    <div>
      <Instructions />
      <div class="grid grid-cols-3 gap-2 items-center py-2 md:w-1/2">
        <SimpleButton
          disabled={mp3.loading || mp3.error}
          label={mp3.loading ? "Loading..." : "Play"}
          onClick={playMp3}
        />
        <SimpleButton disabled={mp3.loading || mp3.error} label={"Stop"} onClick={() => stop()} />
        {mp3.error && <div>Error while loading mp3: {mp3.error}</div>}
        <div>{playing() > 0 && "Playing"}</div>
      </div>
    </div>
  );
};

const Instructions: Component = () => {
  return (
    <ol>
      <li>
        Press the play button
        <ul>
          <li>The text "ai hamni katate dori" should be played</li>
          <li>During playback, "playing" should be shownw</li>
          <li>After playback, "playing" should disappear</li>
        </ul>
      </li>
      <li>
        Press "play" and then "stop"
        <ul>
          <li>The text "ai hamni katate dori" should be played</li>
          <li>On pressing stop, the playback should be stopped</li>
        </ul>
      </li>
      <li>
        Press "play" multiple times, before the playback is finished"
        <ul>
          <li>The text "ai hamni katate dori" should be played</li>
          <li>On pressing "play" again, the previous playback should be stopped</li>
        </ul>
      </li>
    </ol>
  );
};
