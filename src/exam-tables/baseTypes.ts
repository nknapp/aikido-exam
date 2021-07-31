import {
  Attack,
  Direction,
  Execution,
  Technique,
} from "src/exam-tables/audio-files";

export type Techniques = Partial<Record<Technique, Direction[]>>;
export type Attacks = Partial<Record<Attack, Techniques>>
export type Table = Partial<Record<Execution, Attacks>>

export interface ExamTable {
  techniques: Table;
}
