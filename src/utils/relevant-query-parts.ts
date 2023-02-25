import { Technique } from "src/utils/resolve-exam-tables";
import { AudioFile } from "src/exam-tables/audio-files";

export function relevantQueryParts(
  query: Technique,
  lastQuery?: Technique
): (AudioFile | undefined)[] {
  if (lastQuery == null) {
    return query;
  }
  for (let i = 0; i < query.length; i++) {
    if (lastQuery[i] == null || lastQuery[i] == null) {
      throw new Error("Same defence");
    }
    if (lastQuery[i] !== query[i]) {
      return query.slice(i);
    }
  }
  return query;
}
