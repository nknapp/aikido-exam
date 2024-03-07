import type { Execution } from "./Execution";
import type { Attack } from "./Attack";
import type { Defence } from "./Defence";
import type { Direction } from "./Direction";
import type { TechniqueMetadata } from "./TechniqueMetadata";

export interface Technique {
  execution: Execution;
  attack: Attack;
  defence: Defence;
  direction: Direction;
  metadata: TechniqueMetadata;
}
