import { ExamTable } from "src/exam-tables/baseTypes";
import merge from "lodash/merge";
import { Technique } from "../model/Technique";
import { TechniqueList } from "../model/TechniqueList";

export function resolveExamTables(examTables: ExamTable[]): TechniqueList {
  const emptyTable: ExamTable = { techniques: {} };
  const mergedTables: ExamTable = merge(emptyTable, ...examTables);
  const result: Technique[] = [];
  for (const [execution, attacks] of entries(mergedTables.techniques)) {
    for (const [attack, defences] of entries(attacks)) {
      for (const [defence, directions] of entries(defences)) {
        for (const [direction, metadata] of entries(directions)) {
          result.push(new Technique([execution, attack, defence, direction], metadata));
        }
      }
    }
  }
  return new TechniqueList(result);
}

const entries = Object.entries as <K extends string, V>(object: Partial<Record<K, V>>) => [K, V][];
