import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../index';
import { SupportedLanguage } from '../types';
import { STORAGE_KEY } from '../constants';
import { DEFAULT_LANGUAGE } from '../constants';
import * as RNLocalize from 'react-native-localize';
import { I18nManager, NativeModules, Platform } from 'react-native';


export class LanguageService {
  static async changeLanguage(
    language: SupportedLanguage,
  ) {
    await i18n.changeLanguage(language);

    await AsyncStorage.setItem(
      STORAGE_KEY,
      language,
    );

    const isRTL = language === 'ar'; // Adjust based on your Arabic locale code
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);
      
      // IMPORTANT: Trigger a restart so the app layout flips
      if (Platform.OS === 'ios') {
        NativeModules.DevSettings.reload();
      } else {
        // For Android/Production, you may need a custom restart module
        // or standard RN reload if in development
        NativeModules.DevSettings.reload(); 
      }
    }
  }

  static async getSavedLanguage(): Promise<SupportedLanguage | null> {
    const language = await AsyncStorage.getItem(
      STORAGE_KEY,
    );
    return language as SupportedLanguage | null;
  }

  static getCurrentLanguage() {
    return i18n.language;
  }

  static async initializeLanguage() {
    try {
      const savedLanguage =
        await this.getSavedLanguage();

      const language =
        (savedLanguage ?? RNLocalize.getLocales()[0]?.languageCode ?? DEFAULT_LANGUAGE) as SupportedLanguage;

      await i18n.changeLanguage(
        language,
      );

      const isRTL = language === 'ar';
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
        // Note: If you call this before the app fully mounts, 
        // you might not need a reload here.
      }
    } catch (error) {
      console.log(
        'Failed to load language:',
        error,
      );

      await i18n.changeLanguage(
        DEFAULT_LANGUAGE,
      );
    }
  }
}