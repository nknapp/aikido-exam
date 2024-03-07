export function remapObject<K extends string, V, KX extends string, VX>(
  obj: Partial<Record<K, V>>,
  mapEntries: (entries: [K, V][]) => Array<[KX, VX]>,
): Partial<Record<KX, VX>> {
  return Object.fromEntries(mapEntries(Object.entries(obj) as [K, V][])) as Record<KX, VX>;
}
