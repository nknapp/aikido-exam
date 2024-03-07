import { createEffect, onMount, type Setter, type Signal } from "solid-js";
import { isServer } from "solid-js/web";

export interface SyncToStorageOptions<T> {
  name: string;
  storage?: typeof localStorage;
  serialize?(value: T): string;
  deserialize?(string: string): Parameters<Setter<T>>[0];
}

export function syncToStorage<T>(
  [value, setValue]: Signal<T>,
  { name, storage, serialize = JSON.stringify, deserialize = JSON.parse }: SyncToStorageOptions<T>,
): Signal<T> {
  if (isServer) return [value, setValue];
  const _storage = storage ?? localStorage;
  const item = _storage.getItem(name);
  setTimeout(() => {
    if (item != null) {
      setValue(deserialize(item));
    }
  });

  onMount(() => {
    // trigger reactivity listeners
    createEffect(() => {
      _storage.setItem(name, serialize(value()));
    });
  });

  return [value, setValue];
}
