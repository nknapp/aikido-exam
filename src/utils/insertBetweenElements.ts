export function insertBetweenElements<T, S>(items: T[], separator: S): (T | S)[] {
  const result = new Array(items.length * 2 - 1);
  for (let i = 0; i < items.length; i++) {
    result[i * 2] = items[i];
    if (i > 0) {
      result[i * 2 - 1] = separator;
    }
  }
  return result;
}
