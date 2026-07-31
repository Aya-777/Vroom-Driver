import { useState } from 'react';

type ChangePasswordInput = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};

type Params = {
    onSubmit: (input: ChangePasswordInput) => Promise<void>;
    onSuccess: () => void;
};

export const useChangePasswordViewModel = ({ onSubmit, onSuccess }: Params) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const withClear = (setter: (v: string) => void) => (text: string) => {
        setter(text);
        if (error) setError(null);
    };

    const handleOldPasswordChange = withClear(setOldPassword);
    const handleNewPasswordChange = withClear(setNewPassword);
    const handleConfirmPasswordChange = withClear(setConfirmPassword);

    const handleSubmit = async () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            setError('pleaseFillAllFields');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('passwordsDoNotMatch');
            return;
        }
        if (newPassword.length < 8) {
            setError('passwordLength');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await onSubmit({ oldPassword, newPassword, confirmPassword });
            onSuccess();
        } catch (err: any) {
            const backendMessage =
                err?.response?.data?.errors?.old_password?.[0] ||
                err?.response?.data?.message ||
                (err instanceof Error ? err.message : 'somethingWentWrong');
            setError(backendMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        oldPassword,
        newPassword,
        confirmPassword,
        error,
        isLoading,
        handleOldPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
    };
};