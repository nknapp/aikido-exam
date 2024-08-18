export function coerceToArray<T>(input: T | T[] | undefined | null): T[] {
  if (input == null) {
    return [];
  }
  if (Array.isArray(input)) {
    return input;
  }
  return [input];
}
