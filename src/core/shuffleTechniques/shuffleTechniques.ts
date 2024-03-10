import { shuffleList } from "$core/shuffleTechniques/shuffleList";
import { groupBy } from "lodash";
import { executions, Technique } from "$core/model";

export function shuffleTechniques(techniques: Technique[], { coverage = 0.8 } = {}): Technique[] {
  const shuffledTechniques: Technique[] = shuffleList(techniques);
  const sliceEnd = Math.ceil(coverage * techniques.length);
  const selection = shuffledTechniques.slice(0, sliceEnd);
  return regroupByExecution(selection);
}

function regroupByExecution(list: Technique[]) {
  const groups = groupBy(list, "execution");
  const orderedGroups = executions
    .filter((execution) => groups[execution] != null)
    .flatMap((execution) => regroupByAttack(groups[execution]));

  return Array.from(Object.values(orderedGroups));
}

function regroupByAttack(list: Technique[]): Technique[] {
  const groups = groupBy(list,"attack");
  return Object.values(groups).flatMap(regroupByDefence)
}

function regroupByDefence(list: Technique[]): Technique[] {
  const groups = groupBy(list,"defence");
  return Object.values(groups).flat()
}
