import type { Attack, Defence, Direction, Execution, Technique, TechniqueMetadata, TechniqueTree } from "$core/model";
import { buildExamTable } from "$core/buildExamTable";

export type GorTechniqueTree<T> = Partial<
  Record<Execution, Partial<Record<Defence, Partial<Record<Attack, Partial<Record<Direction, T>>>>>>>
>;

export function goerlitzTree(tree: GorTechniqueTree<Record<never, unknown>>): TechniqueTree<Record<never, unknown>> {
  return buildExamTable(resolveGorTechniqueTree(tree));
}

export function* resolveGorTechniqueTree(tree: GorTechniqueTree<TechniqueMetadata>): Generator<Technique> {
  for (const [execution, defences] of entries(tree)) {
    for (const [defence, attacks] of entries(defences)) {
      for (const [attack, directions] of entries(attacks)) {
        for (const [direction, metadata] of entries(directions)) {
          yield { execution, attack, defence, direction, metadata };
        }
      }
    }
  }
}

const entries = Object.entries as <K extends string, V>(object: Partial<Record<K, V>>) => [K, V][];
