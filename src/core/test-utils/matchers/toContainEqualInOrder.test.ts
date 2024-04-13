describe("toContainEqualInOrder", () => {
  it.each([
    { haystack: [], needle: [] },
    { haystack: [1], needle: [] },
    { haystack: [1], needle: [1] },
  ])("$haystack contains $needle", ({ haystack, needle }) => {
    expect(haystack).toContainEqualInOrder(needle);
  });

  it.each([{ haystack: [], needle: [1] }])("$haystack does not contain $needle", ({ haystack, needle }) => {
    expect(haystack).not.toContainEqualInOrder(needle);
  });

  it.skip.each([{ haystack: [1], needle: [] }])("inspect: $haystack contains $needle", ({ haystack, needle }) => {
    expect(haystack).toContainEqualInOrder(needle);
  });
});
