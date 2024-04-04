import { shuffleList } from "$core/utils/shuffleList.ts";
import { type Technique } from "$core/model";

export function shuffleTechniques(techniques: Technique[], { includePercent = 100 } = {}): Technique[] {
  const shuffledTechniques: Technique[] = shuffleList(techniques);
  const sliceEnd = Math.ceil((includePercent * techniques.length) / 100);
  return shuffledTechniques.slice(0, sliceEnd);
}
