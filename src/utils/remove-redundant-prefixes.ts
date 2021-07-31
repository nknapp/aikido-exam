import { Announcement } from "src/utils/resolve-exam-tables";
import { AudioFile } from "src/exam-tables/audio-files";


export function differingSuffix(
  query: Announcement,
  lastQuery?: Announcement
): (AudioFile | undefined)[] | undefined {
  if (lastQuery == null) {
    return query;
  }
  for (let i = 0; i < query.length; i++) {
    if (lastQuery[i] == null || lastQuery[i] == null) {
      // TODO: Is this the same technique? Check edge cases
      return undefined;
    }
    if (lastQuery[i] !== query[i]) {
      return query.slice(i).filter((file): file is AudioFile => file != null);
    }
  }
  return [];
}
