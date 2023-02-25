import { TechniqueFilters } from "../../utils/technique-filters";
import React from "react";
import { CheckButton } from "../CheckButton";
import { Col, Row } from "react-bootstrap";

export const ShowTechniqueFilters: React.FC<{
  value: TechniqueFilters;
  onChange: (filters: TechniqueFilters) => void;
}> = ({ value, onChange }) => {
  return (
    <Row className={"d-flex align-items-center"}>
      <Col md={2}>
        <CheckButton
          id={"noKnees"}
          onChange={(event) =>
            onChange({
              ...value,
              badKnees: event.target.checked,
            })
          }
          value={"badKnees"}
          checked={value.badKnees}
        >
          Keine Techniken auf Knien
        </CheckButton>
      </Col>
    </Row>
  );
};
