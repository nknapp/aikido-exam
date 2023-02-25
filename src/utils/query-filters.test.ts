import { filterQueries } from "./query-filters";

describe("filterQueries", () => {
  it("removes suwari and hamni handachi defences if the badKnees-filter is set", () => {
    const filtered = filterQueries(
      [
        ["suwari waza", "shomen uchi", "irimi nage", "ura"],
        ["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"],
        ["tachi waza", "shomen uchi", "irimi nage", "ura"],
      ],
      { badKnees: true }
    );
    expect(filtered).toEqual([
      ["tachi waza", "shomen uchi", "irimi nage", "ura"],
    ]);
  });

  it("returns the whole list, if all filters are disabled", () => {
    const filtered = filterQueries(
      [
        ["suwari waza", "shomen uchi", "irimi nage", "ura"],
        ["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"],
        ["tachi waza", "shomen uchi", "irimi nage", "ura"],
      ],
      { badKnees: false }
    );
    expect(filtered).toEqual([
      ["suwari waza", "shomen uchi", "irimi nage", "ura"],
      ["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"],
      ["tachi waza", "shomen uchi", "irimi nage", "ura"],
    ]);
  });
});
