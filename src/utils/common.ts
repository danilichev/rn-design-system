export const prop =
  <T extends Record<string, unknown>>(key: keyof T) =>
  (obj: T) =>
    obj[key];
