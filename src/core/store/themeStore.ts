import { create } from 'zustand';
import { ThemeMode } from '../theme/theme.types';
import { Appearance } from 'react-native';

type ThemeStore = {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const systemMode = (Appearance.getColorScheme() === 'dark' ? 'dark' : 'light') as ThemeMode;

export const useThemeStore = create<ThemeStore>((set, _get) => ({
  mode: systemMode,

  setTheme: (mode) => set({ mode }),

  toggleTheme: () =>
    set((state) => ({
      mode: state.mode === 'light' ? 'dark' : 'light',
    })),
}));