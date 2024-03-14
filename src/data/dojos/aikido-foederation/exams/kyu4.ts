import type { Exam } from "$core/model";

export const kyu4: Exam = {
  labelKey: "chooser.button.kyu4",
  techniques: {
    "suwari waza": {
      "ai hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
      "shomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
    },
    "tachi waza": {
      "ai hanmi katate dori": {
        nikyo: { omote: {}, ura: {} },
        "ude kime nage": { omote: {}, ura: {} },
      },
      "gyuako hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
        "sokumen irimi nage": { "single-direction": {} },
        "uchi kaiten nage": { omote: {}, ura: {} },
        "ude kime nage": { omote: {}, ura: {} },
        "tenchi nage": { omote: {}, ura: {} },
      },
      "ryote dori": {
        "tenchi nage": { omote: {}, ura: {} },
      },
      "kata dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
      },
      "shomen uchi": {
        nikyo: { omote: {}, ura: {} },
      },
    },
  },
};
