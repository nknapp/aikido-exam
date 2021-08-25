import { Announcement } from "../../utils/resolve-exam-tables";
import { ExamTableChooser } from "./ExamTableChooser";
import { Col, Row } from "react-bootstrap";
import { CheckButton } from "../CheckButton";
import { ShowQueries } from "../ShowQueries";
import { useCallback, useState } from "react";
import { shuffleAndSelect } from "../../utils/shuffling/shuffle";
import FormRange from "react-bootstrap/FormRange";
import { useDebouncedEffect } from "src/utils/hooks/useDebouncedEffect";

export interface ExamTableChooserProps {
  onChoice(queries: Announcement[]): void;
}

export const QueryChooser: React.FC<ExamTableChooserProps> = ({ onChoice }) => {
  const [allQueries, setAllQueries] = useState<Announcement[]>([]);
  const [shouldShuffle, setShouldShuffle] = useState(true);
  const [queries, setQueries] = useState<Announcement[]>([]);
  const [coverage, setCoverage] = useState(100);

  const updateQueries = useCallback((chosenQueries) => {
    setAllQueries(chosenQueries);
  }, []);

  useDebouncedEffect(
    useCallback(() => {
      const newQueries = shouldShuffle
        ? shuffleAndSelect(allQueries, { coverage: coverage / 100 })
        : allQueries;
      setQueries(newQueries);
      onChoice(newQueries);
    }, [shouldShuffle, allQueries, coverage, onChoice]),
    200
  );

  return (
    <>
      <ExamTableChooser onChoice={updateQueries} />
      <hr />
      <Row className={"d-flex align-items-center"}>
        <Col md={2}>
          <CheckButton
            id={"toggle-should-shuffle"}
            onChange={(event) => {
              setShouldShuffle(event.currentTarget.checked);
            }}
            value={"Should shuffle"}
            checked={shouldShuffle}
          >
            Zufällige Auswahl:
          </CheckButton>
        </Col>
        <Col>
          <FormRange
            disabled={!shouldShuffle}
            onChange={(event) => setCoverage(Number(event.currentTarget.value))}
            value={coverage}
          />
        </Col>
        <Col md={3}>
          <label>
            Anzahl Techniken: {queries.length}{" "}
            {shouldShuffle && "(" + coverage + "%)"}
          </label>
        </Col>
      </Row>
      <hr />
      <ShowQueries queries={queries} currentQuery={-1} />
    </>
  );
};
