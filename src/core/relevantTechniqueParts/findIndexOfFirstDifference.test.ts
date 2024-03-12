import { describe } from "vitest";
import { findIndexOfFirstDifference } from "$core/relevantTechniqueParts/findIndexOfFirstDifference";

describe("findIndexOfFirstDifference", () => {
  it.each([
    { a: [], b: [], result: -1 },
    { a: ["a"], b: ["a"], result: -1 },
    { a: ["a", "b"], b: ["a", "b"], result: -1 },
    { a: ["a"], b: ["b"], result: 0 },
    { a: ["a", "b"], b: ["a", "c"], result: 1 },
    { a: ["a", "b"], b: ["a", "b", "c"], result: 2 },
    { a: ["a", "b", "c"], b: ["a", "b"], result: 2 },
    { a: [], b: ["a", "b"], result: 0 },
    { a: ["1"], b: [1], result: 0 },
  ])("the $a vs $b = $result", ({ a, b, result }) => {
    expect(findIndexOfFirstDifference(a, b)).toEqual(result);
  });
});
