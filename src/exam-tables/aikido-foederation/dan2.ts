import { ExamTable } from "src/exam-tables/baseTypes";

export const dan2: ExamTable = {
  techniques: {
    "jo dori": {
      "chudan tsuki": {
        ikkyo: { omote: {} },
        // TODO: sankyo omote, ura?
        sankyo: { "single-direction": {} },
        "hiji kimo oase": { "single-direction": {} },
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
