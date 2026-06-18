import React from 'react';
import { Text, View } from 'react-native';
import LinearBg from '../../../shared/components/LinearBg';
import Header from '../../../shared/components/SubHeader';
import Input from '../../../shared/components/Input';
import { useTheme } from '../../../core/theme/useTheme';
import { useForgotPasswordViewModel } from '../viewmodels/useForgotPasswordViewModel';
import { createStyles } from '../styles/forgotPassword.styles';
import { AuthStackScreenProps } from '../../../navigation/auth/authTypes';
import Button from '../components/shared/Button';
import { useTranslation } from 'react-i18next'

export default function ForgotPasswordScreen({ navigation }: AuthStackScreenProps<'ForgotPassword'>) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { t } = useTranslation(['auth']);

  const {
    phoneNumber,
    error,
    isLoading,
    handlePhoneChange,
    handleResetPassword,
    handleBack,
  } = useForgotPasswordViewModel(navigation);

  return (
    <LinearBg style={styles.container}
      colors={[colors.backgroundSoft, colors.background]}
    >

      <Header
        title={t('forgotPassword')}
        onBackPress={handleBack}
      />

      <View style={styles.content}>
        <Text style={styles.description}>
          {t('pleaseEnterPhone')}
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>{t('phoneNumber')}</Text>

          <Input
            type="phone"
            placeholder={t('enterPhoneNumber')}
            placeholderTextColor={colors.textMuted}
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            error={error ? t(error) : undefined}
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />

          <Button
            title={t('resetPassword')}
            onPress={handleResetPassword}
            isLoading={isLoading}
            colors={colors}
          />
        </View>
      </View>
    </LinearBg>
  );
}