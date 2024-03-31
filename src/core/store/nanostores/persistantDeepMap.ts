import { type BaseDeepMap, deepMap, onSet } from "nanostores";

export function persistentDeepMap<T extends BaseDeepMap>(name: string, initialValue: T) {
  const store = deepMap(initialValue);
  const localStorageItem = localStorage.getItem(name);
  if (localStorageItem != null) {
    store.set(JSON.parse(localStorageItem));
  }

  onSet(store, ({ newValue }) => {
    localStorage.setItem(name, JSON.stringify(newValue));
  });
  return store;
}
