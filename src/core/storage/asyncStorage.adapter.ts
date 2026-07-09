import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageAdapter } from './storage.types';

export const asyncStorageAdapter: StorageAdapter = {

  async setItem(key, value) {
    await AsyncStorage.setItem(key, value);
  },

  async getItem(key) {
    return AsyncStorage.getItem(key);
  },

  async removeItem(key) {
    await AsyncStorage.removeItem(key);
  },

  async clear() {
    await AsyncStorage.clear();
  },
};