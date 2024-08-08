import { renderSolid } from "$core/test-utils/renderSolid.test-helper.tsx";
import { Reader } from "@/components/solid/organisms/Reader/Reader.tsx";
import { createDojoInfo } from "$core/model/Dojo.test-helper.ts";
import { createTechniqueStore } from "$core/store";
import { screen } from "solid-testing-library";
import { createTechnique } from "$core/model/Technique.test-helper.ts";
import { waitFor, within } from "@testing-library/react";
import { createMockSpeechPack } from "$core/model/SpeechPack.test-helper.ts";
import { user } from "$core/test-utils/user.ts";
import { assertMock } from "$core/test-utils/assertMock.ts";
import { loadSpeechPack } from "$core/playSpeechFile";
import { watchPlaySpeechFile } from "$core/playSpeechFile/playSpeechFile.test-helpers.ts";
import { SINGLE_DIRECTION, type Technique } from "$core/model";

const speechPack = createMockSpeechPack();

const { playSpeechFileEvents, controlPlayback } = watchPlaySpeechFile();

async function renderReader({ dojo: dojoInfo = createDojoInfo(), techniques = [] as Technique[] }) {
  const techniqueStore = createTechniqueStore(dojoInfo.id);
  await techniqueStore.save(techniques);
  renderSolid(() => <Reader dojoInfo={dojoInfo} speechPack={speechPack} />);
}

describe("Reader", () => {
  it("shows all techniques from storage", async () => {
    await renderReader({ techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")] });
    expect(await screen.findAllByText("suwari waza")).toHaveLength(1);
    expect(await screen.findAllByText("ai hanmi katate dori")).toHaveLength(1);
    expect(await screen.findAllByText("omote")).toHaveLength(1);
  });

  it("shows all irrelevant fields in gray", async () => {
    await renderReader({
      techniques: [
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
        createTechnique("hanmi handachi waza", "kata dori", "sankyo", "ura"),
      ],
    });
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(3);
    assertScrollListItem(items[0], {
      "suwari waza": "black",
      "ai hanmi katate dori": "black",
      ikkyo: "black",
      omote: "black",
    });
    assertScrollListItem(items[1], {
      "suwari waza": "gray",
      "ai hanmi katate dori": "gray",
      ikkyo: "gray",
      ura: "black",
    });
    assertScrollListItem(items[2], {
      "hanmi handachi waza": "black",
      "kata dori": "black",
      sankyo: "black",
      ura: "black",
    });
  });

  it("does not render 'single-direction'", async () => {
    await renderReader({
      techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "single-direction")],
    });
    await screen.findAllByRole("listitem");
    expect(screen.queryByText(SINGLE_DIRECTION)).toBeNull();
  });

  it("initially, no technique is the 'current'.", async () => {
    await renderReader({
      techniques: [
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      ],
    });

    const items = await screen.findAllByRole("listitem");
    for (const item of items) {
      expect.soft(item).toHaveAttribute("aria-current", "false");
    }
  });

  it("initially, the first technique is marked as upcoming", async () => {
    await renderReader({
      techniques: [
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
        createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      ],
    });

    const firstItem = (await screen.findAllByRole("listitem"))[0];

    expect.soft(firstItem).toHaveTextContent(/Upcoming/);
  });

  it("calls loadSpeechPack on load", async () => {
    await renderReader({ techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")] });
    assertMock(loadSpeechPack);
    await waitFor(() => {
      expect(loadSpeechPack).toHaveBeenCalled();
    });
  });

  it("plays the first item when play is pressed", async () => {
    await renderReader({
      techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")],
    });
    const playButton = await screen.findByRole("button", { name: "Play" });
    await user.click(playButton);
    expect(playSpeechFileEvents).toEqual([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
    ]);
  });

  it("sets the first technique as 'current' when playing ", async () => {
    await renderReader({
      techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")],
    });
    await user.click(await screen.findByRole("button", { name: "Play" }));
    const item = await screen.findByRole("listitem");
    expect(item).toHaveAttribute("aria-current", "true");
  });

  it("sets shows 'Stop' button while playing ", async () => {
    await renderReader({
      techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")],
    });
    const { finish } = controlPlayback();
    await user.click(await screen.findByRole("button", { name: "Play" }));
    expect(await screen.findByRole("button", { name: "Stop" }));
    finish();
    expect(await screen.findByRole("button", { name: "Play" }));
  });

  it("aborts playing when clicking 'Stop'", async () => {
    await renderReader({
      techniques: [createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote")],
    });
    const { finish, finishNext } = controlPlayback();
    await user.click(await screen.findByRole("button", { name: "Play" }));
    finishNext("suwari waza");
    await user.click(await screen.findByRole("button", { name: "Stop" }));

    finish();
    expect(playSpeechFileEvents).toEqual([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "abort: ai hanmi katate dori",
    ]);
    expect(await screen.findByRole("button", { name: "Play" }));
  });
});

function assertScrollListItem(element: HTMLElement, contents: Record<string, "gray" | "black">) {
  for (const [text, color] of Object.entries(contents)) {
    const colorClass = color === "black" ? "text-black" : "text-secondary";
    expect(within(element).getByText(text), text).toHaveClass(colorClass);
  }
}
