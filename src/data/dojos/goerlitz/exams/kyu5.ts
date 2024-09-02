import type { Exam } from "$core/model";

export const kyu5: Exam = {
  id: "kyu5",
  label: {
    type: "wellknown",
    key: "kyu5",
  },
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
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
        "ude kime nage": { omote: {}, ura: {} },
      },
      "katate ryote dori": {
        "shiho nage": { omote: {}, ura: {} },
        "tenchi nage": { omote: {}, ura: {} },
      },
      "shomen uchi": {
        ikkyo: {},
        "irimi nage": {},
      },
    },
  },
};
