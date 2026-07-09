export const SUPPORTED_LANGUAGES = [
  'en',
  'ar',
] as const;

export type SupportedLanguage =
  typeof SUPPORTED_LANGUAGES[number];