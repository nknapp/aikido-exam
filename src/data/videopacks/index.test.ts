import { listVideoPacks } from "@/data/videopacks/index.ts";

describe("videoPacks", () => {
  it("listVideoPacks", async () => {
    expect(await listVideoPacks()).toContainEqual({
      id: "aikido-kompendium",
      name: "Aikido Kompendium",
      source: "https://www.aikido-kompendium.de",
    });
  });
});
