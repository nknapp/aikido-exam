export function copyArrayBuffer(buffer: ArrayBuffer): ArrayBuffer {
  const result = new ArrayBuffer(buffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(buffer));
  return result;
}
