import type { Persistence } from "./types";
import type { Technique } from "$core/model";

export function createTechniqueStore(dojoId: string): Persistence<Technique[]> {
  const key = `currentTechniques:${dojoId}`;
  return {
    async save(techniques) {
      localStorage.setItem(key, JSON.stringify(techniques));
    },
    async load(): Promise<Technique[]> {
      const value = localStorage.getItem(key);
      if (value == null) {
        return [];
      }
      return Promise.resolve(JSON.parse(value));
    },
  };
}
