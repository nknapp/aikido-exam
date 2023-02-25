import { Technique } from "./Technique";

type TechniquePart = "execution" | "attack" | "defence";

type Group<K, V> = {
  name: K;
  items: V;
};

export class TechniqueList {
  techniques: Technique[];
  constructor(techniques: Technique[]) {
    this.techniques = techniques;
  }

  groupBy<T extends TechniquePart>(part: T): Array<Group<Technique[T], TechniqueList>> {
    const grouper: Grouper<Technique[T], Technique> = new Grouper();
    for (const technique of this.techniques) {
      grouper.getOrCreate(technique[part]).push(technique);
    }
    return grouper.groups((techniques) => new TechniqueList(techniques));
  }

  map<T>(mapFn: (technique: Technique, index: number) => T): T[] {
    return this.techniques.map(mapFn);
  }

  includes(technique?: Technique): boolean {
    return technique != null && this.techniques.includes(technique);
  }

  get hasDirections(): boolean {
    return this.techniques.some((technique) => technique.direction != null);
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
