import React from "react";
import { Alert } from "react-bootstrap";
import { ReactComponent as Logo } from "src/assets/logo.svg";
import { CreateExamButton } from "../ExamTableChooser/CreateExamButton";
import { Technique } from "../../model/Technique";

export const NoTechniquesChosen: React.FC<{
  className?: string;
  onTechniqueChoice?: (techniques: Technique[]) => void;
}> = ({ className, onTechniqueChoice }) => {
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
        {onTechniqueChoice != null && (
          <CreateExamButton onChoice={onTechniqueChoice} />
        )}
      </div>
    </Alert>
  );
};
