export function findIndexOfFirstDifference(array1: unknown[], array2: unknown[]): number {
  const maxIndex = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxIndex; i++) {
    if (array1[i] !== array2[i]) return i;
  }
  return -1;
}
