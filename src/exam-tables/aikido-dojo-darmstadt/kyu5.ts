import { ExamTable } from "src/exam-tables/baseTypes";

export const kyu5: ExamTable = {
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
      },
      "gyuako hanmi katate dori": {
        "shiho nage": { omote: {}, ura: {} },
        "tenchi nage": { omote: {}, ura: {} },
      },
      "shomen uchi": {
        ikkyo: { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
    },
  },
};
