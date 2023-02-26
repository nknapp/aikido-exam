import { Attacks, Defences, ExamTable } from "../exam-tables/baseTypes";
import { Technique } from "../model/Technique";
import { Defence, Direction } from "../exam-tables/audio-files";

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
  const defence: Direction[] = getOrCreate<Defence, Direction[]>(attack, technique.defence, createList);
  if (technique.direction != null) {
    defence.push(technique.direction);
  }
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

function createObject<K extends string, V>(): Record<K, V> {
  return {} as Record<K, V>;
}

function createList<T>(): Array<T> {
  return [];
}
