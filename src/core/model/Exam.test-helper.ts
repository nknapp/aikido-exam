import type { Exam } from "$core/model/Exam.ts";
import { nanoid } from "nanoid";

export function createExam(exam: Partial<Exam>): Exam {
  return {
    id: nanoid(),
    label: {
      type: "wellknown",
      key: "kyu5",
    },
    techniques: {},
    ...exam,
  };
}
