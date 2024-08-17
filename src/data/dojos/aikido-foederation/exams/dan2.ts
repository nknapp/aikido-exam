import type { Exam } from "$core/model";

export const dan2: Exam = {
  id: "dan2",
  label: {
    type: "wellknown",
    key: "dan2",
  },
  techniques: {
    "jo dori": {
      "chudan tsuki": {
        ikkyo: { omote: {} },
        // TODO: sankyo omote, ura?
        sankyo: { "single-direction": {} },
        "hiji kimo osae": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
        "shiho nage": { omote: {} },
        "irimi nage": { "single-direction": {} },
        "sokumen irimi nage": { "single-direction": {} },
        // TODO: ude kime nage omote, ura?
        "ude kime nage": { "single-direction": {} },
        "kokyu nage": { "single-direction": {} },
      },
    },
    "jo nage": {
      "ai hanmi ryote dori": {
        // TODO: sankyo omote, ura?
        sankyo: { "single-direction": {} },
        "shiho nage": { omote: {} },
        "kokyu nage": { "single-direction": {} },
      },
    },
  },
};
