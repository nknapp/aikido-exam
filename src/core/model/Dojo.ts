import { Exam } from "$core/model/Exam";

export interface Dojo {
  info: DojoInfo;
  details: () => Promise<{ default: DojoDetails }>;
}

export interface DojoInfo {
  id: string;
  name: string;
  logo: string | URL;
}

export interface DojoDetails {
  exams: Record<string, Exam>;
  additionalText?: string;
  sourceLink?: string;
}
