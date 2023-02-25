import React, { useCallback, useEffect, useState } from "react";
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
import { CurrentTechnique } from "./CurrentTechnique";
import { NoTechniquesChosen } from "./NoTechniquesChosen";
import { useMediaSessionIfPresent } from "../../utils/hooks/useMediaSession";
import { HandTracker } from "../HandTracker/HandTracker";
import { Technique } from "../../model/Technique";

export const Reader: React.FC<{
  techniques: Technique[];
  nextTechniqueChanged: (index: number) => void;
}> = ({ techniques, nextTechniqueChanged }) => {
  const [lastTechnique, setLastTechnique] = useState<Technique>();
  const [nextTechniqueIndex, setNextTechniqueIndex] = useState<number>(0);
  const nextTechnique = techniques[nextTechniqueIndex];

  const { playing, play, audioRef, stop } = useAudioPlayer();

  useEffect(() => stop(), [techniques, stop]);

  useEffect(() => setNextTechniqueIndex(0), [techniques]);
  useEffect(
    () => nextTechniqueChanged(nextTechniqueIndex),
    [nextTechniqueIndex, nextTechniqueChanged]
  );

  const playCurrentTechnique = useCallback(async () => {
    if (nextTechnique == null) {
      return;
    }
    await play(nextTechnique, lastTechnique);
    setNextTechniqueIndex((currentTechniqueIndex) => currentTechniqueIndex + 1);
    setLastTechnique(nextTechnique);
  }, [nextTechnique, lastTechnique, play]);

  const playAgain = useCallback(async () => {
    if (lastTechnique != null) {
      await play(lastTechnique);
    }
  }, [play, lastTechnique]);

  const back = useCallback(() => {
    setNextTechniqueIndex((currentTechniqueIndex) => currentTechniqueIndex - 1);
  }, []);

  const forward = useCallback(() => {
    setNextTechniqueIndex((currentTechniqueIndex) => currentTechniqueIndex + 1);
  }, []);

  useMediaSessionIfPresent({
    playing,
    onPlayEvent: playCurrentTechnique,
    onStopEvent: stop,
    title:
      (techniques && techniques[nextTechniqueIndex]?.definition.join(" ")) ||
      "",
  });

  return (
    <div className={css.reader}>
      <audio ref={audioRef} style={{ display: "none" }} />
      <Button
        onClick={back}
        className={css.backButton}
        disabled={nextTechniqueIndex <= 0}
      >
        <ChevronDoubleLeft />
      </Button>
      {playing ? (
        <Button onClick={stop} className={css.stopPlayButton}>
          <Stop /> Stop
        </Button>
      ) : (
        <Button
          onClick={playCurrentTechnique}
          disabled={nextTechnique == null}
          className={css.stopPlayButton}
        >
          <Play /> Play
        </Button>
      )}
      <Button
        onClick={playAgain}
        disabled={lastTechnique == null || playing}
        title={"Play again"}
        className={css.repeatButton}
      >
        <ArrowClockwise /> Repeat
      </Button>
      <Button
        onClick={forward}
        className={css.forwardButton}
        disabled={nextTechniqueIndex >= techniques.length - 1}
      >
        <ChevronDoubleRight />
      </Button>
      <HandTracker
        className={css.handGestures}
        playing={playing}
        onPointGesture={playCurrentTechnique}
      />
      {nextTechnique != null ? (
        <CurrentTechnique
          technique={nextTechnique}
          className={css.techniqueDisplay}
        />
      ) : (
        <NoTechniquesChosen className={css.techniqueDisplay} />
      )}
    </div>
  );
};
