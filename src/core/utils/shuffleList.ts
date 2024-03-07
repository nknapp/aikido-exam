import shuffle from "lodash/shuffle";

export function shuffleList<T>(list: readonly T[]): T[] {
  return shuffle(list);
}
