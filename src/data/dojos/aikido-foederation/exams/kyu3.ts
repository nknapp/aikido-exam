import { Exam } from "$core/model";

export const kyu3: Exam = {
  labelKey: "chooser.button.kyu3",
  techniques: {
    "suwari waza": {
      "gyuako hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
      "kata dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
      },
      "shomen uchi": {
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
      },
    },
    "hanmi handachi waza": {
      "gyuako hanmi katate dori": {
        "shiho nage": { omote: {}, ura: {} },
        "uchi kaiten nage": { omote: {}, ura: {} },
      },
    },
    "tachi waza": {
      "gyuako hanmi katate dori": {
        sankyo: { omote: {}, ura: {} },
        "ude garami": { "single-direction": {} },
      },
      "kata dori": {
        sankyo: { omote: {}, ura: {} },
      },
      "ryote dori": {
        ikkyo: { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
      "shomen uchi": {
        sankyo: { omote: {}, ura: {} },
      },
      "yokomen uchi": {
        "kote gaeshi": { "single-direction": {} },
        "shiho nage": { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
        "ude kime nage": { omote: {}, ura: {} },
      },
      "ushiro ryote dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "kokyu nage": { "single-direction": {} },
      },
    },
  },
};
