import { useOtpFlow } from '../../../shared/hooks/useOtpFlow';
import { useAuthRepository } from '../repositories/authRepository';
import { useAuthActions } from '../../../core/store/authStore';
import { setCurrentUser } from '../../../core/store/userStore';
import { parseWaitSecondsError } from '../../../shared/utils/parseWaitSecondsError';

export const useActivateAccountOtpViewModel = (navigation: any, route: any) => {
    const phoneNumber = route.params?.phoneNumber || '';
    const { login } = useAuthActions();

    const verifyMutation = useAuthRepository.useVerifyActivateAccountOtp();
    const resendMutation = useAuthRepository.useResendActivateAccountOtp();

    const maskedPhoneNumber = phoneNumber ? phoneNumber.replace(/.(?=.{3})/g, '*') : '';

    const otp = useOtpFlow({
        verifyOtp: async (code) => {
            const response = await verifyMutation.mutateAsync({ phone_number: phoneNumber, otp: code });
            login(response.data.access, response.data.refresh);
            setCurrentUser(response.data.user);
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