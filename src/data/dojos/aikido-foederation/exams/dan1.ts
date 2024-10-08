import type { Exam } from "$core/model";

export const dan1: Exam = {
  id: "dan1",
  label: {
    type: "wellknown",
    key: "dan1",
  },
  techniques: {
    "tanto dori": {
      "chudan tsuki": {
        ikkyo: { omote: {}, ura: {} },
        "uchi kaiten sankyo": { "single-direction": {} },
        "hiji kimo osae": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
      },
      "shomen uchi hon-te": {
        gokyo: { ura: {} },
        "hiji kimo osae": { "single-direction": {} },
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
      },
      "shomen uchi gyaku-te": {
        gokyo: { ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "irimi nage": { "single-direction": {} },
      },
      "yokomen uchi hon-te": {
        gokyo: { ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "shiho nage": { omote: {}, ura: {} },
        "irimi nage": { "single-direction": {} },
      },
      "yokomen uchi gyaku-te": {
        gokyo: { ura: {} },
        "kote gaeshi": { "single-direction": {} },
        "shiho nage": { omote: {} },
        "irimi nage": { "single-direction": {} },
      },
    },
  },
};
