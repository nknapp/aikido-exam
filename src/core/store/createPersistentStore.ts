import type { Persistence } from "$core/store/types.ts";

export function createPersistentStore<T>(key: string, defaultValue: T): Persistence<T> {
  return {
    async save(value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    async load(): Promise<T> {
      const value = localStorage.getItem(key);
      if (value == null) {
        return defaultValue;
      }
      return Promise.resolve(JSON.parse(value));
    },
  };
}
