import { lightColors } from './colors/lightColors';
import { darkColors } from './colors/darkColors';
import { AppTheme } from './theme.types';

export const themes: Record<
  'light' | 'dark',
  Omit<AppTheme, 'mode'>
> = {
  light: {
    colors: lightColors,
  },
  dark: {
    colors: darkColors,
  },
};