import type { RawMatcherFn } from "@vitest/expect";

export const toContainEqualInOrder: RawMatcherFn = function toEqualIgnoringOrder(
  actualHaystack: unknown[],
  expectedNeedle: unknown[],
) {
  const { isNot } = this;
  return {
    pass: expectedNeedle.every((item) => actualHaystack.includes(item)),
    message: () => `Actual value should ${isNot ? "not " : ""}contain expected value`,
    expected: expectedNeedle,
    actual: actualHaystack.filter((item) => expectedNeedle.includes(item)),
  };
};
