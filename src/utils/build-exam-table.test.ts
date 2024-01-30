import { Technique } from "../model/Technique";
import { ExamTable } from "../exam-tables/baseTypes";
import { buildExamTable } from "./build-exam-table";

describe("toExamTable", () => {
  it("builds an ExamTable form a TechniqueList", () => {
    const input = [
      new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"], {}),
      new Technique(["suwari waza", "ai hanmi katate dori", "ikkyo", "ura"], {}),
      new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"], {}),
      new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"], {}),
      new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"], {}),
      new Technique(["tachi waza", "gyuako hanmi katate dori", "irimi nage", "single-direction"], {}),
    ];
    const expectedOutput: ExamTable = {
      techniques: {
        "suwari waza": {
          "ai hanmi katate dori": {
            ikkyo: { ura: {} },
          },
        },
        "tachi waza": {
          "ai hanmi katate dori": {
            ikkyo: { ura: {}, omote: {} },
          },
          "gyuako hanmi katate dori": {
            ikkyo: { omote: {}, ura: {} },
            "irimi nage": { "single-direction": {} },
          },
        },
      },
    };
    expect(buildExamTable(input)).toEqual(expectedOutput);
  });
});
