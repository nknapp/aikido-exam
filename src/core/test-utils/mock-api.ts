import { setupServer } from "msw/node";
import { mockSpeechPackEndpoint } from "$core/model/SpeechPack.mock-endpoint.ts";
import { RequestHandler } from "msw";

const server = setupServer(mockSpeechPackEndpoint());
server.listen();

export function setupMockApi() {
  // Dummy function, so that we have something to call from setup
}

export function useMockEndpoints(...endpoints: Array<RequestHandler>) {
  return server.use(...endpoints);
}
