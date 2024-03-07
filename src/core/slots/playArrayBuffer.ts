export interface PlayArrayBufferOptions {
  abortSignal?: AbortSignal;
}

export type PlayArrayBuffer = (arrayBuffer: ArrayBuffer, options?: PlayArrayBufferOptions) => Promise<void>;
