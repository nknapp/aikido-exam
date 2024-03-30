import type { Exam } from "$core/model/Exam";
import type { TranslationSchema } from "$core/model/TranslationSchema.ts";

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
  additionalText?: keyof TranslationSchema;
  sourceLink?: string;
}
