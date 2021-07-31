import { resolveExamTables } from "./resolve-exam-tables";

describe("resolve-exam-tables", () => {
  it("creates a list of queries", () => {
    const actual = resolveExamTables([
      {
        techniques: {
          "suwari waza": {
            "ryote dori": {
              "kokyu ho": [],
            },
          },
          "tachi waza": {
            "ai hanmi katate dori": {
              "shiho nage": ["omote", "ura"],
              "irimi nage": [],
            },
          },
        },
      },
      {
        techniques: {
          "tachi waza": {
            "ai hanmi katate dori": {
              ikkyo: ["omote", "ura"],
            },
          },
        },
      },
    ]);
    [
      ["suwari waza", "ryote dori", "kokyu ho"],
      ["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["tachi waza", "ai hanmi katate dori", "shiho nage", "omote"],
      ["tachi waza", "ai hanmi katate dori", "shiho nage", "ura"],
      ["tachi waza", "ai hanmi katate dori", "irimi nage"],
    ].forEach((query) => {
      expect(actual).toContainEqual(query);
    });
    expect(actual).toHaveLength(6);
  });

  it("Returns an empty list of no tables are selected", () => {
    expect(resolveExamTables([])).toEqual([]);
  });
});
