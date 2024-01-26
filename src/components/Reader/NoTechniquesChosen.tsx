import React from "react";
import { Alert } from "react-bootstrap";
import logo from "src/assets/logo.svg";
import css from "./NoTechniquesChosen.module.scss";
import { CreateExamButton } from "../ExamTableChooser/CreateExamButton";
import { TechniqueList } from "../../model/TechniqueList";

export const NoTechniquesChosen: React.FC<{
  className?: string;
  onTechniqueChoice?: (techniques: TechniqueList) => void;
}> = ({ className, onTechniqueChoice }) => {
  return (
    <Alert variant={"warning"} className={`${className} d-flex flex-column justify-content-evenly align-items-center`}>
      <img src={logo} className={css.logo} alt="Logo" />
      <div className={"fs-2 text-center"}>Bitte wähle eine oder mehrere Techniklisten aus.</div>
      <div>{onTechniqueChoice != null && <CreateExamButton onChoice={onTechniqueChoice} />}</div>
    </Alert>
  );
};
