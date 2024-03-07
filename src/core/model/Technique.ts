import { Execution } from "./Execution";
import { Attack } from "./Attack";
import { Defence } from "./Defence";
import { Direction } from "./Direction";
import { TechniqueMetadata } from "./TechniqueMetadata";

export interface Technique {
  execution: Execution;
  attack: Attack;
  defence: Defence;
  direction: Direction;
  metadata: TechniqueMetadata;
}
