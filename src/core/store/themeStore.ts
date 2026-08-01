import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Appearance } from 'react-native';
import { storageAdapter } from '../../core/storage/storage.adapter';
import { ThemeMode } from '../theme/theme.types';

interface ThemeState {
  mode: ThemeMode;
  hasHydrated: boolean;
  actions: {
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
    setHasHydrated: (value: boolean) => void;
  };
}

const useThemeStoreInner = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: (Appearance.getColorScheme() ?? 'light') as ThemeMode,
      hasHydrated: false,
      actions: {
        setMode: (mode) => set({ mode }),
        toggleMode: () =>
          set({ mode: get().mode === 'dark' ? 'light' : 'dark' }),
        setHasHydrated: (value) => set({ hasHydrated: value }),
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => ({
        getItem: storageAdapter.getItem,
        setItem: storageAdapter.setItem,
        removeItem: storageAdapter.removeItem,
      })),
      partialize: (state) => ({ mode: state.mode }),
      onRehydrateStorage: () => (state) => {
        state?.actions.setHasHydrated(true);
      },
    }
  )
);

export const useThemeStore = useThemeStoreInner;

export const useThemeMode = () => useThemeStoreInner((s) => s.mode);
export const useThemeActions = () => useThemeStoreInner((s) => s.actions);
export const useThemeHasHydrated = () => useThemeStoreInner((s) => s.hasHydrated);