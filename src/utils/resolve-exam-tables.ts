import {
  Attack,
  Direction,
  Execution,
  Technique,
} from "src/exam-tables/audio-files";
import { ExamTable } from "src/exam-tables/baseTypes";
import merge from "lodash/merge";

export type Announcement = [Execution, Attack, Technique, Direction?];

export function resolveExamTables(examTables: ExamTable[]): Announcement[] {
  const emptyTable: ExamTable = { techniques: {} };
  const mergedTables: ExamTable = merge(emptyTable, ...examTables);
  const result: Announcement[] = [];
  Object.entries(mergedTables.techniques).forEach(([execution, attacks]) => {
    if (attacks == null) {
      return;
    }
    Object.entries(attacks).forEach(([attack, techniques]) => {
      if (techniques == null) {
        return;
      }
      Object.entries(techniques).forEach(([technique, directions]) => {
        if (directions == null) {
          return;
        }
        if (directions.length === 0) {
          result.push([
            execution as Execution,
            attack as Attack,
            technique as Technique,
          ]);
        } else {
          directions.forEach((direction) => {
            result.push([
              execution as Execution,
              attack as Attack,
              technique as Technique,
              direction as Direction,
            ]);
          });
        }
      });
    });
  });
  return result;
}
