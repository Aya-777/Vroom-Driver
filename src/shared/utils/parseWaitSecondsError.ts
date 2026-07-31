export const parseWaitSecondsError = (err: any, fallbackKey = 'tryAgain') => {
    const message =
        err?.response?.data?.errors?.phone_number?.[0] ||
        err?.response?.data?.message ||
        fallbackKey;

    const secondsMatch = typeof message === 'string' ? message.match(/(\d+)\s*seconds?/i) : null;
    const hoursMatch = typeof message === 'string' ? message.match(/(\d+)h/i) : null;
    const minutesMatch = typeof message === 'string' ? message.match(/(\d+)m/i) : null;

    let waitSeconds = 0;
    if (secondsMatch) {
        waitSeconds = parseInt(secondsMatch[1], 10);
    } else if (hoursMatch || minutesMatch) {
        const h = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
        const m = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
        waitSeconds = h * 3600 + m * 60;
    }

    return { message, waitSeconds };
};