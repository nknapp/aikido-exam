import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./CreateExamButton.module.scss";
import { TechniqueChooser } from "./TechniqueChooser";
import { PencilFill } from "react-bootstrap-icons";
import { Technique } from "../../model/Technique";

export interface ExamTableChooserProps {
  onChoice(techniques: Technique[]): void;
}

export const CreateExamButton: React.FC<ExamTableChooserProps> = ({
  onChoice,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const [techniques, settechniques] = useState<Technique[]>([]);

  return (
    <>
      <Button variant={"outline-success"} onClick={() => setShowModal(true)}>
        <PencilFill /> {t("app.button.chooseExamTable.label")}
      </Button>
      <Modal
        show={showModal}
        dialogClassName={css.chooseExamTableModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create exam table</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            disabled={techniques.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(techniques);
              setShowModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>

        <Modal.Body>
          <TechniqueChooser onChoice={settechniques} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            disabled={techniques.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(techniques);
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
