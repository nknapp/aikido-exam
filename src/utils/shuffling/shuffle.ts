import { Execution, executions } from "src/exam-tables/audio-files";
import shuffle from "lodash/shuffle";
import groupBy from "lodash/groupBy";
import flatMap from "lodash/flatMap";
import { Technique } from "../../model/Technique";

export function shuffleAndSelect(
  queries: Technique[],
  { coverage = 0.8 } = {}
): Technique[] {
  const shuffledQueries: Technique[] = shuffle(queries);
  const sliceEnd = Math.ceil(coverage * queries.length);
  const selection = shuffledQueries.slice(0, sliceEnd);

  return regroupByExecutions(selection);
}

function regroupByExecutions(queries: Technique[]): Technique[] {
  const byExecution = groupBy(queries, (query) => query.definition[0]);
  const executionNames = Object.keys(executions) as Execution[];
  return flatMap(executionNames, (execution) => {
    const executionQueries = byExecution[execution] || [];
    return regroupByAttack(executionQueries);
  });
}

function regroupByAttack(queries: Technique[]): Technique[] {
  const byExecution = groupBy(queries, (query) => query.definition[1]);
  return flatMap(Object.values(byExecution), regroupByDefence);
}

function regroupByDefence(queries: Technique[]): Technique[] {
  const byExecution = groupBy(queries, (query) => query.definition[2]);
  return flatMap(Object.values(byExecution), (queries) => queries);
}
