// noinspection RedundantIfStatementJS

import { Technique } from "../model/Technique";

export interface TechniqueFilters {
  badKnees: boolean;
}

export function techniquePredicate(filters: TechniqueFilters): (technique: Technique) => boolean {
  return (technique) => {
    if (filters.badKnees && !kneeFriendly(technique)) {
      return false;
    }
    return true;
  };
}

function kneeFriendly(technique: Technique): boolean {
  return technique.definition[0] !== "suwari waza" && technique.definition[0] !== "hanmi handachi waza";
}
