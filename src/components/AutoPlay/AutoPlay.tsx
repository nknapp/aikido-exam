import React, { useMemo, useState } from "react";
import { Technique } from "src/model/Technique";
import { Alert, Form } from "react-bootstrap";
import css from "./AutoPlay.module.scss";
import { useCountDown } from "./useCounter";
import { Stopwatch, StopwatchFill } from "react-bootstrap-icons";

export interface AutoPlayProps {
  className?: string;
  playing: boolean;
  lastTechnique?: Technique;
  onWaitDone: () => void;
}

const LENGTH_OF_VIDEO_INTRO_SECONDS = 6;

const speeds: Record<string, number> = {
  slow: 1000,
  medium: 750,
  fast: 350,
};

export const AutoPlay: React.FC<AutoPlayProps> = ({ className, playing, lastTechnique, onWaitDone }) => {
  const classes = [className, css.autoplay, "d-flex align-items-center"];

  const [mode, setMode] = useState("no");

  const duration = useMemo(() => {
    if (lastTechnique == null) return null;
    return videoDurationSeconds(lastTechnique);
  }, [lastTechnique]);

  const enabled = mode !== "no" && !playing;

  const { progressPercent } = useCountDown(enabled, duration, speeds[mode], onWaitDone);

  return (
    <Alert variant={"secondary"} className={classes.join(" ")}>
      <div className={css.progress} style={{ width: `${progressPercent}%`, transitionDuration: speeds[mode] + "ms" }}>
        {" "}
      </div>
      <div className={css.progressLabel}>{enabled && lastTechnique && lastTechnique.joined()}</div>

      <div className={css.icon}>
        {mode != "no" ? <StopwatchFill size={24} className={"me-2"} /> : <Stopwatch size={24} className={"me-2"} />}
      </div>
      {/* <Form.Group as={Row}> */}
      <Form.Label column xs={4}>
        Autoplay
      </Form.Label>
      {/* <Col xs={8}> */}
      <Form.Select aria-label="Default select example" value={mode} onChange={(event) => setMode(event.target.value)}>
        <option value="no">Aus</option>
        <option value="slow">Langsam</option>
        <option value="medium">Mittel</option>
        <option value="fast">Schnell</option>
      </Form.Select>
      {/* </Col> */}
      {/* </Form.Group> */}
    </Alert>
  );
};

const FALLBACK_DURATION_SECONDS = 20;

function videoDurationSeconds(technique: Technique): number {
  const youtube = technique.metadata.youtube;
  if (youtube == null) {
    return FALLBACK_DURATION_SECONDS;
  }
  if (Array.isArray(youtube)) {
    return youtube[0].durationSeconds - LENGTH_OF_VIDEO_INTRO_SECONDS;
  }
  return youtube.durationSeconds - LENGTH_OF_VIDEO_INTRO_SECONDS;
}
