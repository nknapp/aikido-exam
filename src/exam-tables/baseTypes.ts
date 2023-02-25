import {
  Attack,
  Direction,
  Execution,
  Defence,
} from "src/exam-tables/audio-files";

export type Defences = Partial<Record<Defence, Direction[]>>;
export type Attacks = Partial<Record<Attack, Defences>>;
export type Table = Partial<Record<Execution, Attacks>>;

export interface ExamTable {
  techniques: Table;
}
