import type { MockInstance } from "vitest";

export function assertMock(fn: unknown): asserts fn is MockInstance {
  if (!vi.isMockFunction(fn)) throw new Error(fn + " is not a mock function.");
}
