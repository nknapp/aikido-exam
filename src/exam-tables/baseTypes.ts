import { Attack, Direction, Execution, Defence } from "src/exam-tables/audio-files";
import { TranslationSchema } from "../i18n/translations/schema";

export type Defences = Partial<Record<Defence, Direction[]>>;
export type Attacks = Partial<Record<Attack, Defences>>;
export type Table = Partial<Record<Execution, Attacks>>;

export interface ExamTable {
  techniques: Table;
}

export type ExamSpec = {
  labelKey: keyof TranslationSchema;
  table: ExamTable;
};

export interface DojoLazyData {
  exams: Record<string, ExamSpec>;
  additionalText?: string;
  sourceLink?: string;
}

export interface Dojo {
  name: string;
  logo?: string;
  lazyData: () => Promise<{ default: DojoLazyData }>;
}

export function dojoLazyData(spec: DojoLazyData): DojoLazyData {
  return spec;
}

export function dojo(spec: Dojo): Dojo {
  return spec;
}
