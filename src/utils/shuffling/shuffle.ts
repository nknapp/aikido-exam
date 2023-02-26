import { Group, TechniqueList } from "../../model/TechniqueList";
import { Execution, executions } from "../../exam-tables/audio-files";

const executionOrder = Object.keys(executions) as Execution[];

export function shuffleAndSelect(techniques: TechniqueList, { coverage = 0.8 } = {}): TechniqueList {
  const shuffledTechniques: TechniqueList = techniques.shuffle();
  const selection = shuffledTechniques.takeFirst(coverage);
  return regroupByExecution(selection);
}

function regroupByExecution(list: TechniqueList) {
  const groups = list.groupBy("execution");
  const orderedGroups = executionOrder
    .map((execution) => groups.find((group) => group.name === execution))
    .filter((group): group is Group<Execution, TechniqueList> => group != null);

  return TechniqueList.concat(orderedGroups.map((group) => regroupByAttack(group.items)));
}

function regroupByAttack(list: TechniqueList): TechniqueList {
  return TechniqueList.concat(list.groupBy("attack").map((group) => regroupByDefence(group.items)));
}

function regroupByDefence(list: TechniqueList): TechniqueList {
  return TechniqueList.concat(list.groupBy("defence").map((group) => group.items));
}
