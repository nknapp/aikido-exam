import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./CreateExamButton.module.scss";
import { TechniqueChooser } from "./TechniqueChooser";
import { PencilFill } from "react-bootstrap-icons";
import { TechniqueList } from "../../model/TechniqueList";

export interface ExamTableChooserProps {
  onChoice(techniques: TechniqueList): void;
}

export const CreateExamButton: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const [currentChoice, setCurrentChoice] = useState<TechniqueList>(new TechniqueList());

  return (
    <>
      <Button variant={"outline-success"} onClick={() => setShowModal(true)}>
        <PencilFill /> {t("app.button.chooseExamTable.label")}
      </Button>
      <Modal show={showModal} dialogClassName={css.chooseExamTableModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Techniken auswählen</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Abbrechen
          </Button>
          <Button
            disabled={currentChoice.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(currentChoice);
              setShowModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>

        <Modal.Body>
          <TechniqueChooser onChoice={setCurrentChoice} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Abbrechen
          </Button>
          <Button
            disabled={currentChoice.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(currentChoice);
              setShowModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
