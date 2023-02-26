import { Attack, Direction, Execution, Defence } from "src/exam-tables/audio-files";
import { ExamTable } from "src/exam-tables/baseTypes";
import merge from "lodash/merge";
import { Technique } from "../model/Technique";
import { TechniqueList } from "../model/TechniqueList";

export function resolveExamTables(examTables: ExamTable[]): TechniqueList {
  const emptyTable: ExamTable = { techniques: {} };
  const mergedTables: ExamTable = merge(emptyTable, ...examTables);
  const result: Technique[] = [];
  Object.entries(mergedTables.techniques).forEach(([execution, attacks]) => {
    if (attacks == null) {
      return;
    }
    Object.entries(attacks).forEach(([attack, defences]) => {
      if (defences == null) {
        return;
      }
      Object.entries(defences).forEach(([defence, directions]) => {
        if (directions == null) {
          return;
        }
        if (directions.length === 0) {
          result.push(new Technique([execution as Execution, attack as Attack, defence as Defence]));
        } else {
          directions.forEach((direction) => {
            result.push(
              new Technique([execution as Execution, attack as Attack, defence as Defence, direction as Direction])
            );
          });
        }
      });
    });
  });
  return new TechniqueList(result);
}
