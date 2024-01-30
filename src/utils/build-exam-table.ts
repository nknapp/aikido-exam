import { Attacks, Defences, Directions, ExamTable } from "../exam-tables/baseTypes";
import { Technique } from "../model/Technique";

export function buildExamTable(list: Iterable<Technique>): ExamTable {
  const examTable: ExamTable = { techniques: {} };
  for (const technique of list) {
    addTechniqueToTable(examTable, technique);
  }
  return examTable;
}

function addTechniqueToTable(examTable: ExamTable, technique: Technique): void {
  const execution: Attacks = getOrCreate(examTable.techniques, technique.execution, createObject);
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
