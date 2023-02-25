import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Technique } from "../../utils/resolve-exam-tables";
import { useTranslation } from "react-i18next";
import css from "./CreateExamButton.module.scss";
import { QueryChooser } from "./QueryChooser";
import { PencilFill } from "react-bootstrap-icons";

export interface ExamTableChooserProps {
  onChoice(queries: Technique[]): void;
}

export const CreateExamButton: React.FC<ExamTableChooserProps> = ({
  onChoice,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const [queries, setQueries] = useState<Technique[]>([]);

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
            disabled={queries.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(queries);
              setShowModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>

        <Modal.Body>
          <QueryChooser onChoice={setQueries} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            disabled={queries.length === 0}
            variant="primary"
            onClick={() => {
              onChoice(queries);
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
