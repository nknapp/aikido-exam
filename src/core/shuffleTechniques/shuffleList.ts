import shuffle from "lodash/shuffle";

export function shuffleList<T>(list: T[]): T[] {
    return shuffle(list)
}