import type { Technique, TechniqueProperty } from "$core/model/Technique";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";
import { type Attack, type Defence, type Direction, type Execution, SINGLE_DIRECTION } from "$core/model";

export interface WithoutIrrelevantPartsReturn {
  execution?: Execution;
  attack?: Attack;
  defence?: Defence;
  direction?: Direction;
}

export function withoutIrrelevantParts(technique: Technique, lastTechnique?: Technique): WithoutIrrelevantPartsReturn {
  const result: WithoutIrrelevantPartsReturn = {
    execution: undefined,
    attack: undefined,
    defence: undefined,
    direction: undefined,
  };
  for (const prop of relevantTechniqueProperties(technique, lastTechnique)) {
    updateResult(technique, prop, result);
  }
  return result;
}

function updateResult<T extends TechniqueProperty>(
  technique: Technique,
  prop: T,
  result: WithoutIrrelevantPartsReturn,
) {
  result[prop] = technique[prop] == SINGLE_DIRECTION ? undefined : technique[prop];
}
