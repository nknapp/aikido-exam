import type { Technique, Exam } from "$core/model";

export function resolveExamTables(examTables: Exam[]): Technique[] {
  const result: Technique[] = [];
  for (const exam of examTables) {
    for (const [execution, attacks] of entries(exam.techniques)) {
      for (const [attack, defences] of entries(attacks)) {
        for (const [defence, directions] of entries(defences)) {
          for (const [direction, metadata] of entries(directions)) {
            result.push({ execution, attack, defence, direction, metadata });
          }
        }
      }
    }
  }

  return result;
}

const entries = Object.entries as <K extends string, V>(object: Partial<Record<K, V>>) => [K, V][];
