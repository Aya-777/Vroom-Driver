import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../index';
import { SupportedLanguage } from '../types';
import { STORAGE_KEY } from '../constants';
import { DEFAULT_LANGUAGE } from '../constants';
import RNRestart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';

export class LanguageService {
  static async changeLanguage(language: SupportedLanguage) {
    await AsyncStorage.setItem(STORAGE_KEY, language);

    await i18n.changeLanguage(language);

    const shouldBeRTL = language === 'ar';

    if (I18nManager.isRTL !== shouldBeRTL) {
      I18nManager.allowRTL(shouldBeRTL);
      I18nManager.forceRTL(shouldBeRTL);

      RNRestart.restart();
    }
  }

  static async getSavedLanguage(): Promise<SupportedLanguage | null> {
    const language = await AsyncStorage.getItem(STORAGE_KEY);
    return language as SupportedLanguage | null;
  }

  static getCurrentLanguage() {
    return i18n.language;
  }

  static async initializeLanguage() {
    try {
      const savedLanguage = await this.getSavedLanguage();

      const language = (savedLanguage ??
        RNLocalize.getLocales()[0]?.languageCode ??
        DEFAULT_LANGUAGE) as SupportedLanguage;

      await i18n.changeLanguage(language);

      const isRTL = language === 'ar';
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
      }
    } catch (error) {
      console.log('Failed to load language:', error);

      await i18n.changeLanguage(DEFAULT_LANGUAGE);
    }
  }
}
