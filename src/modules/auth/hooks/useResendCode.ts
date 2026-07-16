import { useEffect, useRef, useState } from 'react';

const COOLDOWNS = [30, 30, 60];
const LOCKOUT_DURATION = 60 * 60;

export const useResendCode = (
    onResend: () => Promise<any>,
) => {
    const [resendCount, setResendCount] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(
        COOLDOWNS[0],
    );

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const canResend = secondsLeft <= 0;

    useEffect(() => {
        startTimer(COOLDOWNS[0]);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const startTimer = (duration: number) => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        setSecondsLeft(duration);

        timerRef.current = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current!);
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);
    };

    const formatTimer = () => {
        const hours = Math.floor(
            secondsLeft / 3600,
        );

        const minutes = Math.floor(
            (secondsLeft % 3600) / 60,
        );

        const seconds = secondsLeft % 60;

        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(
                2,
                '0',
            )}:${String(seconds).padStart(2, '0')}`;
        }

        if (minutes > 0) {
            return `${minutes}:${String(seconds).padStart(
                2,
                '0',
            )}`;
        }

        return `${seconds}s`;
    };

    const handleResend = async () => {
        if (!canResend) return;

        try {
            await onResend();

            const newCount = resendCount + 1;
            setResendCount(newCount);

            if (newCount >= 3) {
                startTimer(LOCKOUT_DURATION);
                return;
            }

            startTimer(COOLDOWNS[newCount] ?? COOLDOWNS[COOLDOWNS.length - 1]);

        } catch (e: any) {
            if (e?.waitSeconds && e.waitSeconds > 0) {
                startTimer(e.waitSeconds);
            }
        }
    };

    return {
        canResend,
        secondsLeft,
        resendCount,
        formatTimer,
        handleResend,
    };
};