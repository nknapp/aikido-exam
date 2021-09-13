import React from "react";
import { Col, Row } from "react-bootstrap";
import { CheckButton } from "../CheckButton";
import FormRange from "react-bootstrap/FormRange";

export interface ShuffleControls {
  shouldShuffle: boolean;
  coverage: number;
}

export const ShowShuffleControls: React.FC<{
  value: ShuffleControls;
  onChange: (newValue: ShuffleControls) => void;
  nrQueries: number;
}> = ({ value, onChange, nrQueries }) => {
  return (
    <Row className={"d-flex align-items-center"}>
      <Col md={2}>
        <CheckButton
          id={"toggle-should-shuffle"}
          onChange={(event) => {
            onChange({
              ...value,
              shouldShuffle: event.currentTarget.checked,
            });
          }}
          value={"Should shuffle"}
          checked={value.shouldShuffle}
        >
          Zufällige Auswahl:
        </CheckButton>
      </Col>
      <Col>
        <FormRange
          disabled={!value.shouldShuffle}
          onChange={(event) =>
            onChange({
              ...value,
              coverage: Number(event.currentTarget.value),
            })
          }
          value={value.coverage}
        />
      </Col>
      <Col md={3}>
        <label>
          Anzahl Techniken: {nrQueries}{" "}
          {value.shouldShuffle && "(" + value.coverage + "%)"}
        </label>
      </Col>
    </Row>
  );
};
