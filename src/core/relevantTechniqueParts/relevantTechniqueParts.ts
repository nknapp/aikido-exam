import type { Technique } from "$core/model/Technique";
import type { SpeechFile } from "$core/slots";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";

export function relevantTechniqueParts(technique: Technique, lastTechnique?: Technique): SpeechFile[] {
  const relevantProps = relevantTechniqueProperties(technique, lastTechnique);
  return relevantProps.map((prop) => technique[prop]) as SpeechFile[];
}
