import { shuffleTechniques } from "./shuffleTechniques";
import { assertEqualTechniques, createTechnique } from "$core/model/Technique.test-helper";
import { assertMock } from "$core/test-utils/assertMock.ts";
import { shuffleList } from "$core/utils/shuffleList.ts";
import { reverse } from "lodash";

describe("shuffleTechniques", () => {
  const techniques = [
    createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
    createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
    createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
  ];

  it("only returns the requested coverage of techniques", () => {
    assertEqualTechniques(shuffleTechniques(techniques, { includePercent: 50 }), [
      createTechnique("tachi waza", "kata dori", "shiho nage", "ura"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("tachi waza", "kata dori", "irimi nage", "ura"),
    ]);
  });

  it("applies randomization", () => {
    assertMock(shuffleList);
    shuffleList.mockImplementation((list) => reverse(list));
    assertEqualTechniques(shuffleTechniques(techniques, { includePercent: 50 }), [
      createTechnique("tachi waza", "kata dori", "shiho nage", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "katate ryote dori", "shiho nage", "ura"),
    ]);
  });
});
