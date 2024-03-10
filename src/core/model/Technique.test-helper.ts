import { Direction, Execution, Attack, Defence, Technique, TechniqueMetadata } from "$core/model";

export function createTechnique(
  execution: Execution,
  attack: Attack,
  defence: Defence,
  direction: Direction,
  metadata: TechniqueMetadata = {},
): Technique {
  return { execution, attack, defence, direction, metadata };
}
