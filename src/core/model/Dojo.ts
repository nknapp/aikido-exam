import type { Exam } from "$core/model/Exam";

export type TranslatedText = {
  en: string;
} & Record<string, string>;

export interface Dojo {
  draft?: boolean;
  info: DojoInfo;
  details: () => Promise<{ default: DojoDetails }>;
}

export interface ResolvedDojo {
  info: DojoInfo;
  details: DojoDetails;
}

export interface DojoInfo {
  id: string;
  name: string;
  compareToAifd?: boolean;
  logo?: string | URL;
}

export interface DojoDetails {
  exams: Exam[];
  additionalText?: TranslatedText;
  sourceLink?: string;
}
