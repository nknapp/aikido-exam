import { Exam } from "$core/model";

export const dan1: Exam = {
  labelKey: "chooser.button.dan1",
  techniques: {
    "hanmi handachi waza": {
      "gyuako hanmi katate dori": {
        "kote gaeshi": { "single-direction": {} },
        sankyo: { omote: {}, ura: {} },
        yonkyo: { omote: {}, ura: {} },
      },
      "shomen uchi": {
        sankyo: { omote: {}, ura: {} },
        "soto kaiten nage": { omote: {}, ura: {} },
        yonkyo: { omote: {}, ura: {} },
      },
    },
    "tachi waza": {
      "gyuako hanmi katate dori": {
        "ude garami": { "single-direction": {} },
      },
      "jodan tsuki": {
        "kote gaeshi": { "single-direction": {} },
      },
      "katate ryote dori": {
        sankyo: { omote: {}, ura: {} },
        yonkyo: { omote: {}, ura: {} },
      },
      "mae ryo kata dori": {
        "kokyu nage": { "single-direction": {} },
      },
      "ushiro ryo kata dori": {
        "aiki otoshi": { "single-direction": {} },
        yonkyo: { omote: {}, ura: {} },
      },
    },
  },
};
