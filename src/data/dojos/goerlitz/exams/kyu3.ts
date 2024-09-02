import type { Exam } from "$core/model";

export const kyu3: Exam = {
  id: "kyu3",
  label: {
    type: "wellknown",
    key: "kyu3",
  },
  techniques: {
    "suwari waza": {
      "gyuako hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
      },
      "kata dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
      },
      "shomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
        "kote gaeshi": { "single-direction": {} },
      },
    },
    "hanmi handachi waza": {
      "gyuako hanmi katate dori": {
        ikkyo: { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
      },
    },
    "tachi waza": {
      "ai hanmi katate dori": {
        sankyo: { omote: {}, ura: {} },
      },
      "gyuako hanmi katate dori": {
        "sokumen irimi nage": { "single-direction": {} },
      },
      "ryote dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        "uchi kaiten nage": { omote: {}, ura: {} },
      },
      "shomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        sankyo: { omote: {}, ura: {} },
        "shiho nage": { "single-direction": {} },
        "kokyu nage": { "single-direction": {} },
        "soto kaiten nage": { omote: {}, ura: {} },
      },
      "katate ryote dori": {
        "shiho nage": { "single-direction": {} },
        "ude kime nage": { "single-direction": {} },
        "kokyu ho": { "single-direction": {} },
      },
      "yokomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
      },
      "ushiro ryote dori": {
        ikkyo: { omote: {}, ura: {} },
        nikyo: { omote: {}, ura: {} },
        "shiho nage": { omote: {}, ura: {} },
        "ude kime nage": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
        "kokyu nage": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
      },
    },
  },
};
