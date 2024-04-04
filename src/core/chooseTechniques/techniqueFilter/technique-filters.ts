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

export type TechniqueFilters = Partial<Record<TechniqueFilterName, boolean>>;

export function techniquePredicate(filters: TechniqueFilters): (technique: Technique) => boolean {
  // This can be refactored to be generic based on the techniqueFilterSpec, but that does not make sense
  // with just one filter
  return (technique) => {
    return !filters["kneeFriendly"] || techniqueFilterSpec.kneeFriendly.filter(technique);
  };
}
