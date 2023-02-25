import { relevantQueryParts } from "./relevant-query-parts";

describe("relevantQueryParts", () => {
  it("uses only direction if everything else is equal", () => {
    expect(
      relevantQueryParts(
        ["suwari waza", "kata dori", "ikkyo", "ura"],
        ["suwari waza", "kata dori", "ikkyo", "omote"]
      )
    ).toEqual(["ura"]);
  });

  it("uses direction and defence, if execution and attack is equal", () => {
    expect(
      relevantQueryParts(
        ["suwari waza", "kata dori", "ikkyo", "ura"],
        ["suwari waza", "kata dori", "nikyo", "omote"]
      )
    ).toEqual(["ikkyo", "ura"]);
  });

  it("uses attach, direction and defence, if execution is equal", () => {
    expect(
      relevantQueryParts(
        ["suwari waza", "kata dori", "ikkyo", "ura"],
        ["suwari waza", "gyuako hanmi katate dori", "ikkyo", "omote"]
      )
    ).toEqual(["kata dori", "ikkyo", "ura"]);
  });

  it("works with defences that have no direction", () => {
    expect(
      relevantQueryParts(
        ["suwari waza", "kata dori", "irimi nage"],
        ["suwari waza", "kata dori", "ikkyo", "ura"]
      )
    ).toEqual(["irimi nage"]);
  });
});
