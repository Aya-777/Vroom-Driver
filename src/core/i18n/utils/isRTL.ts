import i18n from '../index';

export const isRTL = () => {
  return i18n.resolvedLanguage === 'ar';
};