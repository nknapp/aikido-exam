import { resolveExamTables } from "./resolveExamTables";
import { techniqueAsString, techniqueComponentsAsString } from "$core/model/Technique.test-helper";

describe("resolve-exam-tables", () => {
  it("creates a list of techniques", () => {
    const actual = resolveExamTables([
      {
        id: "dan2",
        labelKey: "chooser.button.dan2",
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
        id: "dan3",
        labelKey: "chooser.button.dan3",
        techniques: {
          "tachi waza": {
            "ai hanmi katate dori": {
              ikkyo: { omote: {}, ura: {} },
            },
          },
        },
      },
    ]);

    expect(actual.map(techniqueAsString)).toEqualIgnoringOrder([
      techniqueComponentsAsString("suwari waza", "ryote dori", "kokyu ho", "single-direction"),
      techniqueComponentsAsString("tachi waza", "ai hanmi katate dori", "ikkyo", "ura"),
      techniqueComponentsAsString("tachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
      techniqueComponentsAsString("tachi waza", "ai hanmi katate dori", "shiho nage", "omote"),
      techniqueComponentsAsString("tachi waza", "ai hanmi katate dori", "shiho nage", "ura"),
      techniqueComponentsAsString("tachi waza", "ai hanmi katate dori", "irimi nage", "single-direction"),
    ]);
  });

  it("Returns an empty list of no tables are selected", () => {
    expect(resolveExamTables([])).toEqual([]);
  });
});
