import React from "react";
import { Alert } from "react-bootstrap";
import { ReactComponent as Logo } from "src/assets/logo.svg";
import { Technique } from "../../utils/resolve-exam-tables";
import { CreateExamButton } from "../ExamTableChooser/CreateExamButton";

export const NoQuery: React.FC<{
  className?: string;
  onQueryChoice?: (queries: Technique[]) => void;
}> = ({ className, onQueryChoice }) => {
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
      <Logo width="10rem" height="10rem" />
      <div className={"fs-2 text-center"}>
        Bitte wähle eine oder mehrere Techniklisten aus.
      </div>
      <div>
        {onQueryChoice != null && <CreateExamButton onChoice={onQueryChoice} />}
      </div>
    </Alert>
  );
};
