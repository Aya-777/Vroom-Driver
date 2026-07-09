import { storageAdapter } from './storage.adapter';

export const storageService = {

  async set(key: string, value: unknown) {
    await storageAdapter.setItem(
      key,
      JSON.stringify(value),
    );
  },

  async get<T>(key: string): Promise<T | null> {

    const value = await storageAdapter.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  },

  async remove(key: string) {
    await storageAdapter.removeItem(key);
  },

  async clear() {
    await storageAdapter.clear();
  },
};