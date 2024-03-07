import type { Technique } from "$core/model";

export interface TechniqueFilters {
  badKnees: boolean;
}

export function techniquePredicate(filters: TechniqueFilters): (technique: Technique) => boolean {
  return (technique) => {
    return !filters.badKnees || kneeFriendly(technique);
  };
}

function kneeFriendly(technique: Technique): boolean {
  return technique.execution !== "suwari waza" && technique.execution !== "hanmi handachi waza";
}
