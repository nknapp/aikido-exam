import { Attack, Direction, Execution, Defence } from "src/exam-tables/audio-files";
import { TranslationSchema } from "../i18n/translations/schema";

export interface YoutubeLink {
  videoId: string;
  durationSeconds: number;
  title: string;
}

// To be extended
export type Metadata = {
  youtube?: YoutubeLink | YoutubeLink[];
};

export type Directions = Partial<Record<Direction, Metadata>>;
export type Defences = Partial<Record<Defence, Directions>>;
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
