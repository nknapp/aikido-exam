import { remapObject } from "$core/utils/remapObject.ts";

describe("remapObjects", () => {
  it("allows mapping values", () => {
    const result = remapObject({ a: 1, b: 2 }, (entries) => entries.map(([key, value]) => [key, "x" + value]));
    expect(result).toEqual({ a: "x1", b: "x2" });
  });
});
