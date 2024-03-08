import { http } from "msw";

export function mockSpeechPackEndpoint() {
  return http.get("/speech/:filename", ({ params }) => {
    return new Response((params.filename as string).toUpperCase());
  });
}
