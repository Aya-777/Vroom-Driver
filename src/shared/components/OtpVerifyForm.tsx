import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator, TextInput } from 'react-native';
import OtpInputFields from './OtpInputFields';
import ResendCode from './ResendCode';
import LinearBg from './LinearBg';
import { useTheme } from '../../core/theme/useTheme';
import { createStyles } from '../styles/otpVerifyForm.styles';

type Props = {
    titleLabel: string;
    descriptionLabel: string;
    targetLabel: string;
    descriptionSuffixLabel?: string; 
    verifyLabel: string;
    loadingLabel: string;
    haventGotLabel: string;
    resendCodeLabel: string;
    code: string[];
    activeCodeIndex: number;
    inputRefs: React.MutableRefObject<TextInput[]>;
    handleTextChange: (text: string, index: number) => void;
    handleKeyPress: (e: any, index: number) => void;
    setActiveCodeIndex: (index: number) => void;
    onVerify: () => void;
    onResend: () => Promise<any>;
    isVerifying: boolean;
    error?: string;
};

export default function OtpVerifyForm({
    titleLabel,
    descriptionLabel,
    targetLabel,
    descriptionSuffixLabel,
    loadingLabel, 
    verifyLabel,
    haventGotLabel,
    resendCodeLabel,
    code,
    activeCodeIndex,
    inputRefs,
    handleTextChange,
    handleKeyPress,
    setActiveCodeIndex,
    onVerify,
    onResend,
    isVerifying,
    error,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.content}>
            <Text style={styles.title}>{titleLabel}</Text>

            <Text style={styles.description}>
                {descriptionLabel} <Text style={styles.target}>{targetLabel}</Text>
                {descriptionSuffixLabel ? ` ${descriptionSuffixLabel}` : ''}
            </Text>

            <OtpInputFields
                code={code}
                activeCodeIndex={activeCodeIndex}
                inputRefs={inputRefs}
                handleTextChange={handleTextChange}
                handleKeyPress={handleKeyPress}
                setActiveCodeIndex={setActiveCodeIndex}
                styles={styles}
            />

            <TouchableOpacity onPress={onVerify} disabled={isVerifying} style={styles.verifyButtonWrapper}>
                <LinearBg style={styles.verifyButton} colors={[colors.textPrimary, colors.surface]}>
                    {isVerifying ? (
                        <ActivityIndicator color={colors.backgroundSoft} />
                    ) : (
                        <Text style={styles.verifyButtonText}>{verifyLabel}</Text>
                    )}
                </LinearBg>
            </TouchableOpacity>

            <ResendCode
                onResend={onResend}
                styles={styles}
                haventGotLabel={haventGotLabel}
                resendCodeLabel={resendCodeLabel}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}