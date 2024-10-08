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
        "kokyu nage": { "single-direction": {} },
      },
      "gyuako hanmi katate dori": {
        "aiki otoshi": { "single-direction": {} },
      },
      "ai hanmi katate dori": {
        "uchi kaiten sankyo": { "single-direction": {} },
      },
      "kata dori": {
        "soto kaiten nage": { "single-direction": {} },
      },
    },
  },
};
