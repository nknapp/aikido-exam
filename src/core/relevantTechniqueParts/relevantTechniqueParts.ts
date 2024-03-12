import { Technique } from "$core/model/Technique";
import { SpeechFile } from "$core/slots";
import { SINGLE_DIRECTION } from "$core/model";
import { findIndexOfFirstDifference } from "$core/relevantTechniqueParts/findIndexOfFirstDifference";

export function relevantTechniqueParts(technique: Technique, lastTechnique?: Technique): SpeechFile[] {
  const techniqueComponents = asComponents(technique);
  if (lastTechnique == null) {
    return techniqueComponents;
  }
  const lastTechniqueComponents = asComponents(lastTechnique);
  const firstDifference = findIndexOfFirstDifference(techniqueComponents, lastTechniqueComponents);
  if (firstDifference === -1) {
    throw new Error("All components of the previous technique equal the current one");
  }
  return techniqueComponents.slice(firstDifference);
}

function asComponents(technique: Technique): SpeechFile[] {
  if (technique.direction === SINGLE_DIRECTION) {
    return [technique.execution, technique.attack, technique.defence];
  }
  return [technique.execution, technique.attack, technique.defence, technique.direction];
}
