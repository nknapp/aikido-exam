import type { Exam, Technique } from "$core/model";
import { resolveExamTables } from "$core/resolveExamTables";
import { type TechniqueFilters, techniquePredicate } from "./techniqueFilter";
import { shuffleTechniques } from "$core/shuffleTechniques";
import { groupTechniques } from "$core/groupTechniques/groupTechniques.ts";

export interface ChooseTechniqueOptions {
  selectedExams?: Set<string>;
  filters?: TechniqueFilters;
  order?: OrderOptions;
}

export interface OrderOptions {
  randomize: boolean;
  includePercent?: number;
  orderExecutions?: boolean;
}

export function chooseTechniques(allExams: readonly Exam[], options: ChooseTechniqueOptions): Technique[] {
  const selectedExams = options.selectedExams ?? new Set();
  const filters = options.filters ?? {};
  const randomize = options.order?.randomize ?? false;
  const includePercent = options.order?.includePercent ?? 100;
  const orderExecutions = options.order?.orderExecutions ?? false;

  let result = resolveExamTables(allExams.filter((exam) => selectedExams.has(exam.id)));
  result = result.filter(techniquePredicate(filters));
  if (randomize) {
    result = shuffleTechniques(result, { includePercent });
  }
  return groupTechniques(result, { orderExecutions });
}
