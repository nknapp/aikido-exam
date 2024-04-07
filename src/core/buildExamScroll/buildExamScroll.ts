import {
  type Attack,
  type BaseTechnique,
  buildTechniqueId,
  type Defence,
  type Direction,
  type Execution,
} from "$core/model";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";

export interface ExamScrollField<T> {
  value: T;
  relevant: boolean;
}

export type ExamScrollEntry = {
  id: string;
  execution: ExamScrollField<Execution>;
  attack: ExamScrollField<Attack>;
  defence: ExamScrollField<Defence>;
  direction: ExamScrollField<Direction>;
};

export function* buildExamScroll(techniques: BaseTechnique[]): Generator<ExamScrollEntry> {
  let lastTechnique: BaseTechnique | undefined = undefined;
  for (const technique of techniques) {
    const relevantProps = relevantTechniqueProperties(technique, lastTechnique);
    yield {
      id: buildTechniqueId(technique),
      execution: {
        value: technique.execution,
        relevant: relevantProps.includes("execution"),
      },
      attack: {
        value: technique.attack,
        relevant: relevantProps.includes("attack"),
      },
      defence: {
        value: technique.defence,
        relevant: relevantProps.includes("defence"),
      },
      direction: {
        value: technique.direction,
        relevant: relevantProps.includes("direction"),
      },
    };
    lastTechnique = technique;
  }
}
