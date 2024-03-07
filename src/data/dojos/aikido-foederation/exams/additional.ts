import type { Exam } from "$core/model";

export const additional: Exam = {
  id: "additional",
  labelKey: "chooser.button.additional",
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
    },
  },
};
