import type { RawMatcherFn } from "@vitest/expect";

export const toEqualWithKeyOrder: RawMatcherFn = function toEqualIgnoringOrder(received: unknown, expected: unknown) {
  const { equals } = this;

  if (!equals(expected, received)) {
    return {
      pass: false,
      actual: received,
      expected: expected,
      message: () => `Values are not equal.`,
    };
  }

  if (typeof expected === "object" && typeof received === "object") {
    for (const { expectedKeys, receivedKeys, pointer } of iteratedNestedKeys(expected, received, 50, "$")) {
      if (!equals(expectedKeys, receivedKeys)) {
        return {
          pass: false,
          actual: receivedKeys,
          expected: expectedKeys,
          message: () => `Value is equal, but key order at ${pointer} is not`,
        };
      }
    }
    return {
      pass: true,
      message: () => "Value and key order are equal",
    };
  }

  return {
    pass: false,
    actual: typeof received,
    expected: typeof expected,
    message: () => `Unexpected types of objects`,
  };
};

interface IterateResult {
  expectedKeys?: string[];
  receivedKeys?: string[];
  pointer: string;
}

function* iteratedNestedKeys(
  expected: unknown,
  received: unknown,
  maxDepth: number,
  pointer: string,
): Generator<IterateResult> {
  if (maxDepth <= 0) {
    throw new Error("Maximum iteration depth exceeded at " + pointer);
  }
  const expectedKeys = getKeys(expected);
  const receivedKeys = getKeys(received);
  yield {
    expectedKeys,
    receivedKeys,
    pointer,
  };
  if (Array.isArray(expected)) {
    if (!Array.isArray(received)) throw new Error("Expected array");
    for (let i = 0; i < expected.length; i++) {
      yield* iteratedNestedKeys(expected[i], received[i], maxDepth - 1, `${pointer}.[${i}]`);
    }
  } else if (expectedKeys != null && typeof expected === "object" && typeof received === "object") {
    for (const key of expectedKeys) {
      const newPointer = `${pointer}.[${JSON.stringify(key)}]`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      yield* iteratedNestedKeys(expected?.[key], received?.[key], maxDepth - 1, newPointer);
    }
  }
}

function getKeys(obj: unknown) {
  if (typeof obj === "object" && obj != null) {
    return Object.keys(obj);
  }
}
