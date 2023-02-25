import { AudioFile } from "src/exam-tables/audio-files";
import { Technique } from "../model/Technique";

export function relevantQueryParts(
  query: Technique,
  lastQuery?: Technique
): (AudioFile | undefined)[] {
  if (lastQuery == null) {
    return query.definition;
  }
  for (let i = 0; i < query.definition.length; i++) {
    if (lastQuery.definition[i] == null || lastQuery.definition[i] == null) {
      throw new Error("Same defence");
    }
    if (lastQuery.definition[i] !== query.definition[i]) {
      return query.definition.slice(i);
    }
  }
  return query.definition;
}
