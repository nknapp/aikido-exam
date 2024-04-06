import { createTechnique } from "$core/model/Technique.test-helper";
import { relevantTechniqueProperties } from "$core/relevantTechniqueParts/relevantTechniqueProperties.ts";

describe("relevantTechniqueParts", () => {
  it("uses all props if last technique is undefined", () => {
    expect(relevantTechniqueProperties(createTechnique("suwari waza", "kata dori", "ikkyo", "ura"), undefined)).toEqual(
      ["execution", "attack", "defence", "direction"],
    );
  });

  it("uses only direction if everything else is equal", () => {
    expect(
      relevantTechniqueProperties(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "omote"),
      ),
    ).toEqual(["direction"]);
  });

  it("uses direction and defence, if execution and attack is equal", () => {
    expect(
      relevantTechniqueProperties(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "kata dori", "nikyo", "omote"),
      ),
    ).toEqual(["defence", "direction"]);
  });

  it("uses attach, direction and defence, if execution is equal", () => {
    expect(
      relevantTechniqueProperties(
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
        createTechnique("suwari waza", "gyuako hanmi katate dori", "ikkyo", "omote"),
      ),
    ).toEqual(["attack", "defence", "direction"]);
  });

  it("works with defences that have no direction", () => {
    expect(
      relevantTechniqueProperties(
        createTechnique("suwari waza", "kata dori", "irimi nage", "single-direction"),
        createTechnique("suwari waza", "kata dori", "ikkyo", "ura"),
      ),
    ).toEqual(["defence"]);
  });
});
