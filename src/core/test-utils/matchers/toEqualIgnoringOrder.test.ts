describe("toEqualIgnoringOrder", () => {
  it("matches the same array", () => {
    const array = [1, 2, 3];
    expect(array).toEqualIgnoringOrder(array);
  });

  it("matches an equal array", () => {
    expect([1, 2, 3]).toEqualIgnoringOrder([1, 2, 3]);
  });

  it("matches array with same items in different order", () => {
    expect([1, 2, 3]).toEqualIgnoringOrder([2, 1, 3]);
  });

  it("fails on too many items", () => {
    expect([1, 2, 3, 4]).not.toEqualIgnoringOrder([2, 1, 3]);
  });
  it("fails on too few items", () => {
    expect([1, 2, 3]).not.toEqualIgnoringOrder([2, 1, 3, 4]);
  });

  it("readable error message and ordered result", () => {
    try {
      expect([1, 2, 3]).toEqualIgnoringOrder([4, 3, 2]);
      expect.fail("Should throw error");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.message).toEqual("Arrays should have the same elements.");
      expect(error.actual).toEqual([3, 2, 1]);
      expect(error.expected).toEqual([4, 3, 2]);
    }
  });

  it("readable error message and ordered result (inverted)", () => {
    try {
      expect([1, 2, 3]).not.toEqualIgnoringOrder([1, 3, 2]);
      expect.fail("Should throw error");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.message).toEqual("Arrays should not have the same elements.");
      expect(error.actual).toEqual([1, 3, 2]);
      expect(error.expected).toEqual([1, 3, 2]);
    }
  });
});
