import React from 'react';
import { themes } from './themes';
import { useThemeStore } from '../store/themeStore';
import { AppTheme } from './theme.types';

export const ThemeContext =
  React.createContext<AppTheme | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  
  const mode = useThemeStore((state) => state.mode);

  const theme = themes[mode];

  return (
    <ThemeContext.Provider value={{ ...theme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};