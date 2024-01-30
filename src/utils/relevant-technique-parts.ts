import { AudioFile, SINGLE_DIRECTION, audioFiles } from "src/exam-tables/audio-files";
import { Technique } from "../model/Technique";

export function relevantTechniqueParts(technique: Technique, lastTechnique?: Technique): AudioFile[] {
  if (lastTechnique == null) {
    return technique.definition.filter(isValidAudioFile);
  }
  for (let i = 0; i < technique.definition.length; i++) {
    if (lastTechnique.definition[i] == null || lastTechnique.definition[i] == null) {
      throw new Error("All components of the previous technique equal the current one");
    }
    if (lastTechnique.definition[i] !== technique.definition[i]) {
      return technique.definition.filter(isValidAudioFile).slice(i);
    }
  }
  return technique.definition.filter(isValidAudioFile);
}

function isValidAudioFile(item: AudioFile | typeof SINGLE_DIRECTION): item is AudioFile {
  return audioFiles[item as AudioFile] != null;
}
