import { shuffleList } from "$core/utils/shuffleList.ts";
import { type Technique } from "$core/model";

export function shuffleTechniques(techniques: Technique[], { coverage = 0.8 } = {}): Technique[] {
  const shuffledTechniques: Technique[] = shuffleList(techniques);
  const sliceEnd = Math.ceil(coverage * techniques.length);
  return shuffledTechniques.slice(0, sliceEnd);
}
