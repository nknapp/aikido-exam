import type { Persistence } from "./types";
import type { Technique } from "$core/model";
import { createPersistentStore } from "$core/store/createPersistentStore.ts";

export function createTechniqueStore(dojoId: string): Persistence<Technique[]> {
  return createPersistentStore<Technique[]>(`currentTechniques:${dojoId}`, []);
}
