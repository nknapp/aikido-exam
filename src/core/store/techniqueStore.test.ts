import { createTechniqueStore } from "$core/store/techniqueStore.ts";
import { createTechnique, tqs } from "$core/model/Technique.test-helper.ts";

describe("techniqueStore", () => {
  it("is initially empty", async () => {
    const store = createTechniqueStore("dojo1");
    expect(await store.load()).toHaveLength(0);
  });

  it("stores and retrieves", async () => {
    const store = createTechniqueStore("dojo1");
    await store.save([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    ]);

    const loaded = await store.load();
    expect(tqs(loaded)).toEqual(
      tqs([
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      ]),
    );
  });

  it("keeps value of input is changed later", async () => {
    const store = createTechniqueStore("dojo1");
    const data = [
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    ];
    await store.save(data);

    data.shift();
    const loaded = await store.load();
    expect(tqs(loaded)).toEqual(
      tqs([
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      ]),
    );
  });

  it("keeps state across instances and reloads", async () => {
    const store = createTechniqueStore("dojo1");
    await store.save([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
    ]);

    vi.resetModules();

    const storeAfterReload = (await import("./techniqueStore")).createTechniqueStore("dojo1");

    const loaded = await storeAfterReload.load();
    expect(tqs(loaded)).toEqual(
      tqs([
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      ]),
    );
  });
});
