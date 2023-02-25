import { ExamTable } from "../../exam-tables/baseTypes";
import mapValues from "lodash/mapValues";
import groupBy from "lodash/groupBy";
import { Direction } from "../../exam-tables/audio-files";
import { Technique } from "../../model/Technique";

export function buildExamTable(technique: Technique[]): ExamTable {
  return {
    techniques: groupAndMap(
      technique.map((technique) => technique.definition),
      (technique) => technique[0],
      (techniques) =>
        groupAndMap(
          techniques,
          (technique) => technique[1],
          (techniques) =>
            groupAndMap(
              techniques,
              (technique) => technique[2],
              (techniques) =>
                techniques
                  .map((technique) => technique[3])
                  .filter(
                    (technique): technique is Direction => technique != null
                  )
            )
        )
    ),
  };
}

function groupAndMap<T extends string, VIN, VOUT>(
  techniques: VIN[],
  keyFn: (technique: VIN) => T,
  mapFn: (technique: VIN[]) => VOUT
): Record<T, VOUT> {
  return mapValues(groupBy(techniques, keyFn), mapFn) as Record<T, VOUT>;
}
