export function Storage(namespace?: string, storage: Storage = localStorage) {
  const keyPrefix = namespace !== undefined ? `${namespace}_` : "";
  return <T extends { new (...args: any[]): {} }>(constructor: T) => class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const entries = Object.entries(this as unknown as object);
      entries.forEach((entry) => {
        const [key, val] = entry;
        Object.defineProperty(this, key, {
          get() {
            const storagedValue = storage.getItem(`${keyPrefix}${key}`);
            return storagedValue !== null ? JSON.parse(storagedValue) : undefined;
          },
          set(v) {
            if (v === undefined) {
              storage.removeItem(`${keyPrefix}${key}`);
            } else {
              storage.setItem(`${keyPrefix}${key}`, JSON.stringify(v));
            }
          },
        });
        const storagedValue = this[key as keyof this];
        if (storagedValue === undefined && val !== undefined) {
          this[key as keyof this] = val;
        }
      });
    }
  };
}
