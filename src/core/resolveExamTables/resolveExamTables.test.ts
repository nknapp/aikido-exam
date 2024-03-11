import { resolveExamTables } from "./resolveExamTables";
import { createTechnique } from "$core/model/Technique.test-helper";

describe("resolve-exam-tables", () => {
  it("creates a list of techniques", () => {
    const actual = resolveExamTables([
      {
        techniques: {
          "suwari waza": {
            "ryote dori": {
              "kokyu ho": { "single-direction": {} },
            },
          },
          "tachi waza": {
            "ai hanmi katate dori": {
              "shiho nage": { omote: {}, ura: {} },
              "irimi nage": { "single-direction": {} },
            },
          },
        },
      },
      {
        techniques: {
          "tachi waza": {
            "ai hanmi katate dori": {
              ikkyo: { omote: {}, ura: {} },
            },
          },
        },
      },
    ]);

    expect(actual).toEqualIgnoringOrder([
      createTechnique("suwari waza", "ryote dori", "kokyu ho", "single-direction", {}),
      createTechnique("hanmi handachi waza", "ai hanmi katate dori", "ikkyo", "omote", {}),
      createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "ura", {}),
      createTechnique("tachi waza", "ai hanmi katate dori", "shiho nage", "omote", {}),
      createTechnique("tachi waza", "ai hanmi katate dori", "shiho nage", "ura", {}),
      createTechnique("tachi waza", "ai hanmi katate dori", "irimi nage", "single-direction", {}),
    ]);
  });
  it("Returns an empty list of no tables are selected", () => {
    expect(resolveExamTables([])).toEqual([]);
  });
});
