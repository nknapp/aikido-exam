import { getAssertionError } from "$core/test-utils/matchers/getAssertionError.test-helper.ts";

describe("toContainEqualInOrder", () => {
  it.each([
    { haystack: [], needle: [] },
    { haystack: [1], needle: [] },
    { haystack: [1], needle: [1] },
    { haystack: ["a", "b", "c", "d"], needle: ["b", "c"] },
    { haystack: [{ x: "a" }], needle: [{ x: "a" }] },
  ])("$haystack contains $needle", ({ haystack, needle }) => {
    expect(haystack).toContainEqualInOrder(needle);
  });

  it.each([
    { haystack: [], needle: [1] },
    { haystack: [1, 2], needle: [2, 1] },
    { haystack: ["a", "b", "c", "d"], needle: ["c", "b"] },
    { haystack: ["a", "b", "c", "d"], needle: ["b", "b"] },
  ])("$haystack does not contain $needle", ({ haystack, needle }) => {
    expect(haystack).not.toContainEqualInOrder(needle);
  });

  it.skip.each([{ haystack: [1], needle: [] }])(
    "for manual inspection: $haystack contains $needle",
    ({ haystack, needle }) => {
      expect(haystack).toContainEqualInOrder(needle);
    },
  );

  it("shows only relevant part of hayStack", () => {
    const error = getAssertionError(() => {
      expect([{ x: "a" }, { x: "b" }, { x: "c" }]).toContainEqualInOrder([{ x: "c" }, { x: "b" }]);
    });
    expect(error.actual).toEqual([{ x: "b" }, { x: "c" }]);
  });
});
