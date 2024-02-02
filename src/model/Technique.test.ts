import { SINGLE_DIRECTION } from "src/exam-tables/audio-files";
import { Technique } from "./Technique";

describe("Technique", () => {
  it("stores correct parts", () => {
    const technique = new Technique(["jo dori", "gyuako hanmi katate dori", "ikkyo", "omote"], {});

    expect(technique).toEqual(
      expect.objectContaining({
        attack: "gyuako hanmi katate dori",
        defence: "ikkyo",
        direction: "omote",
        execution: "jo dori",
      }),
    );
  });

  it("returns single-direction", () => {
    const technique = new Technique(["jo dori", "gyuako hanmi katate dori", "ikkyo", SINGLE_DIRECTION], {});
    expect(technique.direction).toBe(SINGLE_DIRECTION);
  });

  it("'matches' checks if a prefix is equal", () => {
    const technique = new Technique(["jo dori", "gyuako hanmi katate dori", "ikkyo", "omote"], {});

    expect(technique.matches("jo dori", "gyuako hanmi katate dori")).toBe(true);
    expect(technique.matches("suwari waza", "gyuako hanmi katate dori")).toBe(false);
    expect(technique.matches("jo dori", "ai hanmi katate dori")).toBe(false);

    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo")).toBe(true);
    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "gokyo")).toBe(false);

    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo", "omote")).toBe(true);
    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo", "ura")).toBe(false);
  });

  it("'matches' checks if a prefix is equal for techniques with single direction", () => {
    const technique = new Technique(["jo dori", "gyuako hanmi katate dori", "ikkyo", "single-direction"], {});

    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo")).toBe(true);
    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "gokyo")).toBe(false);

    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo", "omote")).toBe(false);
    expect(technique.matches("jo dori", "gyuako hanmi katate dori", "ikkyo", "ura")).toBe(false);
  });
});
