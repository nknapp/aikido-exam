describe("toEqualWithKeyOrder", () => {
  it("fails for object with different key order", () => {
    expect({ a: "b", c: "d" }).not.toEqualWithKeyOrder({ c: "d", a: "b" });
  });

  it("succeeds for object with different same order", () => {
    expect({ a: "b", c: "d" }).toEqualWithKeyOrder({ a: "b", c: "d" });
  });

  it("error message for different keys at root level", () => {
    const error = getAssertionError(() => {
      expect({ a: "b", c: "d" }).toEqualWithKeyOrder({ c: "d", a: "b" });
    });
    expect(error.message).toEqual("Value is equal, but key order at $ is not");
    expect(error.expected).toEqual(["c", "a"]);
    expect(error.actual).toEqual(["a", "c"]);
  });

  it("shows the position of the difference (nested in property)", () => {
    const error = getAssertionError(() => {
      expect({ a: { b: 1, c: 2 } }).toEqualWithKeyOrder({ a: { c: 2, b: 1 } });
    });
    expect(error.message).toEqual(`Value is equal, but key order at $.["a"] is not`);
    expect(error.expected).toEqual(["c", "b"]);
    expect(error.actual).toEqual(["b", "c"]);
  });

  it("shows the position of the difference (nested in property twice)", () => {
    const error = getAssertionError(() => {
      expect({ a: { b: 1, c: { d: 2, e: 3 } } }).toEqualWithKeyOrder({ a: { b: 1, c: { e: 3, d: 2 } } });
    });
    expect(error.message).toEqual(`Value is equal, but key order at $.["a"].["c"] is not`);
    expect(error.expected).toEqual(["e", "d"]);
    expect(error.actual).toEqual(["d", "e"]);
  });

  it("shows the position of the difference (nested in array)", () => {
    const error = getAssertionError(() => {
      expect({ a: [{ b: 1, c: { d: 2, e: 3 } }] }).toEqualWithKeyOrder({ a: [{ b: 1, c: { e: 3, d: 2 } }] });
    });
    expect(error.message).toEqual(`Value is equal, but key order at $.["a"].[0].["c"] is not`);
    expect(error.expected).toEqual(["e", "d"]);
    expect(error.actual).toEqual(["d", "e"]);
  });

  it("throws on cycles", () => {
    const expected: Record<string, unknown> = { a: 1 };
    expected.b = expected;
    const received: Record<string, unknown> = { a: 1 };
    received.b = received;
    expect(() => expect(received).toEqualWithKeyOrder(expected)).toThrow();
  });
});

interface JestExtendError {
  message: string;
  actual: unknown;
  expected: unknown;
}

function getAssertionError(callback: () => void): JestExtendError {
  try {
    callback();
  } catch (error) {
    return error as JestExtendError;
  }
  throw new Error("Callback did not throw");
}
