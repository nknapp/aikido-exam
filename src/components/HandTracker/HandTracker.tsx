import React, { useCallback, useState } from "react";
import { useHandGesture } from "../../utils/hooks/useHandGesture";
import { Alert, Button } from "react-bootstrap";
import css from "./HandTracker.module.scss";
import { CameraVideoFill, CameraVideoOffFill } from "react-bootstrap-icons";

export const HandTracker: React.FC<{
  className?: string;
  playing: boolean;
  onPointGesture: () => void;
}> = ({ className, onPointGesture, playing }) => {
  const [active, setActive] = useState(false);
  const [gesturesCaptured, setGesturesCaptured] = useState(0);

  const handleGesture = useCallback(() => {
    setGesturesCaptured((oldValue) => oldValue + 1);
    onPointGesture();
    setTimeout(() => {
      setGesturesCaptured((oldValue) => oldValue - 1);
    }, 500);
  }, [onPointGesture]);

  useHandGesture({
    playing,
    active,
    onPointGesture: handleGesture,
  });

  const classes = [
    "d-flex",
    "align-items-center",
    "justify-content-between",
    className,
    css.button,
    gesturesCaptured > 0 ? css.gesture : "",
  ];

  return (
    <Alert variant={"secondary"} className={classes.join(" ")}>
      <div className={"d-flex align-items-center"}>
        <div className={css.icon}>
          {active ? (
            <CameraVideoFill size={24} className={"me-2"} />
          ) : (
            <CameraVideoOffFill size={24} className={"me-2"} />
          )}
        </div>
        <div className={css.label}>
          {active
            ? `Hand gestures are enabled, show your pointing finger to the camera to play the next defence.`
            : `Hand gestures are disabled`}
        </div>
      </div>
      <Button
        className={classes.join(" ")}
        variant={"secondary"}
        onClick={() => setActive(!active)}
      >
        {active ? "Disable" : "Enable"}
      </Button>
    </Alert>
  );
};
