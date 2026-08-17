import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LanguageService } from '../../../core/i18n/services/LanguageService';
import { SupportedLanguage } from '../../../core/i18n/types';
import { performLogout } from '../../../core/store/session';
import { useAuthRepository } from '../../auth/repositories/authRepository';

export function useSettingsViewModel() {
  const { t } = useTranslation('profile');
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [languageOpen, setLanguageOpen] = useState(false);
  const deleteAccountMutation = useAuthRepository.useDeleteAccount();

  useEffect(() => {
    setLanguage(LanguageService.getCurrentLanguage() as SupportedLanguage);
  }, []);

  const selectLanguage = async (next: SupportedLanguage) => {
    setLanguage(next);
    setLanguageOpen(false);
    await LanguageService.changeLanguage(next);
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccountMutation.mutateAsync();
      performLogout();
    } catch {
      Alert.alert(t('deleteFailedTitle'), t('deleteFailedMessage'));
    }
  };

  const confirmDeleteAccount = () => {
    Alert.alert(t('deleteMyAccount'), t('deleteAccountConfirmation'), [
      { text: t('no'), style: 'cancel' },
      { text: t('yes'), style: 'destructive', onPress: handleDeleteAccount },
    ]);
  };

  return {
    language,
    languageOpen,
    setLanguageOpen,
    selectLanguage,
    confirmDeleteAccount,
    isDeleting: deleteAccountMutation.isPending,
  };
}
