import { setupServer } from "msw/node";
import { mockSpeechPackEndpoint } from "$core/model/SpeechPack.mock-endpoint";
import { RequestHandler } from "msw";

const server = setupServer(mockSpeechPackEndpoint());

server.listen();

export function useMockEndpoints(...endpoints: Array<RequestHandler>) {
  return server.use(...endpoints);
}
