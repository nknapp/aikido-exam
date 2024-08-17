import type { Exam } from "$core/model/Exam";

export type TranslatedText = {
  en: string;
} & Record<string, string>;

export interface Dojo {
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
  logo: string | URL;
}

export interface DojoDetails {
  exams: Exam[];
  additionalText?: TranslatedText;
  sourceLink?: string;
}
