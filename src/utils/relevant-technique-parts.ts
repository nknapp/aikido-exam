import { AudioFile } from "src/exam-tables/audio-files";
import { Technique } from "../model/Technique";

export function relevantTechniqueParts(
  technique: Technique,
  lastTechnique?: Technique
): (AudioFile | undefined)[] {
  if (lastTechnique == null) {
    return technique.definition;
  }
  for (let i = 0; i < technique.definition.length; i++) {
    if (
      lastTechnique.definition[i] == null ||
      lastTechnique.definition[i] == null
    ) {
      throw new Error("Same defence");
    }
    if (lastTechnique.definition[i] !== technique.definition[i]) {
      return technique.definition.slice(i);
    }
  }
  return technique.definition;
}
