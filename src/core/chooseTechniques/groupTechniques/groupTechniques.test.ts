import { createTechnique } from "$core/model/Technique.test-helper.ts";
import { groupTechniques } from "./groupTechniques.ts";

describe("groupTechnique", () => {
  const techniques = [
    createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
    createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
  ];
  it("shuffles and regroups techniques", () => {
    expect(groupTechniques(techniques, { orderExecutions: true })).toEqual([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
      createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    ]);
  });

  it("keeps execution order random if specified", () => {
    expect(groupTechniques(techniques, { orderExecutions: false })).toEqual([
      createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
      createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
      createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
    ]);
  });
});
