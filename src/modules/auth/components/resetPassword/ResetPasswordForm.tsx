import React from 'react';
import { Text, View } from 'react-native';
import Input from '../../../../shared/components/Input';
import Button from '../shared/Button';
import { useTranslation } from 'react-i18next';
import PasswordIcon from '../../../../assets/svg/common/password.svg';
import VisibilityOnIcon from '../../../../assets/svg/common/visibilityOn.svg';
import VisibilityOffIcon from '../../../../assets/svg/common/visibilityOff.svg';

interface ResetPasswordFormProps {
  styles: any;
  colors: any;
  passwordValue: string;
  confirmPasswordValue: string;
  error: string | null;
  isLoading: boolean;
  onPasswordChange: (text: string) => void;
  onConfirmPasswordChange: (text: string) => void;
  onSubmit: () => void;
}

export default function ResetPasswordForm({
  styles,
  colors,
  passwordValue,
  confirmPasswordValue,
  error,
  isLoading,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}: ResetPasswordFormProps) {
  const { t } = useTranslation(['auth']);

  return (
    <View style={styles.form}>

      <Text style={styles.label}>{t('enterPassword')}</Text>
      <Input
        type="password"
        placeholder={t('enterYourPassword')}
        placeholderTextColor={colors.textMuted}
        value={passwordValue}
        onChangeText={onPasswordChange}
        containerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        renderLeftIcon={() => (
          <PasswordIcon width={20} height={20} fill={colors.primary} />
        )}
        renderRightIcon={(isPasswordVisible) =>
          isPasswordVisible ? (
            <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
          ) : (
            <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
          )
        } />


      <Text style={styles.label}>{t('confirmPassword')}</Text>
      <Input
        type="password"
        placeholder={t('confirmPassword')}
        placeholderTextColor={colors.textMuted}
        value={confirmPasswordValue}
        onChangeText={onConfirmPasswordChange}
        error={error ? t(error) : undefined}
        containerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        renderLeftIcon={() => (
          <PasswordIcon width={20} height={20} fill={colors.primary} />
        )}
        renderRightIcon={(isPasswordVisible) =>
          isPasswordVisible ? (
            <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
          ) : (
            <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
          )
        }
      />


      <Button
        title={t('updatePassword')}
        onPress={onSubmit}
        isLoading={isLoading}
        colors={colors}
      />
    </View>
  );
}