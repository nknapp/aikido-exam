import type { Technique } from "$core/model";

interface Spec {
  filter: (technique: Technique) => boolean;
}

const techniqueFilterSpec = {
  kneeFriendly: {
    filter: (technique) => technique.execution !== "suwari waza" && technique.execution !== "hanmi handachi waza",
  },
} satisfies Record<string, Spec>;

export type TechniqueFilterName = keyof typeof techniqueFilterSpec;

export type TechniqueFilters = Record<TechniqueFilterName, boolean>;

export function techniquePredicate(filters: TechniqueFilters): (technique: Technique) => boolean {
  return (technique) => {
    return !filters["kneeFriendly"] || techniqueFilterSpec.kneeFriendly.filter(technique);
  };
}
