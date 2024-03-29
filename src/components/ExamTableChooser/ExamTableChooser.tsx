import { resolveExamTables } from "../../utils/resolve-exam-tables";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";

import { ExamTable } from "../../exam-tables/baseTypes";
import { CheckButton } from "../CheckButton";
import { TechniqueList } from "../../model/TechniqueList";
import { useStore } from "@nanostores/react";
import { chooseExam, chosenExams } from "./store";
import { useSelectedDojo } from "../../store/selectedDojo";

export interface ExamTableChooserProps {
  onChoice(techniques: TechniqueList): void;
}

export const ExamTableChooser: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const buttonState = useStore(chosenExams);
  const { selectedDojoLazyData: dojo } = useSelectedDojo();

  useEffect(() => {
    const selectedButtons = Object.keys(dojo.exams).filter((buttonName) => buttonState[buttonName] === true);
    const tables: ExamTable[] = selectedButtons.map((buttonName) => dojo.exams[buttonName].table);
    const selectedTechniques: TechniqueList = resolveExamTables(tables);
    onChoice(selectedTechniques);
  }, [buttonState, onChoice, dojo]);

  const { t } = useTranslation();
  return (
    <Row xs={3} sm={4} md={4} lg={8}>
      {Object.keys(dojo.exams).map((buttonName) => {
        return (
          <Col key={buttonName} className={"mb-2"}>
            <CheckButton
              className={"w-100"}
              id={"toggle-" + buttonName}
              onChange={(event) => {
                chooseExam(buttonName, event.currentTarget.checked);
              }}
              type="checkbox"
              value={buttonName}
              checked={buttonState[buttonName] || false}
            >
              {t(dojo.exams[buttonName].labelKey)}
            </CheckButton>
          </Col>
        );
      })}
    </Row>
  );
};
