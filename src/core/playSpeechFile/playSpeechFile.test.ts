import { loadSpeechPack, playSpeechFile } from "./playSpeechFile";
import { createMockSpeechPack } from "$core/model/SpeechPack.test-helper.ts";
import { useMockEndpoints } from "$core/test-utils/mock-api.ts";
import { mockSpeechPackEndpoint } from "$core/model/SpeechPack.mock-endpoint.ts";
import { watchPlayArrayBuffer } from "$core/playArrayBuffer/playArrayBuffer.test-helper.ts";

vi.unmock("./playSpeechFile");

const speechPack = createMockSpeechPack();

useMockEndpoints(mockSpeechPackEndpoint());

const { playedArrayBuffers } = watchPlayArrayBuffer();

describe("playSpeechFile", () => {
  it("plays the arraybuffer loaded for the file", async () => {
    await loadSpeechPack(speechPack);
    await playSpeechFile("kata dori", new AbortController().signal);
    expect(playedArrayBuffers).toEqual(["KATA_DORI"]);
  });

  it("throws an error if no speechpack is loaded", async () => {
    vi.resetModules();
    const freshModule = await import("./playSpeechFile");
    await expect(freshModule.playSpeechFile("kata dori", new AbortController().signal)).rejects.toThrow(
      "No SpeechPack loaded",
    );
  });
});
