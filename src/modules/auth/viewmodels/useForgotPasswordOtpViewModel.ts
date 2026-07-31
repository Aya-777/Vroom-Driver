import { useOtpFlow } from '../../../shared/hooks/useOtpFlow';
import { useAuthRepository } from '../repositories/authRepository';
import { parseWaitSecondsError } from '../../../shared/utils/parseWaitSecondsError';

export const useForgotPasswordOtpViewModel = (navigation: any, route: any) => {
    const phoneNumber = route.params?.phoneNumber || '';

    const verifyMutation = useAuthRepository.useForgotPasswordVerifyOtp();
    const resendMutation = useAuthRepository.useForgotPasswordResendOtp();

    const maskedPhoneNumber = phoneNumber ? phoneNumber.replace(/.(?=.{3})/g, '*') : '';

    const otp = useOtpFlow({
        verifyOtp: async (code) => {
            const response = await verifyMutation.mutateAsync({
                phone_number: phoneNumber,
                otp: code,
                expected_role: 'driver',
            });
            const resetToken = response.data?.reset_token;
            navigation.navigate('ResetPassword', { phoneNumber, resetToken });
        },
        onSuccess: () => { },
    });

    const handleResend = async () => {
        try {
            await resendMutation.mutateAsync({ phone_number: phoneNumber });
            otp.resetCode();
        } catch (err: any) {
            const { message, waitSeconds } = parseWaitSecondsError(err);
            otp.setError(message);
            throw { ...err, waitSeconds };
        }
    };

    const handleBack = () => navigation.goBack();

    return {
        ...otp,
        maskedPhoneNumber,
        handleResend,
        handleBack,
    };
};