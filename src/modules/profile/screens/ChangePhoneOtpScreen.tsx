import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import OtpVerifyForm from '../../../shared/components/OtpVerifyForm';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../../../shared/styles/otpVerifyForm.styles';
import { useOtpFlow } from '../../../shared/hooks/useOtpFlow';
import { profileRepository } from '../repositories/profileRepository';
import { ProfileStackParamList } from '../../../navigation/main/profile/profileTypes';

export default function ChangePhoneOtpScreen() {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<ProfileStackParamList, 'ChangePhoneOtp'>>();
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['profile', 'common']);

    const { newPhone } = route.params;

    const vm = useOtpFlow({
        verifyOtp: profileRepository.verifyPhoneChange,
        onSuccess: () => navigation.navigate('ProfileHome'),
    });

    const handleResend = async () => {
        await profileRepository.resendPhoneChange();
        vm.resetCode();
    };

    return (
        <LinearBg style={styles.container} colors={[colors.backgroundSoft, colors.background]}>
            <SubHeader title={t('verifyNewNumber')} onBackPress={() => navigation.goBack()} />

            <OtpVerifyForm
                titleLabel={t('checkYourMessages')}
                descriptionLabel={t('otpSentTo')}
                targetLabel={newPhone}
                verifyLabel={t('common:verify')}
                loadingLabel={t('common:loading')}
                haventGotLabel={t('haventGot')}
                resendCodeLabel={t('common:resendCode')}
                code={vm.code}
                activeCodeIndex={vm.activeCodeIndex}
                inputRefs={vm.inputRefs}
                handleTextChange={vm.handleTextChange}
                handleKeyPress={vm.handleKeyPress}
                setActiveCodeIndex={vm.setActiveCodeIndex}
                onVerify={vm.handleVerifyCode}
                onResend={handleResend}
                isVerifying={vm.isVerifying}
                error={vm.error ? t(`common:${vm.error}`, { defaultValue: vm.error }) : undefined}
            />
        </LinearBg>
    );
}