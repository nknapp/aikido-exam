import { resolveExamTables } from "../resolve-exam-tables";
import { buildExamTable } from "./examtable";
import { Technique } from "../../model/Technique";

describe("buildExamtable", () => {
  it("converts a list of techniques into the examtable structure", () => {
    const techniques: Technique[] = [
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
      new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
      new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "omote"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage"]),
    ];

    expect(buildExamTable(techniques)).toEqual({
      defences: {
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
    const techniques: Technique[] = [
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
      new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
      new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "omote"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage"]),
    ];
    const expected: Technique[] = [
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "omote"]),
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"]),
      new Technique(["suwari waza", "katate ryote dori", "shiho nage", "ura"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "ura"]),
      new Technique(["tachi waza", "kata dori", "shiho nage", "omote"]),
      new Technique(["tachi waza", "kata dori", "irimi nage", "ura"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage"]),
    ];
    const table = buildExamTable(techniques);
    const resolved = resolveExamTables([table]);
    expect(resolved).toEqual(expected);
  });
});
