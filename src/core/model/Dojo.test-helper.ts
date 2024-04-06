import type { DojoDetails, DojoInfo, ResolvedDojo } from "$core/model/Dojo.ts";
import { createExam } from "$core/model/Exam.test-helper.ts";

export function createDojoInfo(partialInfo: Partial<DojoInfo> = {}): DojoInfo {
  return {
    logo: "logo.png",
    name: "logo",
    id: "my-dojo",
    ...partialInfo,
  };
}

export function createExams() {
  return [
    createExam({ labelKey: "chooser.button.kyu5" }),
    createExam({ labelKey: "chooser.button.kyu4" }),
    createExam({ labelKey: "chooser.button.kyu3" }),
  ];
}

export function createDojoDetails(partialDetails: Partial<DojoDetails> = {}): DojoDetails {
  return {
    additionalText: "dojo.darmstadt.additionalText",
    sourceLink: "https://example.com/sourceLink",
    exams: createExams(),
    ...partialDetails,
  };
}

export function createResolvedDojo(partialDojo: Partial<ResolvedDojo> = {}) {
  const dojo: ResolvedDojo = {
    info: createDojoInfo(),
    details: createDojoDetails(),
    ...partialDojo,
  };
  return dojo;
}
