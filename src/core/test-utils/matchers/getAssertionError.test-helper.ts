interface JestExtendError {
  message: string;
  actual: unknown;
  expected: unknown;
}

export function getAssertionError(callback: () => void): JestExtendError {
  try {
    callback();
  } catch (error) {
    return error as JestExtendError;
  }
  throw new Error("Callback did not throw");
}
