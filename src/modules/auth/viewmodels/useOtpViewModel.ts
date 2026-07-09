import { useState, useRef, useEffect } from 'react';
import { TextInput } from 'react-native';
import { useAuthRepository } from '../repositories/authRepository';
import { useAuthActions } from '../../../core/store/authStore';

export const useOtpViewModel = (navigation: any, route: any) => {

    const phoneNumber = route.params?.phoneNumber || '';
    const flowType = route.params?.type || 'signup';

    const [code, setCode] = useState<string[]>(new Array(6).fill(''));
    const [activeCodeIndex, setActiveCodeIndex] = useState<number>(0);
    const [uiError, setUiError] = useState<string | null>(null);

    const inputRefs = useRef<TextInput[]>([]);

    const signupVerifyMutation = useAuthRepository.useVerifyOtp();
    const forgotVerifyMutation = useAuthRepository.useForgotPasswordVerifyOtp();
    const resendOtpMutation = useAuthRepository.useResendOtp();
    const forgotResendOtpMutation = useAuthRepository.useForgotPasswordResendOtp();

    const { login } = useAuthActions();

    const maskedPhoneNumber = phoneNumber
        ? phoneNumber.replace(/.(?=.{3})/g, '*')
        : '';

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleTextChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text.slice(-1);
        setCode(newCode);

        if (text) {
            if (index < 5) {
                inputRefs.current[index + 1]?.focus();
                setActiveCodeIndex(index + 1);
            }
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
            setActiveCodeIndex(index - 1);
        }
    };

    const handleVerifyCode = () => {
        setUiError(null);
        const fullCode = code.join('');

        if (fullCode.length < 6) {
            setUiError('incompleteCode');
            return;
        }

        if (flowType === 'forgot_password') {
            forgotVerifyMutation.mutate(
                {
                    phone_number: phoneNumber,
                    otp: fullCode,
                    expected_role: 'driver'
                },
                {
                    onSuccess: (response) => {
                        const resetToken = response.data?.reset_token;
                        navigation.navigate('ResetPassword', {
                            phoneNumber,
                            resetToken
                        });
                    },
                    onError: (err: any) => {
                        setUiError(err.response?.data?.message || 'invalidOtp');
                    },
                }
            );
        } else {
            signupVerifyMutation.mutate(
                { phone_number: phoneNumber, otp: fullCode },
                {
                    onSuccess: (response) => {
                        login(response.data.access);
                    },
                    onError: (err: any) => {
                        setUiError(err.response?.data?.message || 'Invalid OTP');
                    },
                }
            );
        }
    };

    const handleResendCode = async () => {
        setUiError(null);

        try {
            let response;
            if (flowType === 'forgot_password') {
                response = await forgotResendOtpMutation.mutateAsync({ phone_number: phoneNumber });
            } else {
                response = await resendOtpMutation.mutateAsync({ phone_number: phoneNumber });
            }
            setCode(new Array(6).fill(''));
            setActiveCodeIndex(0);
            inputRefs.current[0]?.focus();
            return response;

        } catch (err: any) {
            const message =
                err.response?.data?.errors?.phone_number?.[0] ||
                err.response?.data?.message ||
                'tryAgain';

            setUiError(message);

            const secondsMatch = message.match(/(\d+)\s*seconds?/i);
            const hoursMatch = message.match(/(\d+)h/i);
            const minutesMatch = message.match(/(\d+)m/i);

            let waitSeconds = 0;
            if (secondsMatch) {
                waitSeconds = parseInt(secondsMatch[1], 10);
            } else if (hoursMatch || minutesMatch) {
                const h = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
                const m = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
                waitSeconds = h * 3600 + m * 60;
            }

            throw { ...err, waitSeconds };
        }
    };
    const handleBack = () => {
        navigation.goBack();
    };

    return {
        code,
        activeCodeIndex,
        isLoading: signupVerifyMutation.isPending || forgotVerifyMutation.isPending || resendOtpMutation.isPending,
        inputRefs,
        maskedPhoneNumber,
        error: uiError,
        handleTextChange,
        handleKeyPress,
        handleVerifyCode,
        handleResendCode,
        handleBack,
        setActiveCodeIndex,
    };
};