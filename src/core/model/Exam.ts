import type { Direction } from "./Direction";
import type { TechniqueMetadata } from "./TechniqueMetadata";
import type { Defence } from "./Defence";
import type { Attack } from "./Attack";
import type { Execution } from "./Execution";
import type { TranslatedText } from "$core/model/Dojo.ts";

export type Directions = Partial<Record<Direction, TechniqueMetadata>>;
export type Defences = Partial<Record<Defence, Directions>>;
export type Attacks = Partial<Record<Attack, Defences>>;
export type Table = Partial<Record<Execution, Attacks>>;
export type WellKnownExam = "kyu5" | "kyu4" | "kyu3" | "kyu2" | "kyu1" | "dan1" | "dan2" | "dan3" | "dan4";
export type ExamLabel =
  | {
      type: "wellknown";
      key: WellKnownExam;
    }
  | {
      type: "free";
      text: TranslatedText;
    };

export interface Exam {
  id: string;
  label: ExamLabel;
  techniques: Table;
}
