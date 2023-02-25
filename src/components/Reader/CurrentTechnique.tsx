import React from "react";
import css from "./CurrentQuery.module.scss";
import { Alert } from "react-bootstrap";
import { Technique } from "../../model/Technique";

export const CurrentTechnique: React.FC<{
  className?: string;
  technique: Technique;
}> = ({ technique, className }) => {
  const [execution, attack, defence, direction] = technique.definition;
  return (
    <Alert variant={"info"} className={className}>
      <div className={css.execution}>{execution}</div>
      <div className={css.queryParts}>
        <div className={css.queryPart}>{attack}</div>
        <div className={css.queryPart}>{defence}</div>
        <div className={css.queryPart}>{direction}</div>
      </div>
    </Alert>
  );
};
