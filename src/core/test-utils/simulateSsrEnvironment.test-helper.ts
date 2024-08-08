import type { MockInstance } from "vitest";
import * as solidWeb from "solid-js";

let onMountSpy: MockInstance<() => void>;
beforeEach(() => {
  onMountSpy = vi.spyOn(solidWeb, "onMount");
});

afterEach(() => {
  onMountSpy.mockRestore();
});

export function simulateSsrEnvironment() {
  // Disable onmount hook
  onMountSpy.mockImplementation(() => {});
}
