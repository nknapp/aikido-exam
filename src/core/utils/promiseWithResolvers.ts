import { nanoid } from "nanoid";

export function promiseWithResolvers<T>(): {
  promise: Promise<T>;
  reject: (error: Error) => void;
  resolve: (value: T) => void;
} {
  let resolve: (value: T) => void = null!;
  let reject: (error: Error) => void = null!;
  const promise: Promise<T> & { id?: string } = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.id = "pwr--" + nanoid(4);
  return { promise, resolve, reject };
}
