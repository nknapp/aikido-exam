import type { Attacks, Defences, Directions, Table, Technique } from "$core/model";

export function buildExamTable(list: Iterable<Technique>): Table {
  const examTable: Table = {};
  for (const technique of list) {
    addTechniqueToTable(examTable, technique);
  }
  return examTable;
}

function addTechniqueToTable(examTable: Table, technique: Technique): void {
  const execution: Attacks = getOrCreate(examTable, technique.execution, createObject);
  const attack: Defences = getOrCreate(execution, technique.attack, createObject);
  const defence: Directions = getOrCreate(attack, technique.defence, createObject);
  defence[technique.direction] = technique.metadata;
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
