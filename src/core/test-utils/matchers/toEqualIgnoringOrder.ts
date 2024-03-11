import { RawMatcherFn } from "@vitest/expect";

export const toEqualIgnoringOrder: RawMatcherFn = function toEqualIgnoringOrder(
  received: unknown[],
  expected: unknown[],
) {
  const { equals, isNot } = this;
  const foundItems = new Set();
  const receivedInExpectedOrder = [];
  for (const expectedItem of expected) {
    const matchingItem = received.find((item) => equals(item, expectedItem));
    if (matchingItem) {
      foundItems.add(matchingItem);
      receivedInExpectedOrder.push(matchingItem);
    }
  }
  for (const receivedItem of received) {
    if (!foundItems.has(receivedItem)) {
      receivedInExpectedOrder.push(receivedItem);
    }
  }

  return {
    pass: equals(expected, receivedInExpectedOrder),
    actual: receivedInExpectedOrder,
    expected,
    message: () => `Arrays should${isNot ? " not" : ""} have the same elements.`,
  };
};
