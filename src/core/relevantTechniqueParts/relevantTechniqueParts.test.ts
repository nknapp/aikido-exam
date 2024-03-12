import { relevantTechniqueParts } from "./relevantTechniqueParts";
import { createTechnique } from "$core/model/Technique.test-helper";

describe("relevantTechniqueParts", () => {
  it("uses only direction if everything else is equal", () => {
    expect(
      relevantTechniqueParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "omote"),
      ),
    ).toEqual(["ura"]);
  });

  it("uses direction and defence, if execution and attack is equal", () => {
    expect(
      relevantTechniqueParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "nikyo", "omote"),
      ),
    ).toEqual(["ikkyo", "ura"]);
  });

  it("uses attach, direction and defence, if execution is equal", () => {
    expect(
      relevantTechniqueParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "gyuako hanmi katate dori", "ikkyo", "omote"),
      ),
    ).toEqual(["kata dori", "ikkyo", "ura"]);
  });

  it("works with defences that have no direction", () => {
    expect(
      relevantTechniqueParts(
        createTechnique("suwari waza", "kata dori", "irimi nage", "single-direction"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
      ),
    ).toEqual(["irimi nage"]);
  });
});
