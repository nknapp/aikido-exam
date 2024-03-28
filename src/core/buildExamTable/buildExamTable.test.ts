import { buildExamTable } from "./buildExamTable";
import { createTechnique } from "$core/model/Technique.test-helper";
import type { Table } from "$core/model";

describe("toExamTable", () => {
  it("builds an ExamTable from a TechniqueList", () => {
    const input = [
      createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"),
      createTechnique("tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"),
      createTechnique("tachi waza", "gyuako hanmi katate dori", "irimi nage", "single-direction"),
    ];
    const expectedOutput: Table = {
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
    };
    expect(buildExamTable(input)).toEqual(expectedOutput);
  });

  it.todo("Order of executions is fixed");
});
