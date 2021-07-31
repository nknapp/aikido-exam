import { resolveExamTables } from "./resolve-exam-tables";
import { kyu5 } from "../exam-tables/kyu5";

describe("resolve-exam-tables", () => {
  it("creates a list of queries", () => {
    expect(resolveExamTables([kyu5])).toEqual([
      ["suwari waza", "ryote dori", "kokyu ho"],
      ["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"],
      ["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"],
      ["tachi waza", "ai hanmi katate dori", "shiho nage", "omote"],
      ["tachi waza", "ai hanmi katate dori", "shiho nage", "ura"],
      ["tachi waza", "ai hanmi katate dori", "irimi nage"],
    ]);
  });

  it("Returns an empty list of no tables are selected", () => {
    expect(resolveExamTables([])).toEqual([]);
  });
});
