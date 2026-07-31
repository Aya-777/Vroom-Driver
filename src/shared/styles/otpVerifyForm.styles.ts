import { StyleSheet } from 'react-native';
import { Spacing, Radius, Typography, Shadows } from '../../core/theme/tokens';
import { ThemeColors } from '../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        content: {
            flex: 1,
            paddingHorizontal: Spacing.xl,
            alignItems: 'center',
            paddingTop: Spacing.xxl
        },
        title: {
            ...Typography.h3,
            color: colors.primary,
            alignSelf: 'flex-start',
            marginBottom: Spacing.smm
        },
        description: {
            ...Typography.body,
            color: colors.textSecondary,
            textAlign: 'left',
            alignSelf: 'flex-start',
            lineHeight: 26,
            marginBottom: Spacing.xxl,
        },
        target: {
            fontWeight: 'bold',
            color: colors.primary
        },
        otpContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: Spacing.xl,
            paddingHorizontal: Spacing.xs,
        },
        otpInput: {
            width: 48,
            height: 54,
            backgroundColor: colors.backgroundSoft,
            borderRadius: Radius.md,
            borderWidth: 2,
            borderColor: colors.surface,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primary,
            ...Shadows.medium,
        },
        otpInputActive: {
            borderColor: colors.primary
        },
        verifyButtonWrapper: {
            width: '100%'
        },
        verifyButton: {
            width: '100%',
            height: 54,
            borderRadius: Radius.md,
            justifyContent: 'center',
            alignItems: 'center',
        },
        verifyButtonText: {
            ...Typography.h3,
            color: colors.backgroundSoft
        },
        resendContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Spacing.xl
        },
        resendText: {
            marginTop: 5,
            ...Typography.caption,
            color: colors.textSecondary
        },
        resendLink: {
            ...Typography.boldCaption,
            color: colors.primary,
            textAlign: 'center',
            textDecorationLine: 'underline'
        },
        resendLinkDisabled: {
            marginLeft: 5,
            opacity: 0.5
        },
        timerText: {
            marginTop: 5,
            marginLeft: 5,
            textAlign: 'center',
            fontSize: 13,
            color: colors.textSecondary
        },
        errorText: {
            textAlign: 'center',
            marginVertical: 8,
            fontSize: 14,
            color: 'red'
        },
    });