import { multiplyParams } from "@/utils/multiplyParams.ts";

describe("multiplyParams", () => {
  it("empty params give and empty array", () => {
    expect(multiplyParams({})).toEqual([]);
  });

  it("a single param value yields one value", () => {
    expect(multiplyParams({ a: ["x"] })).toEqual([{ params: { a: "x" } }]);
  });

  it("two single params yield one value", () => {
    expect(multiplyParams({ a: ["x"], b: ["y"] })).toEqual([{ params: { a: "x", b: "y" } }]);
  });

  it("one double params yields two values", () => {
    expect(multiplyParams({ a: ["x", "y"] })).toEqual([{ params: { a: "x" } }, { params: { a: "y" } }]);
  });

  it("two double params yield 4 values", () => {
    expect(new Set(multiplyParams({ a: ["x", "y"], b: ["1", "2"] }))).toEqual(
      new Set([
        { params: { a: "x", b: "1" } },
        { params: { a: "y", b: "1" } },
        { params: { a: "x", b: "2" } },
        { params: { a: "y", b: "2" } },
      ]),
    );
  });

  it("three double params yield 8 values", () => {
    expect(multiplyParams({ a: ["x", "y"], b: ["1", "2"], c: ["10", "11"] })).toHaveLength(8);
  });

  it("sanity test", () => {
    expect(multiplyParams({ a: ["x", "y", "z"], b: ["1", "2"], c: ["10", "11"] })).toHaveLength(12);
  });
});
