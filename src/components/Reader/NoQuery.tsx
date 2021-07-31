import React from "react";
import { Alert } from "react-bootstrap";
import { ReactComponent as Logo } from "src/assets/logo.svg";

export const NoQuery: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <Alert
      variant={"warning"}
      className={
        className +
        " d-flex flex-column" +
        " justify-content-evenly" +
        " align-items-center"
      }
    >
      <Logo height={"50%"} />
      <div className={"fs-2 text-center"}>
        Bitte wähle eine oder mehrere Prüfungen aus.
      </div>
    </Alert>
  );
};
