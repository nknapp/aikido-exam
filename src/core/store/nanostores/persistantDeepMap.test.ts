import { persistentDeepMap } from "./persistantDeepMap.ts";

describe("persistentDeepMap", () => {
  it("sets and retrieves data", () => {
    const store = persistentDeepMap("test", { name: "Nils", size: 42 });
    store.setKey("name", "Neals");
    expect(store.value).toEqual({
      name: "Neals",
      size: 42,
    });
  });

  it("persists data", async () => {
    const store = persistentDeepMap("test", { name: "Nils", size: 42 });

    store.setKey("name", "Neals");

    const newStore = persistentDeepMap("test", { name: "Nils", size: 42 });

    expect(newStore.value).toEqual({
      name: "Neals",
      size: 42,
    });
  });
});
