import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { useResendCode } from '../../hooks/useResendCode';

interface Props {
    onResend: () => Promise<any>;
    styles: any;
    t: (key: string) => string;
}

export default function ResendCode({
    onResend,
    styles,
    t,
}: Props) {
    const {
        canResend,
        formatTimer,
        handleResend,
    } = useResendCode(onResend);

    return (
        <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
                {t('haventGot')}
            </Text>

            <TouchableOpacity
                disabled={!canResend}
                onPress={handleResend}
                activeOpacity={0.7}
            >
                <Text
                    style={[
                        styles.resendLink,
                        !canResend &&
                        styles.resendLinkDisabled,
                    ]}
                >
                    {t('resendCode')}
                </Text>
            </TouchableOpacity>

            {!canResend && (
                <Text style={styles.timerText}>
                    {formatTimer()}
                </Text>
            )}
        </View>
    );
}