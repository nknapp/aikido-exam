import React, { useCallback, useEffect, useState } from "react";
import { Announcement } from "../../utils/resolve-exam-tables";
import { Button } from "react-bootstrap";
import {
  ArrowClockwise,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Play,
  Stop,
} from "react-bootstrap-icons";
import { useAudioPlayer } from "../../utils/hooks/useAudioPlayer";
import css from "./Reader.module.scss";
import { CurrentQuery } from "./CurrentQuery";

export const Reader: React.FC<{
  queries: Announcement[];
  nextQueryChanged: (index: number) => void;
}> = ({ queries, nextQueryChanged }) => {
  const [lastQuery, setLastQuery] = useState<Announcement>();
  const [nextQueryIndex, setNextQueryIndex] = useState<number>(0);
  const nextQuery = queries[nextQueryIndex];

  const { playing, play, audioRef, stop } = useAudioPlayer();

  useEffect(() => stop(), [queries, stop]);
  useEffect(
    () => nextQueryChanged(nextQueryIndex),
    [nextQueryIndex, nextQueryChanged]
  );

  const playCurrentQuery = useCallback(async () => {
    if (nextQuery == null) {
      return;
    }
    await play(nextQuery, lastQuery);
    setNextQueryIndex((currentQueryIndex) => currentQueryIndex + 1);
    setLastQuery(nextQuery);
  }, [nextQuery, lastQuery, play]);

  const playAgain = useCallback(async () => {
    if (lastQuery != null) {
      await play(lastQuery);
    }
  }, [play, lastQuery]);

  const back = useCallback(() => {
    setNextQueryIndex((currentQueryIndex) => currentQueryIndex - 1);
  }, []);

  const forward = useCallback(() => {
    setNextQueryIndex((currentQueryIndex) => currentQueryIndex + 1);
  }, []);

  return (
    <div className={css.reader}>
      <audio ref={audioRef} style={{ display: "none" }} />
      <Button onClick={back} className={css.backButton}>
        <ChevronDoubleLeft />
      </Button>
      {playing ? (
        <Button onClick={stop} className={css.stopPlayButton}>
          <Stop /> Stop
        </Button>
      ) : (
        <Button
          onClick={playCurrentQuery}
          disabled={nextQuery == null}
          className={css.stopPlayButton}
        >
          <Play /> Play
        </Button>
      )}
      <Button
        onClick={playAgain}
        disabled={lastQuery == null || playing}
        title={"Play again"}
        className={css.repeatButton}
      >
        <ArrowClockwise /> Repeat
      </Button>
      <Button onClick={forward} className={css.forwardButton}>
        <ChevronDoubleRight />
      </Button>
      {nextQuery != null && (
        <CurrentQuery query={nextQuery} className={css.queryDisplay} />
      )}
    </div>
  );
};
