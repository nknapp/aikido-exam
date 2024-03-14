import { techniquePredicate } from "./technique-filters";
import { createTechnique } from "$core/model/Technique.test-helper";

describe("filtertechniques", () => {
  it("removes suwari and hamni handachi defences if the badKnees-filter is set", () => {
    const filtered = [
      createTechnique("suwari waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("hanmi handachi waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("tachi waza", "shomen uchi", "irimi nage", "ura"),
    ].filter(techniquePredicate({ badKnees: true }));
    expect(filtered).toEqual([createTechnique("tachi waza", "shomen uchi", "irimi nage", "ura")]);
  });

  it("returns the whole list, if all filters are disabled", () => {
    const filtered = [
      createTechnique("suwari waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("hanmi handachi waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("tachi waza", "shomen uchi", "irimi nage", "ura"),
    ].filter(techniquePredicate({ badKnees: false }));
    expect(filtered).toEqual([
      createTechnique("suwari waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("hanmi handachi waza", "shomen uchi", "irimi nage", "ura"),
      createTechnique("tachi waza", "shomen uchi", "irimi nage", "ura"),
    ]);
  });
});
