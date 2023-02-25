export const ObjectsX = {
  keys: Object.keys as <T>(object: T) => Array<keyof T>,
  entries: Object.entries as <T>(object: T) => Array<[keyof T, T[keyof T]]>,
};
