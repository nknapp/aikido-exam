import React from "react";
import { Attacks, ExamTable, Defences } from "../../exam-tables/baseTypes";
import { Col, Row } from "react-bootstrap";
import {
  Attack,
  Direction,
  Execution,
  Defence,
} from "../../exam-tables/audio-files";
import { Technique } from "../../model/Technique";

const Directions: React.FC<{
  directions: Direction[];
  highlightedTechnique?: Technique;
}> = ({ directions, highlightedTechnique }) => {
  return directions.length > 0 ? (
    <div>
      (
      {directions.map((direction, index) => {
        const isHighlighted =
          techniqueIfMatching(highlightedTechnique, 3, direction) != null;
        return (
          <React.Fragment key={direction + "-" + index}>
            {index > 0 && ", "}
            <span className={isHighlighted ? "highlighted-technique" : ""}>
              {direction}
            </span>
          </React.Fragment>
        );
      })}
      )
    </div>
  ) : (
    <></>
  );
};

const ShowDefence: React.FC<{
  defence: Defence;
  directions: Direction[];
  highlightedTechnique?: Technique;
}> = ({ defence, directions, highlightedTechnique }) => {
  return (
    <div className={"me-5 d-flex"} style={{ whiteSpace: "nowrap" }}>
      <div className={"me-2 "}>
        <span
          className={
            highlightedTechnique != null ? "highlighted-technique" : ""
          }
        >
          {defence}
        </span>
      </div>
      <Directions
        directions={directions}
        highlightedTechnique={highlightedTechnique}
      />
    </div>
  );
};

const ShowAttack: React.FC<{
  attack: Attack;
  defences: Defences;
  highlightedTechnique?: Technique;
}> = ({ attack, defences, highlightedTechnique }) => {
  return (
    <Row className={"mb-2"}>
      <Col sm={5} md={4}>
        <span
          className={
            highlightedTechnique != null ? "highlighted-technique" : ""
          }
        >
          {attack}
        </span>
      </Col>
      <Col className={"ps-5 ps-sm-0"}>
        <div className={"d-flex flex-wrap"}>
          {Object.entries(defences).map(([defence, directions]) => {
            return (
              <ShowDefence
                key={defence}
                defence={defence as Defence}
                directions={directions}
                highlightedTechnique={techniqueIfMatching(
                  highlightedTechnique,
                  2,
                  defence as Defence
                )}
              />
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

const ShowExecution: React.FC<{
  execution: Execution;
  attacks: Attacks;
  highlightedTechnique?: Technique;
}> = ({ execution, attacks, highlightedTechnique }) => {
  return (
    <div className={"mb-4"}>
      <h5>{execution}</h5>
      {Object.entries(attacks).map(([attack, defences]) => {
        return (
          <ShowAttack
            key={attack}
            attack={attack as Attack}
            defences={defences}
            highlightedTechnique={techniqueIfMatching(
              highlightedTechnique,
              1,
              attack as Attack
            )}
          />
        );
      })}
    </div>
  );
};

export const ShowExamTable: React.FC<{
  examTable: ExamTable;
  currentTechnique?: Technique;
}> = ({ examTable, currentTechnique }) => {
  return (
    <div>
      {Object.entries(examTable.techniques).map(([execution, attacks]) => {
        return (
          <ShowExecution
            key={execution}
            execution={execution as Execution}
            attacks={attacks}
            highlightedTechnique={techniqueIfMatching(
              currentTechnique,
              0,
              execution as Execution
            )}
          />
        );
      })}
    </div>
  );
};

function techniqueIfMatching<T extends keyof Technique["definition"]>(
  technique: Technique | undefined,
  index: T,
  match: Technique["definition"][T]
): Technique | undefined {
  console.log({ technique, index, match });
  if (technique != null && technique.definition[index] === match) {
    console.log("technique", true);
    return technique;
  }
  return undefined;
}
