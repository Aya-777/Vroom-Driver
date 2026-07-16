import React from 'react';
import { Text, View } from 'react-native';
import LinearBg from '../../../shared/components/LinearBg';
import Header from '../../../shared/components/SubHeader';
import Button from '../components/shared/Button';
import { useTheme } from '../../../core/theme/useTheme';
import { useOtpViewModel } from '../viewmodels/useOtpViewModel';
import { createStyles } from '../styles/OtpScreen.styles';
import { AuthStackScreenProps } from '../../../navigation/auth/authTypes';
import OtpInputFields from '../components/OTP/OtpInputFields';
import { useTranslation } from 'react-i18next';
import ResendCode from '../components/OTP/ResendCode';

export default function OtpScreen({ navigation, route }: AuthStackScreenProps<'Otp'>) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  const {
    code,
    activeCodeIndex,
    isLoading,
    inputRefs,
    maskedPhoneNumber,
    error,
    handleTextChange,
    handleKeyPress,
    handleVerifyCode,
    handleResendCode,
    handleBack,
    setActiveCodeIndex,
  } = useOtpViewModel(navigation, route);

  return (
    <LinearBg style={styles.container} colors={[colors.backgroundSoft, colors.background]}>
      <Header title={t('verifyNumber')} onBackPress={handleBack} />

      <View style={styles.content}>
        <Text style={styles.title}>{t('checkYourMessages')}</Text>

        <Text style={styles.description}>
          {t('weSentLink')} <Text style={styles.phoneNumber}>{maskedPhoneNumber}</Text> {t('6Digits')}
        </Text>

        <OtpInputFields
          code={code}
          activeCodeIndex={activeCodeIndex}
          inputRefs={inputRefs}
          handleTextChange={handleTextChange}
          handleKeyPress={handleKeyPress}
          setActiveCodeIndex={setActiveCodeIndex}
          styles={styles}
        />

        <Button
          title="Verify Code"
          onPress={handleVerifyCode}
          isLoading={isLoading}
          colors={colors}
        />

        <ResendCode
          onResend={handleResendCode}
          styles={styles}
          t={t}
        />

        {error && (
          <Text style={styles.errorText}>
            {error === 'tryAgain' || error === 'incompleteCode' || error === 'invalidOtp'
              ? t(error)
              : error}
          </Text>
        )}
        
      </View>
    </LinearBg>
  );
}