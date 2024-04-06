import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { Reader } from "@/components/solid/organisms/Reader/Reader.tsx";
import { createDojoInfo } from "$core/model/Dojo.test-helper.ts";
import { createTechniqueStore } from "$core/store";
import { screen } from "solid-testing-library";
import { createTechnique } from "$core/model/Technique.test-helper.ts";

describe("Reader", () => {
  it("shows all techniques from storage", async () => {
    const dojo = createDojoInfo();
    const techniqueStore = createTechniqueStore(dojo.id);
    await techniqueStore.save([createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")]);
    renderSolid(() => <Reader dojoInfo={dojo} />);
    expect(await screen.findAllByText("suwari waza")).toHaveLength(1);
    expect(await screen.findAllByText("ai hanmi katate dori")).toHaveLength(1);
    expect(await screen.findAllByText("omote")).toHaveLength(1);
  });

  it.skip("shows only one execution, attack and defence for consecutive techniques", async () => {
    const dojo = createDojoInfo();
    const techniqueStore = createTechniqueStore(dojo.id);
    await techniqueStore.save([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("hanmi handachi waza", "kata dori", "sankyo", "ura"),
    ]);
    renderSolid(() => <Reader dojoInfo={dojo} />);
    expect(await screen.findAllByText("suwari waza")).toHaveLength(1);
    expect(await screen.findAllByText("ai hanmi katate dori")).toHaveLength(1);
    expect(await screen.findAllByText("omote")).toHaveLength(1);
    expect(await screen.findAllByText("ura")).toHaveLength(2);
    expect(await screen.findAllByText("hanmi handachi waza")).toHaveLength(1);
    expect(await screen.findAllByText("kata dori")).toHaveLength(1);
    expect(await screen.findAllByText("sankyo")).toHaveLength(1);
  });
});
