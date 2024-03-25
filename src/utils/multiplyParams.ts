type Params<T extends string> = { params: Record<T, string> };

export function multiplyParams<T extends string>(input: Record<T, string[]>): Params<T>[] {
  if (Object.keys(input).length === 0) {
    return [];
  }
  const result = [];
  for (const permutation of permutations(input)) {
    result.push({ params: permutation });
  }

  return result;
}

function* permutations(
  input: Record<string, string[]>,
  fixedValues: Record<string, string> = {},
): Generator<Record<string, string>> {
  const nextKey = Object.keys(input).find((key) => fixedValues[key] == null);
  if (nextKey == null) {
    yield fixedValues;
    return;
  }
  for (const value of input[nextKey]) {
    yield* permutations(input, { ...fixedValues, [nextKey]: value });
  }
}
