import type { Exam } from "$core/model";

export const kyu4: Exam = {
  id: "kyu4",
  label: {
    type: "wellknown",
    key: "kyu4",
  },

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
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
        "uchi kaiten nage": { omote: {}, ura: {} },
        "ude kime nage": { omote: {}, ura: {} },
        "soto kaiten nage": { omote: {}, ura: {} },
        "kokyu nage": { "single-direction": {} },
      },
      "yokomen uchi": { "shiho nage": { omote: {}, ura: {} }, "ude kime nage": { omote: {}, ura: {} } },
      "ushiro ryote dori": { sankyo: { omote: {}, ura: {} } },
      "ryote dori": {
        "tenchi nage": { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
      },
      "kata dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
      },
      "shomen uchi": {
        "kote gaeshi": { "single-direction": {} },
      },
    },
  },
};
