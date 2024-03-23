import { assertMock } from "$core/test-utils/assertMock.ts";

describe("assertMock", () => {
  it("throws if parameter is not a mock", () => {
    expect(() => assertMock(() => {})).toThrow();
  });

  it("passes if parameter is a mock", () => {
    expect(() => assertMock(vi.fn())).not.toThrow();
  });

  it("typesafe access to mock", () => {
    const x: () => number = vi.fn();

    assertMock(x);
    // This give type errors if typescript definition is incorrect
    expect(x.mock.calls).toHaveLength(0);
  });
});
