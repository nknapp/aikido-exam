import { useMockEndpoints } from "$core/test-utils/mock-api.ts";
import { http } from "msw";
import mockApiUrl from "./mock-api.ts?url";

describe("mock-api", () => {
  it("sanity check", async () => {
    useMockEndpoints(
      http.get(mockApiUrl, () => {
        return new Response("This is the mocked api");
      }),
    );
    const response = await fetch(mockApiUrl);
    expect(await response.text()).toEqual("This is the mocked api");
  });
});
