import type { SpeechFile } from "$core/slots";
import { useMockEndpoints } from "$core/test-utils/mock-api";
import { http } from "msw";
import { createMockSpeechPack } from "$core/slots/SpeechPack.test-helper";
import { type ResolvedSpeechPack, resolveSpeechPack } from "$core/SpeechPackPlayer/resolveSpeechPack";
import { logWarn } from "$core/utils/logger";

const decoder = new TextDecoder();

function decodeAsText(resolvedPack: ResolvedSpeechPack, file: SpeechFile) {
  const uint8Array = new Uint8Array(resolvedPack[file]);
  return decoder.decode(uint8Array);
}

describe("resolveSpeechPack", () => {
  beforeEach(() => {});

  it("resolves 'omote' and 'ura'", async () => {
    useMockEndpoints(
      http.get("/myspeech/omote", () => new Response("OMOTE WAZA")),
      http.get("/myspeech/ura", () => new Response("URA WAZA")),
    );

    const resolvedPack = await resolveSpeechPack(
      createMockSpeechPack({
        omote: "/myspeech/omote",
        ura: "/myspeech/ura",
      }),
    );
    expect(decodeAsText(resolvedPack, "omote")).toEqual("OMOTE WAZA");
    expect(decodeAsText(resolvedPack, "ura")).toEqual("URA WAZA");
  });

  it("throws if a file cannot be loaded", async () => {
    useMockEndpoints(http.get("/myspeech/omote", () => Response.error()));
    useMockEndpoints(http.get("/myspeech/ura", () => new Response("URA WAZA")));

    await expect(
      resolveSpeechPack(
        createMockSpeechPack({
          omote: "/myspeech/omote",
          ura: "/myspeech/ura",
        }),
      ),
    ).rejects.toThrow();
  });

  it("retries once, if a file cannot be loaded", async () => {
    let counter = 0;
    useMockEndpoints(
      http.get("/myspeech/omote", () => {
        if (counter++ < 1) {
          return Response.error();
        }
        return new Response("OMOTE WAZA");
      }),
    );

    const resolvedPack = await resolveSpeechPack(
      createMockSpeechPack({
        omote: "/myspeech/omote",
      }),
    );
    expect(decodeAsText(resolvedPack, "omote")).toEqual("OMOTE WAZA");
    expect(logWarn).toHaveBeenCalledTimes(1);
    expect(logWarn).toHaveBeenCalledWith("Retrying after ", new TypeError("Failed to fetch"));
  });
});
