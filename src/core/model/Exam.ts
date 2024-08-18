import type { TechniqueMetadata } from "./TechniqueMetadata";
import type { TranslatedText } from "$core/model/Dojo.ts";
import type { TechniqueTree } from "$core/model/TechniqueTree.ts";

export type Table = TechniqueTree<TechniqueMetadata>;
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
