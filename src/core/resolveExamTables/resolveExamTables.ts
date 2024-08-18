import type { Technique, Exam, TechniqueTree, BaseTechnique } from "$core/model";

export function resolveExamTables(examTables: Exam[]): Technique[] {
  return resolveTechniqueTrees(
    examTables.map((exam) => exam.techniques),
    (technique, metadata) => ({ ...technique, metadata }),
  );
}

export function resolveTechniqueTrees<T extends BaseTechnique, M>(
  trees: TechniqueTree<M>[],
  mapFn: (technique: BaseTechnique, metadata: M) => T,
): T[] {
  const result: T[] = [];
  for (const tree of trees) {
    for (const [execution, attacks] of entries(tree)) {
      for (const [attack, defences] of entries(attacks)) {
        for (const [defence, directions] of entries(defences)) {
          for (const [direction, metadata] of entries(directions)) {
            result.push(mapFn({ execution, attack, defence, direction }, metadata));
          }
        }
      }
    }
  }

  return result;
}

const entries = Object.entries as <K extends string, V>(object: Partial<Record<K, V>>) => [K, V][];
