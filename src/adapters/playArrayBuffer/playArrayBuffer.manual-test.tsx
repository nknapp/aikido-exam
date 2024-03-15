import fixture from "./playArrayBuffer.fixture.mp3?url";
import { playArrayBuffer } from "./playArrayBuffer";
import { type Component, createResource, createSignal } from "solid-js";

async function loadMp3() {
  const response = await fetch(fixture);
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

  const [mp3] = createResource(loadMp3);

  return (
    <div>
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
      <div class="d-flex gap-2 align-items-center">
        {mp3.error && <p>Error while loading mp3: {mp3.error}</p>}
        {mp3.loading && <p>Loading mp3</p>}
        <button onClick={() => play(mp3()!)}>{mp3.loading ? "Loading..." : "Play"}</button>
        <button onClick={() => stop()}>Stop</button>
        <div>{playing() > 0 && "Playing"}</div>
      </div>
    </div>
  );
};
