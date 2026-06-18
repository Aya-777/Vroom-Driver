// export type ThemeMode = 'light' | 'dark';

// export type Theme = {
//   mode: ThemeMode;
//   colors: Record<string, string>;
// };
// theme.types.ts
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  backgroundSoft: string;

  surface: string;
  surfaceAccent: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  primary: string;
  border: string;
  neutral: string;
}

export interface AppTheme {
  mode: ThemeMode;
  colors: ThemeColors;
}