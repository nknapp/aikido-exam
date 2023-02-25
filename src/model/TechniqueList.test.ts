import { TechniqueList } from "./TechniqueList";
import { Technique } from "./Technique";

describe("TechniqueList", () => {
  describe("groupBy", () => {
    it("groups by techinquePart", () => {
      const input = new TechniqueList([
        new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"]),
        new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"]),
        new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"]),
        new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"]),
      ]);

      expect(input.groupBy("attack")).toEqual([
        {
          name: "ai hanmi katate dori",
          items: new TechniqueList([
            new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "ura"]),
            new Technique(["tachi waza", "ai hanmi katate dori", "ikkyo", "omote"]),
          ]),
        },
        {
          name: "gyuako hanmi katate dori",
          items: new TechniqueList([
            new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "ura"]),
            new Technique(["tachi waza", "gyuako hanmi katate dori", "ikkyo", "omote"]),
          ]),
        },
      ]);
    });
  });
});
