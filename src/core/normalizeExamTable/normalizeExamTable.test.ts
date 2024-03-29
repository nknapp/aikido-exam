import { normalizeExamTable } from "./normalizeExamTable.ts";
import { buildExamTable } from "$core/buildExamTable";
import { createTechnique } from "$core/model/Technique.test-helper.ts";

describe("normalizeExamTable", () => {
  it("returns the same table by default", () => {
    const table = buildExamTable([
      createTechnique("hanmi handachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
    ]);
    const expectedTable = buildExamTable([
      createTechnique("hanmi handachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
    ]);
    expect(normalizeExamTable(table)).toEqualWithKeyOrder(expectedTable);
  });

  it("orders executions", () => {
    const someTechnique = ["ai hanmi katate dori", "ikkyo", "omote"] as const;
    const table = buildExamTable([
      createTechnique("tachi dori", ...someTechnique),
      createTechnique("jo nage", ...someTechnique),
      createTechnique("jo dori", ...someTechnique),
      createTechnique("hanmi handachi waza", ...someTechnique),
      createTechnique("tachi waza", ...someTechnique),
      createTechnique("suwari waza", ...someTechnique),
    ]);
    const expected = buildExamTable([
      createTechnique("suwari waza", ...someTechnique),
      createTechnique("hanmi handachi waza", ...someTechnique),
      createTechnique("tachi waza", ...someTechnique),
      createTechnique("jo nage", ...someTechnique),
      createTechnique("jo dori", ...someTechnique),
      createTechnique("tachi dori", ...someTechnique),
    ]);

    expect(normalizeExamTable(table, { orderExecutions: true })).toEqualWithKeyOrder(expected);
  });
});
