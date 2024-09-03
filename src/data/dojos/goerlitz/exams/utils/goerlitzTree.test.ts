import { goerlitzTree } from "./goerlitzTree.ts";

describe("goerlitzTree", () => {
  it("replaces attack and defence", () => {
    expect(
      goerlitzTree({
        "suwari waza": {
          sankyo: {
            "jodan tsuki": { ura: {} },
          },
          nikyo: {
            "jodan tsuki": { ura: {} },
          },
        },
      }),
    ).toEqual({
      "suwari waza": {
        "jodan tsuki": {
          nikyo: {
            ura: {},
          },
          sankyo: {
            ura: {},
          },
        },
      },
    });
  });
});
