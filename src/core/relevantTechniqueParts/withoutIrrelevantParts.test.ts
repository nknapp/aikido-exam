import { createTechnique } from "$core/model/Technique.test-helper";
import { withoutIrrelevantParts } from "$core/relevantTechniqueParts/withoutIrrelevantParts.ts";

describe("withoutIrrelevantParts", () => {
  it("uses only direction if everything else is equal", () => {
    expect(
      withoutIrrelevantParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "omote"),
      ),
    ).toEqual({ direction: "ura" });
  });

  it("uses direction and defence, if execution and attack is equal", () => {
    expect(
      withoutIrrelevantParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "nikyo", "omote"),
      ),
    ).toEqual({ defence: "ikkyo", direction: "ura" });
  });

  it("uses attach, direction and defence, if execution is equal", () => {
    expect(
      withoutIrrelevantParts(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "gyuako hanmi katate dori", "ikkyo", "omote"),
      ),
    ).toEqual({ attack: "kata dori", defence: "ikkyo", direction: "ura" });
  });

  it("uses execution, attach, direction and defence, if execution is equal", () => {
    expect(
      withoutIrrelevantParts(
        createTechnique("tachi waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "gyuako hanmi katate dori", "ikkyo", "omote"),
      ),
    ).toEqual({ execution: "tachi waza", attack: "kata dori", defence: "ikkyo", direction: "ura" });
  });

  it("works with defences that have no direction", () => {
    expect(
      withoutIrrelevantParts(
        createTechnique("suwari waza", "kata dori", "irimi nage", "single-direction"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
      ),
    ).toEqual({ defence: "irimi nage" });
  });
});
