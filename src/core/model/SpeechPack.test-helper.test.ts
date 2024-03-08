import { describe } from "vitest";
import { createMockSpeechPack } from "$core/model/SpeechPack.test-helper";

describe("createMockSpeechPack", () => {
  it("contains loadable urls", async () => {
    const pack = createMockSpeechPack();
    const response = await window.fetch(new URL(pack.omote, window.location.href));
    const body = await response.text();
    expect(body).toEqual("OMOTE");
  });

  it("replaces spaces with underscores", async () => {
    const pack = createMockSpeechPack();
    const response = await window.fetch(new URL(pack["ai hanmi katate dori"], window.location.href));
    const body = await response.text();
    expect(body).toEqual("AI_HANMI_KATATE_DORI");
  });
});
