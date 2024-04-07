import { assertMock } from "$core/test-utils/assertMock.ts";
import { playArrayBuffer, type PlayArrayBufferOptions } from "$core/playArrayBuffer/playArrayBuffer.ts";

export function watchPlayArrayBuffer() {
  const playedArrayBuffers: string[] = [];
  const textDecoder = new TextDecoder();

  beforeEach(() => {
    playedArrayBuffers.splice(0, Infinity);
    assertMock(playArrayBuffer);
    playArrayBuffer.mockImplementation(async (buffer, { abortSignal }: PlayArrayBufferOptions = {}) => {
      const filename = textDecoder.decode(buffer);
      playedArrayBuffers.push(filename);
      const handleAbort = () => {
        playedArrayBuffers.push("ABORT " + filename);
      };
      abortSignal?.addEventListener("abort", handleAbort);
      await Promise.resolve();
      abortSignal?.removeEventListener("abort", handleAbort);
    });
  });

  return {
    playedArrayBuffers,
  };
}
