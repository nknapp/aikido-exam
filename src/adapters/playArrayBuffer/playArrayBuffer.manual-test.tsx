import React, { useCallback, useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import fixture from "./playArrayBuffer.fixture.mp3";
import { ShowAsync } from "@/components/ShowAsync";
import { playArrayBuffer } from "./playArrayBuffer";

async function loadMp3() {
  const response = await fetch(fixture);
  return await response.arrayBuffer();
}

export const ManualTest: React.FC = () => {
  const abortController = useRef(new AbortController());
  const [playing, setPlaying] = useState(0);

  const stop = useCallback(() => {
    abortController.current.abort();
    abortController.current = new AbortController();
  }, []);

  const play = useCallback(
    async (arrayBuffer: ArrayBuffer) => {
      stop();
      setPlaying((playing) => playing + 1);
      await playArrayBuffer(arrayBuffer, { abortSignal: abortController.current.signal });
      setPlaying((playing) => playing - 1);
    },
    [stop],
  );

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
      <div className={"d-flex gap-2 align-items-center"}>
        <ShowAsync loader={loadMp3} fallback={<Spinner />}>
          {(arrayBuffer) => <Button onClick={() => play(arrayBuffer)}>Play</Button>}
        </ShowAsync>
        <Button onClick={stop}>Stop</Button>
        <div>{playing > 0 && "Playing"}</div>
      </div>
    </div>
  );
};
