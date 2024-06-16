import { insertBetweenElements } from "@/utils/insertBetweenElements.ts";

describe("insertBetweenElements", () => {
  it("inserts the separator between every element", () => {
    expect(insertBetweenElements([10, 20, 30], ",")).toEqual([10, ",", 20, ",", 30]);
  });
});
