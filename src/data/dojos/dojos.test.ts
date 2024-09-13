import { describe } from "vitest";
import { listDojos } from "@/data/dojos/index";

describe("dojos", () => {
  describe("listDojos", () => {
    it("loads a list of DojoInfo objects", async () => {
      expect(await listDojos()).toEqual([
        {
          id: "aikido-dojo-darmstadt",
          name: "Aikido Dojo Darmstadt",
          logo: "/src/data/dojos/aikido-dojo-darmstadt/logo.png",
          compareToAifd: true,
        },
        {
          id: "aikido-foederation",
          name: "Aikido Föderation Darmstadt e.V.",
          logo: "/src/data/dojos/aikido-foederation/logo.svg",
        },
        {
          id: "kenkokan",
          logo: "/src/data/dojos/kenkokan/logo_150.png",
          name: "Kenkokan Görlitz",
        },
      ]);
    });
  });

  describe("loadDojo", () => {
    it("loads a specific dojo by id", () => {});
  });
});
