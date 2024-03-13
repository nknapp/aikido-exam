import merge from "lodash/merge";
import { Technique, Exam } from "$core/model";

export function resolveExamTables(examTables: Exam[]): Technique[] {
  const emptyTable: Exam = { techniques: {} };
  const mergedTables: Exam = merge(emptyTable, ...examTables);
  const result: Technique[] = [];
  for (const [execution, attacks] of entries(mergedTables.techniques)) {
    for (const [attack, defences] of entries(attacks)) {
      for (const [defence, directions] of entries(defences)) {
        for (const [direction, metadata] of entries(directions)) {
          result.push({ execution, attack, defence, direction, metadata });
        }
      }
    }
  }
  return result;
}

const entries = Object.entries as <K extends string, V>(object: Partial<Record<K, V>>) => [K, V][];
