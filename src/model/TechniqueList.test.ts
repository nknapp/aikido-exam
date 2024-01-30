import { TechniqueList } from "./TechniqueList";
import { Technique } from "./Technique";
import { SINGLE_DIRECTION } from "src/exam-tables/audio-files";

describe("TechniqueList", () => {
  describe("groupBy", () => {
    it("groups by techinquePart", () => {
      const input = new TechniqueList([
        new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"], {}),
        new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"], {}),
        new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"], {}),
        new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"], {}),
      ]);

      expect(input.groupBy("attack")).toEqual([
        {
          name: "ai hanmi katate dori",
          items: new TechniqueList([
            new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"], {}),
            new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"], {}),
          ]),
        },
        {
          name: "gyuako hanmi katate dori",
          items: new TechniqueList([
            new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"], {}),
            new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"], {}),
          ]),
        },
      ]);
    });
  });

  describe("hasDirections", () => {
    it("if one technique has omote", () => {
      const input = new TechniqueList([new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"], {})]);
      expect(input.hasDirections).toBe(true);
    });

    it("if one technique has ura", () => {
      const input = new TechniqueList([new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"], {})]);
      expect(input.hasDirections).toBe(true);
    });

    it("not if only SINGLE_DIRECTION", () => {
      const input = new TechniqueList([
        new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", SINGLE_DIRECTION], {}),
      ]);
      expect(input.hasDirections).toBe(false);
    });
  });
});
