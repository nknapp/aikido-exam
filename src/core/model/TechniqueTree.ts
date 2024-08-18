import type { Direction } from "$core/model/Direction.ts";
import type { Defence } from "$core/model/Defence.ts";
import type { Attack } from "$core/model/Attack.ts";
import type { Execution } from "$core/model/Execution.ts";

export type Directions<T> = Partial<Record<Direction, T>>;
export type Defences<T> = Partial<Record<Defence, Directions<T>>>;
export type Attacks<T> = Partial<Record<Attack, Defences<T>>>;
export type TechniqueTree<T> = Partial<Record<Execution, Attacks<T>>>;
