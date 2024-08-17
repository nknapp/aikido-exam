import type { Exam } from "$core/model";

export const additional: Exam = {
  id: "additional",
  label: {
    type: "free",
    text: {
      en: "+X",
    },
  },
  techniques: {
    "tachi waza": {
      "chudan tsuki": {
        "shiho nage": { omote: {}, ura: {} },
      },
      "kata dori": {
        "soto kaiten nage": { "single-direction": {} },
      },
    },
  },
};
