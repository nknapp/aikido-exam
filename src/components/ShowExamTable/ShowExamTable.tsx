import React from "react";
import { Col, Row } from "react-bootstrap";
import { Attack, Defence, Execution } from "../../exam-tables/audio-files";
import { Technique } from "../../model/Technique";
import { TechniqueList } from "../../model/TechniqueList";

const ShowDirections: React.FC<{
  techniques: TechniqueList;
  highlightedTechnique?: Technique;
}> = ({ techniques, highlightedTechnique }) => {
  return (
    <div>
      (
      {techniques.map((technique, index) => {
        return (
          <React.Fragment key={technique.direction + "-" + index}>
            {index > 0 && ", "}
            <span className={technique === highlightedTechnique ? "highlighted-technique" : ""}>
              {technique.direction}
            </span>
          </React.Fragment>
        );
      })}
      )
    </div>
  );
};

const ShowDefence: React.FC<{
  defence: Defence;
  techniques: TechniqueList;
  highlightedTechnique?: Technique;
}> = ({ defence, techniques, highlightedTechnique }) => {
  return (
    <div className={"me-5 d-flex"} style={{ whiteSpace: "nowrap" }}>
      <div className={"me-2 "}>
        <span className={techniques.includes(highlightedTechnique) ? "highlighted-technique" : ""}>{defence}</span>
      </div>
      {techniques.hasDirections && (
        <ShowDirections techniques={techniques} highlightedTechnique={highlightedTechnique} />
      )}
    </div>
  );
};

const ShowAttack: React.FC<{
  attack: Attack;
  techniques: TechniqueList;
  highlightedTechnique?: Technique;
}> = ({ attack, techniques, highlightedTechnique }) => {
  return (
    <Row className={"mb-2"}>
      <Col sm={5} md={4}>
        <span className={techniques.includes(highlightedTechnique) ? "highlighted-technique" : ""}>{attack}</span>
      </Col>
      <Col className={"ps-5 ps-sm-0"}>
        <div className={"d-flex flex-wrap"}>
          {techniques.groupBy("defence").map((defence) => {
            return (
              <ShowDefence
                key={defence.name}
                defence={defence.name}
                techniques={defence.items}
                highlightedTechnique={highlightedTechnique}
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
  techniques: TechniqueList;
  highlightedTechnique?: Technique;
}> = ({ execution, techniques, highlightedTechnique }) => {
  return (
    <div className={"mb-4"}>
      <h5>{execution}</h5>
      {techniques.groupBy("attack").map((attack) => {
        return (
          <ShowAttack
            key={attack.name}
            attack={attack.name}
            techniques={attack.items}
            highlightedTechnique={highlightedTechnique}
          />
        );
      })}
    </div>
  );
};

export const ShowExamTable: React.FC<{
  techniques: TechniqueList;
  currentTechnique?: Technique;
}> = ({ techniques, currentTechnique }) => {
  return (
    <div>
      {techniques.groupBy("execution").map((execution) => {
        return (
          <ShowExecution
            key={execution.name}
            execution={execution.name}
            techniques={execution.items}
            highlightedTechnique={currentTechnique}
          />
        );
      })}
    </div>
  );
};
