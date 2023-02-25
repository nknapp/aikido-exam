import React from "react";
import { Attacks, ExamTable, Defences } from "../../exam-tables/baseTypes";
import { Col, Row } from "react-bootstrap";
import {
  Attack,
  Direction,
  Execution,
  Defence,
} from "../../exam-tables/audio-files";
import { Technique } from "../../utils/resolve-exam-tables";

const Directions: React.FC<{
  directions: Direction[];
  highlightedQuery?: Technique;
}> = ({ directions, highlightedQuery }) => {
  return directions.length > 0 ? (
    <div>
      (
      {directions.map((direction, index) => {
        const isHighlighted =
          queryIfMatching(highlightedQuery, 3, direction) != null;
        return (
          <React.Fragment key={direction + "-" + index}>
            {index > 0 && ", "}
            <span className={isHighlighted ? "highlighted-query" : ""}>
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
  highlightedQuery?: Technique;
}> = ({ defence, directions, highlightedQuery }) => {
  return (
    <div className={"me-5 d-flex"} style={{ whiteSpace: "nowrap" }}>
      <div className={"me-2 "}>
        <span className={highlightedQuery != null ? "highlighted-query" : ""}>
          {defence}
        </span>
      </div>
      <Directions directions={directions} highlightedQuery={highlightedQuery} />
    </div>
  );
};

const ShowAttack: React.FC<{
  attack: Attack;
  defences: Defences;
  highlightedQuery?: Technique;
}> = ({ attack, defences, highlightedQuery }) => {
  return (
    <Row className={"mb-2"}>
      <Col sm={5} md={4}>
        <span className={highlightedQuery != null ? "highlighted-query" : ""}>
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
                highlightedQuery={queryIfMatching(
                  highlightedQuery,
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
  highlightedQuery?: Technique;
}> = ({ execution, attacks, highlightedQuery }) => {
  return (
    <div className={"mb-4"}>
      <h5>{execution}</h5>
      {Object.entries(attacks).map(([attack, defences]) => {
        return (
          <ShowAttack
            key={attack}
            attack={attack as Attack}
            defences={defences}
            highlightedQuery={queryIfMatching(
              highlightedQuery,
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
  currentQuery?: Technique;
}> = ({ examTable, currentQuery }) => {
  return (
    <div>
      {Object.entries(examTable.techniques).map(([execution, attacks]) => {
        return (
          <ShowExecution
            key={execution}
            execution={execution as Execution}
            attacks={attacks}
            highlightedQuery={queryIfMatching(
              currentQuery,
              0,
              execution as Execution
            )}
          />
        );
      })}
    </div>
  );
};

function queryIfMatching<T extends keyof Technique>(
  query: Technique | undefined,
  index: T,
  match: Technique[T]
): Technique | undefined {
  console.log({ query, index, match });
  if (query != null && query[index] === match) {
    console.log("query", true);
    return query;
  }
  return undefined;
}
