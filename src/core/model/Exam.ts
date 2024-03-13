import { Direction } from "./Direction";
import { TechniqueMetadata } from "./TechniqueMetadata";
import { Defence } from "./Defence";
import { Attack } from "./Attack";
import { Execution } from "./Execution";
import { TranslationSchema } from "./TranslationSchema";

export type Directions = Partial<Record<Direction, TechniqueMetadata>>;
export type Defences = Partial<Record<Defence, Directions>>;
export type Attacks = Partial<Record<Attack, Defences>>;
export type Table = Partial<Record<Execution, Attacks>>;

export interface Exam {
  labelKey: keyof TranslationSchema;
  techniques: Table;
}
