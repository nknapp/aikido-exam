import type { Dojo, DojoInfo, ResolvedDojo } from "$core/model/Dojo";

export async function listDojos(): Promise<DojoInfo[]> {
  const dojos = import.meta.glob<Dojo>("./*/index.ts", { eager: true, import: "default" });
  return Object.values(dojos)
    .filter((dojo) => !dojo.draft)
    .map((dojo) => dojo.info);
}

export async function loadDojo(id: string): Promise<ResolvedDojo> {
  const dojos = import.meta.glob<Dojo>("./*/index.ts", { eager: true, import: "default" });
  const dojo = Object.values(dojos).find((dojo) => dojo.info.id === id);
  if (dojo == null) {
    throw new Error("Dojo not found: " + id);
  }
  return {
    info: dojo.info,
    details: (await dojo.details()).default,
  };
}
