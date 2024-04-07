import type { Execution } from "./Execution";
import type { Attack } from "./Attack";
import type { Defence } from "./Defence";
import type { Direction } from "./Direction";
import type { TechniqueMetadata } from "./TechniqueMetadata";

export const techniqueProperties = ["execution", "attack", "defence", "direction"] as const;
export type TechniqueProperty = (typeof techniqueProperties)[number];

export interface BaseTechnique {
  execution: Execution;
  attack: Attack;
  defence: Defence;
  direction: Direction;
}

export interface Technique extends BaseTechnique {
  metadata: TechniqueMetadata;
}

export function buildTechniqueId(technique: BaseTechnique) {
  return `${technique.execution} ${technique.attack} ${technique.defence} ${technique.direction}`.replace(/\W/g, "_");
}
