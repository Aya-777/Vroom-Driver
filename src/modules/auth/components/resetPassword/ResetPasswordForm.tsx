import React from 'react';
import { Text, View } from 'react-native';
import Input from '../../../../shared/components/Input';
import Button from '../shared/Button'; 
import { useTranslation } from 'react-i18next';


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
        secureTextEntry={true}
      />


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
        secureTextEntry={true}
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