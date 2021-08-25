import { Execution, executions } from "src/exam-tables/audio-files";
import { Announcement } from "../resolve-exam-tables";
import shuffle from "lodash/shuffle";
import groupBy from "lodash/groupBy";
import flatMap from "lodash/flatMap";

export function shuffleAndSelect(
  queries: Announcement[],
  { coverage = 0.8 } = {}
): Announcement[] {
  const shuffledQueries: Announcement[] = shuffle(queries);
  const sliceEnd = Math.ceil(coverage * queries.length);
  const selection = shuffledQueries.slice(0, sliceEnd);

  return regroupByExecutions(selection);
}

function regroupByExecutions(queries: Announcement[]): Announcement[] {
  const byExecution = groupBy(queries, (query) => query[0]);
  const executionNames = Object.keys(executions) as Execution[];
  return flatMap(executionNames, (execution) => {
    const executionQueries = byExecution[execution] || [];
    return regroupByAttack(executionQueries);
  });
}

function regroupByAttack(queries: Announcement[]): Announcement[] {
  const byExecution = groupBy(queries, (query) => query[1]);
  return flatMap(Object.values(byExecution), (queries) => queries);
}
