import React from "react";
import css from "./CurrentTechnique.module.scss";
import { Alert } from "react-bootstrap";
import { Technique } from "../../model/Technique";
import { SINGLE_DIRECTION } from "src/exam-tables/audio-files";

export const CurrentTechnique: React.FC<{
  className?: string;
  technique: Technique;
}> = ({ technique, className }) => {
  const { execution, attack, defence, direction } = technique;
  return (
    <Alert variant={"info"} className={className}>
      <div className={css.execution}>{execution}</div>
      <div className={css.techniqueParts}>
        <div className={css.techniquePart}>{attack}</div>
        <div className={css.techniquePart}>{defence}</div>
        {direction !== SINGLE_DIRECTION && <div className={css.techniquePart}>{direction}</div>}
      </div>
    </Alert>
  );
};
