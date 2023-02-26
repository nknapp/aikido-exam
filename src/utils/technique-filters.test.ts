import { Technique } from "../model/Technique";
import { techniquePredicate } from "./technique-filters";

describe("filtertechniques", () => {
  it("removes suwari and hamni handachi defences if the badKnees-filter is set", () => {
    const filtered = [
      new Technique(["suwari waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"]),
    ].filter(techniquePredicate({ badKnees: true }));
    expect(filtered).toEqual([new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"])]);
  });

  it("returns the whole list, if all filters are disabled", () => {
    const filtered = [
      new Technique(["suwari waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"]),
    ].filter(techniquePredicate({ badKnees: false }));
    expect(filtered).toEqual([
      new Technique(["suwari waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["hanmi handachi waza", "shomen uchi", "irimi nage", "ura"]),
      new Technique(["tachi waza", "shomen uchi", "irimi nage", "ura"]),
    ]);
  });
});
