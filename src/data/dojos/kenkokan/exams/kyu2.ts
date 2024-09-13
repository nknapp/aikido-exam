import type { Exam } from "$core/model";
import { goerlitzTree } from "./utils/goerlitzTree.ts";

export const kyu2: Exam = {
  id: "kyu2",
  label: {
    type: "wellknown",
    key: "kyu2",
  },

  techniques: goerlitzTree({
    "suwari waza": {
      ikkyo: {
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      nikyo: {
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      sankyo: {
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      yonkyo: {
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      gokyo: {
        "shomen uchi": { "single-direction": {} },
      },
      "irimi nage": {
        "gyuako hanmi katate dori": { "single-direction": {} },
      },
      "kote gaeshi": {
        "gyuako hanmi katate dori": { "single-direction": {} },
        "kata dori": { "single-direction": {} },
      },
    },
    "hanmi handachi waza": {
      "shiho nage": {
        "ryote dori": { "single-direction": {} },
      },
      "uchi kaiten nage": {
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
      },
      "soto kaiten nage": {
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
      },
      "kote gaeshi": {
        "shomen uchi": { "single-direction": {} },
      },
      "irimi nage": {
        "shomen uchi": { "single-direction": {} },
      },
    },
    "tachi waza": {
      ikkyo: {
        "katate ryote dori": { omote: {}, ura: {} },
        "kata dori men uchi": { omote: {}, ura: {} },
        "ushiro ryo kata dori": { omote: {}, ura: {} },
        "chudan tsuki": { omote: {}, ura: {} },
      },
      nikyo: {
        "katate ryote dori": { omote: {}, ura: {} },
        "kata dori men uchi": { omote: {}, ura: {} },
        "ushiro ryo kata dori": { omote: {}, ura: {} },
        "chudan tsuki": { omote: {}, ura: {} },
      },
      "hiji kimo osae": {
        "shomen uchi": { "single-direction": {} },
      },
      sankyo: {
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "kata dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
      },
      yonkyo: {
        "ai hanmi katate dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
      },
      gokyo: {
        "yokomen uchi": { "single-direction": {} },
      },
      "shiho nage": {
        "kata dori men uchi": { "single-direction": {} },
        "shomen uchi": { "single-direction": {} },
      },
      "kote gaeshi": {
        "kata dori men uchi": { "single-direction": {} },
        "ryote dori": { "single-direction": {} },
        "chudan tsuki": { "single-direction": {} },
      },
      "irimi nage": {
        "kata dori men uchi": { "single-direction": {} },
        "ryote dori": { "single-direction": {} },
        "katate ryote dori": { "single-direction": {} },
        "chudan tsuki": { "single-direction": {} },
      },
      "ude kime nage": {
        "shomen uchi": { omote: {}, ura: {} },
      },
      "uchi kaiten nage": { "shomen uchi": { omote: {}, ura: {} } },
      "soto kaiten nage": { "chudan tsuki": { omote: {}, ura: {} } },
      "sokumen irimi nage": { "ushiro ryote dori": { omote: {}, ura: {} } },
      "sumi otoshi": { "gyuako hanmi katate dori": { "single-direction": {} } },
      "juji garami": { "ushiro ryote dori": { "single-direction": {} } },
      "koshi nage": { "kata dori": { "single-direction": {} } },
      "kokyu nage": {
        "ryote dori": { "single-direction": {} },
        "shomen uchi": { "single-direction": {} },
        "yokomen uchi": { "single-direction": {} },
      },
    },
  }),
};
