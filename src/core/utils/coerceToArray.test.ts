import { coerceToArray } from "$core/utils/coerceToArray.ts";

describe("coerceToArray", () => {
  it("returns empty array for null", () => {
    expect(coerceToArray(null)).toEqual([]);
    expect(coerceToArray(undefined)).toEqual([]);
  });

  it("returns single element array for single element", () => {
    expect(coerceToArray(2)).toEqual([2]);
  });
  it("returns the array for an array", () => {
    expect(coerceToArray([2])).toEqual([2]);
    expect(coerceToArray([2, 3])).toEqual([2, 3]);
  });
});
