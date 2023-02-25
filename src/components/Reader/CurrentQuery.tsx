import React from "react";
import { Technique } from "../../utils/resolve-exam-tables";
import css from "./CurrentQuery.module.scss";
import { Alert } from "react-bootstrap";

export const CurrentQuery: React.FC<{
  className?: string;
  query: Technique;
}> = ({ query, className }) => {
  const [execution, attack, defence, direction] = query;
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
