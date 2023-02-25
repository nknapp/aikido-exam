import { Execution, executions } from "src/exam-tables/audio-files";
import shuffle from "lodash/shuffle";
import groupBy from "lodash/groupBy";
import flatMap from "lodash/flatMap";
import { Technique } from "../../model/Technique";

export function shuffleAndSelect(
  techniques: Technique[],
  { coverage = 0.8 } = {}
): Technique[] {
  const shuffledtechniques: Technique[] = shuffle(techniques);
  const sliceEnd = Math.ceil(coverage * techniques.length);
  const selection = shuffledtechniques.slice(0, sliceEnd);

  return regroupByExecutions(selection);
}

function regroupByExecutions(techniques: Technique[]): Technique[] {
  const byExecution = groupBy(
    techniques,
    (technique) => technique.definition[0]
  );
  const executionNames = Object.keys(executions) as Execution[];
  return flatMap(executionNames, (execution) => {
    const executiontechniques = byExecution[execution] || [];
    return regroupByAttack(executiontechniques);
  });
}

function regroupByAttack(techniques: Technique[]): Technique[] {
  const byExecution = groupBy(
    techniques,
    (technique) => technique.definition[1]
  );
  return flatMap(Object.values(byExecution), regroupByDefence);
}

function regroupByDefence(techniques: Technique[]): Technique[] {
  const byExecution = groupBy(
    techniques,
    (technique) => technique.definition[2]
  );
  return flatMap(Object.values(byExecution), (techniques) => techniques);
}
