import { useState } from 'react';
import { useAuthRepository } from '../repositories/authRepository';

export const useResetPasswordViewModel = (navigation: any, route: any) => {

    const phoneNumber = route.params?.phoneNumber || '';
    const resetToken = route.params?.resetToken || '';

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const resetPasswordMutation = useAuthRepository.useResetPassword();

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (error) setError(null);
    };

    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text);
        if (error) setError(null);
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const handleUpdatePassword = () => {

        if (!password || !confirmPassword) {
            setError('pleaseFillAllFields');
            return;
        }

        if (password !== confirmPassword) {
            setError('passwordsDoNotMatch');
            return;
        }

        if (password.length < 6) {
            setError('passwordTooShort');
            return;
        }

        resetPasswordMutation.mutate(
            {
                phone_number: phoneNumber,
                expected_role: 'driver',
                reset_token: resetToken,
                new_password: password,
                confirm_password: confirmPassword,
            },
            {
                onSuccess: () => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                },
                onError: (err: any) => {
                    setError(err.response?.data?.message || 'somethingWentWrong');
                },
            }
        );
    };

    return {
        password,
        confirmPassword,
        error,
        isLoading: resetPasswordMutation.isPending,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleUpdatePassword,
        handleBack,
    };
};