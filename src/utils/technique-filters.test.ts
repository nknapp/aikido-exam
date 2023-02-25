import { filterTechniques } from "./technique-filters";
import { Technique } from "../model/Technique";

describe("filtertechniques", () => {
  it("removes suwari and hamni handachi defences if the badKnees-filter is set", () => {
    const filtered = filterTechniques(
      [
        new Technique(["suwari waza", "shomen uchi", "irimi nage", "ura"]),
        new Technique([
          "hanmi handachi waza",
          "shomen uchi",
          "irimi nage",
          "ura",
        ]),
        new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"]),
      ],
      { badKnees: true }
    );
    expect(filtered).toEqual([
      ["tachi waza", "shomen uchi", "irimi nage", "ura"],
    ]);
  });

  it("returns the whole list, if all filters are disabled", () => {
    const filtered = filterTechniques(
      [
        new Technique(["suwari waza", "shomen uchi", "irimi nage", "ura"]),
        new Technique([
          "hanmi handachi waza",
          "shomen uchi",
          "irimi nage",
          "ura",
        ]),
        new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"]),
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
