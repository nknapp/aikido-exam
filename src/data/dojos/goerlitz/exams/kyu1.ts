import type { Directions, Exam, TechniqueMetadata } from "$core/model";
import { goerlitzTree } from "@/data/dojos/goerlitz/exams/utils/goerlitzTree.ts";

function pinAttacksTachiWaza(directions: Directions<TechniqueMetadata>) {
  return {
    "ai hanmi katate dori": directions,
    "shomen uchi": directions,
    "gyuako hanmi katate dori": directions,
    "ryote dori": directions,
    "kata dori": directions,
    "yokomen uchi": directions,
    "ushiro ryote dori": directions,
    "katate ryote dori": directions,
    "kata dori men uchi": directions,
    "ushiro ryo kata dori": directions,
    "mae ryo kata dori": directions,
    "jodan tsuki": directions,
    "chudan tsuki": directions,
    "ushiro ryo hiji dori": directions,
    "ushiro eri dori": directions,
    "ushiro katate dori kubi shime": directions,
  };
}
export const kyu1: Exam = {
  id: "kyu1",
  label: {
    type: "wellknown",
    key: "kyu1",
  },

  techniques: goerlitzTree({
    "suwari waza": {
      ikkyo: {
        "ai hanmi katate dori": { omote: {}, ura: {} },
        "kata dori": { omote: {}, ura: {} },
        "shomen uchi": { omote: {}, ura: {} },
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      nikyo: {
        "ai hanmi katate dori": { omote: {}, ura: {} },
        "kata dori": { omote: {}, ura: {} },
        "shomen uchi": { omote: {}, ura: {} },
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      sankyo: {
        "ai hanmi katate dori": { omote: {}, ura: {} },
        "kata dori": { omote: {}, ura: {} },
        "shomen uchi": { omote: {}, ura: {} },
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      yonkyo: {
        "ai hanmi katate dori": { omote: {}, ura: {} },
        "kata dori": { omote: {}, ura: {} },
        "shomen uchi": { omote: {}, ura: {} },
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
        "mae ryo kata dori": { omote: {}, ura: {} },
      },
      gokyo: {
        "yokomen uchi": { "single-direction": {} },
      },
      "kote gaeshi": {
        "yokomen uchi": { "single-direction": {} },
      },
      "irimi nage": {
        "kata dori": { "single-direction": {} },
        "kata dori men uchi": { "single-direction": {} },
      },
    },
    "hanmi handachi waza": {
      ikkyo: {
        "gyuako hanmi katate dori": { omote: {}, ura: {} },
        "ryote dori": { omote: {}, ura: {} },
        "shomen uchi": { omote: {}, ura: {} },
        "yokomen uchi": { omote: {}, ura: {} },
        "ushiro ryo kata dori": { omote: {}, ura: {} },
      },
      "irimi nage": {
        "yokomen uchi": { "single-direction": {} },
      },
      "kote gaeshi": {
        "gyuako hanmi katate dori": { "single-direction": {} },
        "yokomen uchi": { "single-direction": {} },
      },
      "shiho nage": {
        "yokomen uchi": { omote: {}, ura: {} },
      },
      "kokyu nage": {
        "gyuako hanmi katate dori": { "single-direction": {} },
        "ryote dori": { "single-direction": {} },
        "ushiro ryo kata dori": { "single-direction": {} },
      },
      // "kaiten nage": {...}
    },
    "tachi waza": {
      ikkyo: pinAttacksTachiWaza({ omote: {}, ura: {} }),
      nikyo: pinAttacksTachiWaza({ omote: {}, ura: {} }),
      sankyo: pinAttacksTachiWaza({ omote: {}, ura: {} }),
      yonkyo: pinAttacksTachiWaza({ omote: {}, ura: {} }),
      "hiji kimo osae": pinAttacksTachiWaza({ "single-direction": {} }),
      "ude garami": pinAttacksTachiWaza({ "single-direction": {} }),
      gokyo: { "shomen uchi": { "single-direction": {} } },
      "shiho nage": {
        "muna dori": { "single-direction": {} },
        "chudan tsuki": { omote: {}, ura: {} },
        "jodan tsuki": { omote: {}, ura: {} },
        "ushiro katate dori kubi shime": { "single-direction": {} },
        "ushiro eri dori": { "single-direction": {} },
      },
      "irimi nage": {
        "jodan tsuki": { "single-direction": {} },
        "ushiro eri dori": { "single-direction": {} },
      },
      "sokumen irimi nage": {
        "shomen uchi": { "single-direction": {} },
        "chudan tsuki": { "single-direction": {} },
      },
      "soto kaiten nage": {
        "jodan tsuki": { omote: {}, ura: {} },
      },
      "uchi kaiten nage": {
        "chudan tsuki": { omote: {}, ura: {} },
        "jodan tsuki": { omote: {}, ura: {} },
      },
      "ude kime nage": {
        "chudan tsuki": { omote: {}, ura: {} },
        "jodan tsuki": { omote: {}, ura: {} },
      },
      "sumi otoshi": {
        "kata dori": { "single-direction": {} },
        "mae ryo kata dori": { "single-direction": {} },
        "shomen uchi": { "single-direction": {} },
      },
      "juji garami": {
        "katate ryote dori": { "single-direction": {} },
      },
      "aiki otoshi": {
        "shomen uchi": { "single-direction": {} },
        "ushiro ryote dori": { "single-direction": {} },
      },
      "koshi nage": {
        "ai hanmi katate dori": { "single-direction": {} },
        "shomen uchi": { "single-direction": {} },
        "gyuako hanmi katate dori": { "single-direction": {} },
        "ryote dori": { "single-direction": {} },
        "yokomen uchi": { "single-direction": {} },
        "ushiro ryote dori": { "single-direction": {} },
      },
      "kokyu nage": {
        "ai hanmi katate dori": { "single-direction": {} },
        "shomen uchi": { "single-direction": {} },
        "gyuako hanmi katate dori": { "single-direction": {} },
        "ryote dori": { "single-direction": {} },
        "kata dori": { "single-direction": {} },
        "yokomen uchi": { "single-direction": {} },
        "ushiro ryote dori": { "single-direction": {} },
        "katate ryote dori": { "single-direction": {} },
        "kata dori men uchi": { "single-direction": {} },
        "ushiro ryo kata dori": { "single-direction": {} },
        "mae ryo kata dori": { "single-direction": {} },
        "jodan tsuki": { "single-direction": {} },
        "chudan tsuki": { "single-direction": {} },
      },
      // "aiki nage": { shomen uchi: { "single-direction: {}} },
    },
  }),
};
