import { Dojo, DojoDetails, DojoInfo } from "$core/model/Dojo";

export async function listDojos(): Promise<DojoInfo[]> {
  const dojos = import.meta.glob<Dojo>("./*/index.ts", { eager: true, import: "default" });
  return Object.values(dojos).map((dojo) => dojo.info);
}

export async function loadDojoDetails(id: string): Promise<DojoDetails> {
  const dojos = import.meta.glob<Dojo>("./*/index.ts", { eager: true, import: "default" });
  const dojo = Object.values(dojos).find((dojo) => dojo.info.id === id);
  if (dojo == null) {
    throw new Error("Dojo not found: " + id);
  }
  return (await dojo.details()).default;
}
