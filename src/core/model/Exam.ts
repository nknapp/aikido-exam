import type { Direction } from "./Direction";
import type { TechniqueMetadata } from "./TechniqueMetadata";
import type { Defence } from "./Defence";
import type { Attack } from "./Attack";
import type { Execution } from "./Execution";
import type { TranslationSchema } from "./TranslationSchema";

export type Directions = Partial<Record<Direction, TechniqueMetadata>>;
export type Defences = Partial<Record<Defence, Directions>>;
export type Attacks = Partial<Record<Attack, Defences>>;
export type Table = Partial<Record<Execution, Attacks>>;

export interface Exam {
  id: string;
  labelKey: keyof TranslationSchema;
  techniques: Table;
}
