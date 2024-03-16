import type { Exam } from "$core/model/Exam.ts";

export function createExam(exam: Partial<Exam>): Exam {
  return {
    labelKey: "chooser.button.kyu5",
    techniques: {},
    ...exam,
  };
}
