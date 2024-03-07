import type { Exam } from "$core/model";

export const kyu5: Exam = {
  id: "kyu5",
  labelKey: "chooser.button.kyu5",
  techniques: {
    "suwari waza": {
      "ryote dori": {
        "kokyu ho": { "single-direction": {} },
      },
    },
    "tachi waza": {
      "ai hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
      },
      "shomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
      },
    },
  },
};
