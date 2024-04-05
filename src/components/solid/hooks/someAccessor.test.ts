import { someAccessor } from "@/components/solid/hooks/someAccessor.ts";

describe("someAccessor", () => {
  it("returns falsy access for empty array", () => {
    expect(someAccessor()()).toBe(false);
  });

  describe.each([
    { args: [() => false], result: false },
    { args: [() => false, () => true], result: true },
    { args: [() => true], result: true },
    { args: [() => true, () => true], result: true },
    { args: [() => false, () => false], result: false },
    { args: [() => undefined], result: false },
    { args: [() => null], result: false },
  ])("for", ({ args, result }) => {
    it(`[ ${args.map((x) => x.toString()).join(",")} ] it returns an accessor returning "${result}"`, () => {
      expect(someAccessor(...args)()).toEqual(result);
    });
  });
});
