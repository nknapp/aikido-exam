import type { BaseTechnique, YoutubeLink } from "$core/model";
import aikidoKompendium from "@/data/videopacks/aikido-kompendium";

export function resolveYoutubeLinks(technique: BaseTechnique | null): YoutubeLink[] {
  if (technique == null) return [];

  return (
    // @ts-expect-error Partial objects resolve to any, which is not relevant in our case.
    aikidoKompendium.videos[technique.execution]?.[technique.attack]?.[technique.defence]?.[technique.direction] ?? []
  );
}
