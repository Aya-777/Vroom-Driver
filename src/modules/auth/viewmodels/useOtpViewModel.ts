import { useState, useRef, useEffect } from 'react';
import { TextInput } from 'react-native';
import { useAuthRepository } from '../repositories/authRepository';
import { useAuthActions } from '../../../core/store/authStore';
import { VerifyOtpResponseDTO } from '../services/dto/auth.dto';

export const useOtpViewModel = (navigation: any, route: any) => {

    const phoneNumber = route.params?.phoneNumber || '';

    const [code, setCode] = useState<string[]>(new Array(6).fill(''));
    const [activeCodeIndex, setActiveCodeIndex] = useState<number>(0);
    const [uiError, setUiError] = useState<string | null>(null);

    const inputRefs = useRef<TextInput[]>([]);

    const verifyOtpMutation = useAuthRepository.useVerifyOtp();
    const resendOtpMutation = useAuthRepository.useResendOtp();
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
            setUiError('Please enter the complete 6-digit verification code.');
            return;
        }

        verifyOtpMutation.mutate(
            { phone_number: phoneNumber, otp: fullCode },
            {
                onSuccess: (response: VerifyOtpResponseDTO) => {
                    login(response.data.access);
                },
                onError: (err: any) => {
                    setUiError(err.response?.data?.message || 'Invalid OTP');
                },
            }
        );
    };

    const handleResendCode = () => {
        setUiError(null);
        resendOtpMutation.mutate(
            { phone_number: phoneNumber },
            {
                onSuccess: () => {
                    setCode(new Array(6).fill(''));
                    setActiveCodeIndex(0);
                    inputRefs.current[0]?.focus();
                },
                onError: (err: any) => {
                    setUiError(err.response?.data?.message || 'Try Again Later');
                },
            }
        );
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return {
        code,
        activeCodeIndex,
        isLoading: verifyOtpMutation.isPending || resendOtpMutation.isPending,
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