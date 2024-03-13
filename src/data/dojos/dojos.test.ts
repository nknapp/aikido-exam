import { describe } from "vitest";
import { listDojos } from "@/data/dojos/index";

describe("dojos", () => {
  describe("listDojos", () => {
    it("loads a list of DojoInfo objects", async () => {
      expect(await listDojos()).toEqual([
        {
          name: "Aikido Dojo Darmstadt",
          logo: "/src/data/dojos/aikido-dojo-darmstadt/logo.png",
        },
        {
          name: "Aikido Föderation Darmstadt e.V.",
          logo: "/src/data/dojos/aikido-foederation/logo.svg",
        },
      ]);
    });
  });

  describe("loadDojo", () => {
    it("loads a specific dojo by id", () => {});
  });
});
