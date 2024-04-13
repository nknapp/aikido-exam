import { type RawMatcherFn } from "@vitest/expect";

export const toContainEqualInOrder: RawMatcherFn = function toEqualIgnoringOrder(
  actualHaystack: unknown[],
  expectedNeedle: unknown[],
) {
  const { isNot, equals } = this;
  const indexes = expectedNeedle.map((item) => actualHaystack.findIndex((hayStackItem) => equals(item, hayStackItem)));

  const pass = indexes.indexOf(-1) === -1 && hasStrictIncreasingOrder(indexes);
  return {
    pass: pass,
    message: () => `Actual value should ${isNot ? "not " : ""}contain expected value`,
    expected: expectedNeedle,
    actual: actualHaystack.filter((item) => expectedNeedle.some((needleItem) => equals(needleItem, item))),
  };
};

function hasStrictIncreasingOrder(indexes: Array<number>) {
  return indexes.every((value, i, array) => {
    return i === 0 || value > array[i - 1];
  });
}
