import { Announcement, resolveExamTables } from "../resolve-exam-tables";
import { buildExamTable } from "./examtable";

describe("buildExamtable", () => {
  it("converts a list of queries into the examtable structure", () => {
    const queries: Announcement[] = [
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["tachi waza", "kata dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "irimi nage", "ura"],
      ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "omote"],
      ["tachi waza", "shomen uchi", "irimi nage"],
    ];

    expect(buildExamTable(queries)).toEqual({
      techniques: {
        "suwari waza": {
          "ai hanmi katate dori": {
            ikkyo: ["omote", "ura"],
          },
          "katate ryote dori": {
            "shiho nage": ["ura"],
          },
        },
        "tachi waza": {
          "kata dori": {
            "irimi nage": ["ura"],
            "shiho nage": ["ura", "omote"],
          },
          "shomen uchi": {
            "irimi nage": [],
          },
        },
      },
    });
  });

  it("iterates in the correct order", () => {
    const queries: Announcement[] = [
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["tachi waza", "kata dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "irimi nage", "ura"],
      ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "omote"],
      ["tachi waza", "shomen uchi", "irimi nage"],
    ];
    const expected: Announcement[] = [
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["suwari waza", "katate ryote dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "ura"],
      ["tachi waza", "kata dori", "shiho nage", "omote"],
      ["tachi waza", "kata dori", "irimi nage", "ura"],
      ["tachi waza", "shomen uchi", "irimi nage"],
    ];
    const table = buildExamTable(queries);
    const resolved = resolveExamTables([table]);
    expect(resolved).toEqual(expected);
  });
});
