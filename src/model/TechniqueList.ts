import { Technique } from "./Technique";
import shuffle from "lodash/shuffle";

export type TechniquePart = "execution" | "attack" | "defence";

export type Group<K, V> = {
  name: K;
  items: V;
};

export class TechniqueList {
  techniques: Technique[];

  static concat(lists: TechniqueList[]): TechniqueList {
    return new TechniqueList(lists.flatMap((list) => list.techniques));
  }
  constructor(techniques: Technique[] = []) {
    this.techniques = techniques;
  }

  groupBy<T extends TechniquePart>(groupProperty: T): Array<Group<Technique[T], TechniqueList>> {
    const grouper: Grouper<Technique[T], Technique> = new Grouper();
    for (const technique of this.techniques) {
      grouper.getOrCreate(technique[groupProperty]).push(technique);
    }
    return grouper.groups((techniques) => new TechniqueList(techniques));
  }

  map<T>(mapFn: (technique: Technique, index: number) => T): T[] {
    return this.techniques.map(mapFn);
  }

  filter(predicate: (technique: Technique) => boolean): TechniqueList {
    return new TechniqueList(this.techniques.filter(predicate));
  }

  includes(technique?: Technique): boolean {
    return technique != null && this.techniques.includes(technique);
  }

  get hasDirections(): boolean {
    return this.techniques.some((technique) => technique.direction != null);
  }

  shuffle(): TechniqueList {
    return new TechniqueList(shuffle(this.techniques));
  }

  takeFirst(percent: number): TechniqueList {
    const sliceEnd = Math.ceil(percent * this.techniques.length);
    return new TechniqueList(this.techniques.slice(0, sliceEnd));
  }

  at(index: number): Technique {
    return this.techniques[index];
  }
  get length(): number {
    return this.techniques.length;
  }
}

class Grouper<K, V> {
  readonly map = new Map<K, V[]>();

  getOrCreate(key: K): V[] {
    const group = this.map.get(key);
    if (group != null) return group;
    const newGroup: V[] = [];
    this.map.set(key, newGroup);
    return newGroup;
  }

  groups<T>(valueFn: (value: V[]) => T): Array<Group<K, T>> {
    return Array.from(this.map.entries()).map((entry) => {
      return { name: entry[0], items: valueFn(entry[1]) };
    });
  }
}
