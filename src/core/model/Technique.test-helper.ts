import type { Direction, Execution, Attack, Defence, Technique, TechniqueMetadata } from "$core/model";

export function createTechnique(
  execution: Execution,
  attack: Attack,
  defence: Defence,
  direction: Direction,
  metadata: TechniqueMetadata = {},
): Technique {
  return { execution, attack, defence, direction, metadata };
}

export function techniqueAsString(technique: Technique): string {
  const { execution, attack, defence, direction } = technique;
  return `${execution} ${attack} ${defence} ${direction}`;
}

export function techniqueComponentsAsString(
  execution: Execution,
  attack: Attack,
  defence: Defence,
  direction: Direction,
) {
  return `${execution} ${attack} ${defence} ${direction}`;
}
