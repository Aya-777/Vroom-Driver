import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

type Params = {
    length?: number;
    verifyOtp: (code: string) => Promise<void>;
    onSuccess: () => void;
};

export const useOtpFlow = ({ length = 6, verifyOtp, onSuccess }: Params) => {
    const [code, setCode] = useState<string[]>(new Array(length).fill(''));
    const [activeCodeIndex, setActiveCodeIndex] = useState(0);
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleTextChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text.slice(-1);
        setCode(newCode);

        if (text && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
            setActiveCodeIndex(index + 1);
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
            setActiveCodeIndex(index - 1);
        }
    };

    const handleVerifyCode = async () => {
        setError(null);
        const fullCode = code.join('');

        if (fullCode.length < length) {
            setError('incompleteCode');
            return;
        }

        try {
            setIsVerifying(true);
            await verifyOtp(fullCode);
            onSuccess();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'invalidOtp');
        } finally {
            setIsVerifying(false);
        }
    };

    const resetCode = () => {
        setCode(new Array(length).fill(''));
        setActiveCodeIndex(0);
        inputRefs.current[0]?.focus();
    };

    return {
        code,
        activeCodeIndex,
        isVerifying,
        inputRefs,
        error,
        setError,
        handleTextChange,
        handleKeyPress,
        handleVerifyCode,
        resetCode,
        setActiveCodeIndex,
    };
};