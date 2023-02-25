// noinspection RedundantIfStatementJS

import { Technique } from "../model/Technique";

export interface TechniqueFilters {
  badKnees: boolean;
}

export function filterTechniques(
  techniques: Technique[],
  filters: TechniqueFilters
): Technique[] {
  return techniques.filter((technique) =>
    techniqueMatchesFilter(technique, filters)
  );
}

function techniqueMatchesFilter(
  technique: Technique,
  filters: TechniqueFilters
): boolean {
  if (filters.badKnees && !kneeFriendly(technique)) {
    return false;
  }
  return true;
}

function kneeFriendly(technique: Technique): boolean {
  return (
    technique.definition[0] !== "suwari waza" &&
    technique.definition[0] !== "hanmi handachi waza"
  );
}
