import { useState } from 'react';

type Params = {
    requestOtp: (newPhone: string) => Promise<void>;
    onSuccess: (newPhone: string) => void;
};

export const useChangePhoneRequestViewModel = ({ requestOtp, onSuccess }: Params) => {
    const [newPhone, setNewPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleNext = async () => {
        if (!newPhone || newPhone.length < 10 || !newPhone.startsWith('09')) {
            setError('phoneNumberStart');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await requestOtp(newPhone);
            onSuccess(newPhone);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'CHANGE_PHONE_REQUEST_FAILED');
        } finally {
            setIsLoading(false);
        }
    };

    return { newPhone, setNewPhone, isLoading, error, handleNext };
};