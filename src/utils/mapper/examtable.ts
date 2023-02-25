import { Technique } from "../resolve-exam-tables";
import { ExamTable } from "../../exam-tables/baseTypes";
import mapValues from "lodash/mapValues";
import groupBy from "lodash/groupBy";
import { Direction } from "../../exam-tables/audio-files";

export function buildExamTable(queries: Technique[]): ExamTable {
  return {
    techniques: groupAndMap(
      queries,
      (query) => query[0],
      (queries) =>
        groupAndMap(
          queries,
          (query) => query[1],
          (queries) =>
            groupAndMap(
              queries,
              (query) => query[2],
              (queries) =>
                queries
                  .map((query) => query[3])
                  .filter((query): query is Direction => query != null)
            )
        )
    ),
  };
}

function groupAndMap<T extends string, VIN, VOUT>(
  queries: VIN[],
  keyFn: (query: VIN) => T,
  mapFn: (query: VIN[]) => VOUT
): Record<T, VOUT> {
  return mapValues(groupBy(queries, keyFn), mapFn) as Record<T, VOUT>;
}
