import { useState } from 'react';

export const useResetPasswordViewModel = (navigation: any) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleUpdatePassword = async () => {

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

        try {
            setIsLoading(true);
            setError(null);

            await new Promise<void>((resolve) => {
                setTimeout(() => resolve(), 1500);
            });
            navigation.navigate('HomeScreen');

        } catch (err: any) {
            setError(err?.message || 'somethingWentWrong');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        password,
        confirmPassword,
        error,
        isLoading,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleUpdatePassword,
        handleBack,
    };
};