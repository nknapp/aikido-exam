import { Announcement } from "src/utils/resolve-exam-tables";
import { AudioFile } from "src/exam-tables/audio-files";

export function relevantQueryParts(
  query: Announcement,
  lastQuery?: Announcement
): (AudioFile | undefined)[] {
  if (lastQuery == null) {
    return query;
  }
  for (let i = 0; i < query.length; i++) {
    if (lastQuery[i] == null || lastQuery[i] == null) {
      throw new Error("Same technique");
    }
    if (lastQuery[i] !== query[i]) {
      return query.slice(i);
    }
  }
  return [];
}
