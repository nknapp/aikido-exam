import type { BaseTechnique, Table, Technique, TechniqueTree } from "$core/model";
import type { Attacks, Defences, Directions } from "$core/model/TechniqueTree.ts";

export function buildExamTable(list: Iterable<Technique>): Table {
  return buildTechniqueTree(list, (technique) => technique.metadata);
}

export function buildTechniqueTree<T extends BaseTechnique, M>(
  list: Iterable<T>,
  mapFn: (technique: T, existingTechnique?: M) => M,
): TechniqueTree<M> {
  const tree: TechniqueTree<M> = {};
  for (const technique of list) {
    addTechniqueToTable(tree, technique, mapFn);
  }
  return tree;
}

function addTechniqueToTable<T extends BaseTechnique, M>(
  examTable: TechniqueTree<M>,
  technique: T,
  mapFn: (technique: T, existingTechnique?: M) => M,
): void {
  const execution: Attacks<M> = getOrCreate(examTable, technique.execution, createObject);
  const attack: Defences<M> = getOrCreate(execution, technique.attack, createObject);
  const defence: Directions<M> = getOrCreate(attack, technique.defence, createObject);
  defence[technique.direction] = mapFn(technique, defence[technique.direction]);
}

function getOrCreate<K extends string, V>(object: Partial<Record<K, V>>, key: K, createNew: () => V): V {
  const existing: V | undefined = object[key];
  if (existing != null) {
    return existing;
  }
  const created = createNew();
  object[key] = created;
  return created;
}

function createObject<K extends string, V>(): Partial<Record<K, V>> {
  return {} as Record<K, V>;
}
