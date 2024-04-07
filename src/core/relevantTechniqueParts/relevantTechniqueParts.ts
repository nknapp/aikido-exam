import type { BaseTechnique } from "$core/model/Technique";
import type { SpeechFile } from "$core/model";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";

export function relevantTechniqueParts(technique: BaseTechnique, lastTechnique?: BaseTechnique): SpeechFile[] {
  const relevantProps = relevantTechniqueProperties(technique, lastTechnique);
  return relevantProps.map((prop) => technique[prop]) as SpeechFile[];
}
