import { resolveExamTables } from "./resolve-exam-tables";
import { Technique } from "../model/Technique";
import { TechniqueList } from "../model/TechniqueList";

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
    [
      new Technique(["suwari waza", "ryote dori", "kokyu ho", "single-direction"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "shiho nage", "omote"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "shiho nage", "ura"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "irimi nage", "single-direction"], {}),
    ].forEach((technique) => {
      expect(actual.techniques).toContainEqual(technique);
    });
    expect(actual.techniques).toHaveLength(6);
  });

  it("Returns an empty list of no tables are selected", () => {
    expect(resolveExamTables([])).toEqual(new TechniqueList([]));
  });
});
