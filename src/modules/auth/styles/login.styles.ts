import { StyleSheet } from 'react-native';

import {
    Typography,
    Radius,
    Spacing,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        text: {
            ...Typography.caption,
            color: colors.textSecondary,
            alignItems: 'center',

        },

        content: {
            flex: 1,
            alignItems: 'center',
            paddingTop: Spacing.xxl,
        },

        link: {
            marginTop: 20,
            ...Typography.boldCaption,
            color: colors.primary,
            textAlign: 'center',
            textDecorationLine: 'underline',
        },
        top: {
            alignItems: 'center',
            marginBottom: 30,
            marginTop: 40,
        },

        middle: {
            width: '100%',
            alignItems: 'center',
            gap: 12,
        },

        inputBox: {
            width: 280,
            height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 12,
            borderColor: colors.surface,
            borderWidth: 2,
            backgroundColor: colors.backgroundSoft,
        },

        input: {
            flex: 1,
            marginStart: 12,
            ...Typography.body,
            color: colors.textPrimary
        },

        bottom: {
            marginTop: 25,
            alignItems: 'center',
        },

        button: {
            width: 290,
            height: 60,
            borderRadius: Radius.md,
            justifyContent: 'center',
            alignItems: 'center',
        },

        btnText: {
            ...Typography.h3,
            color: colors.backgroundSoft
        },

        wrapper: {
            width: '100%',
            maxWidth: 348,
            aspectRatio: 348 / 520,
            overflow: 'hidden',
        },

        background: {
            ...StyleSheet.absoluteFill,
            backgroundColor: colors.backgroundSoft + '8C'
        },

        flex: {
            flex: 1,
        },
        gradient: { flex: 1 },

        scroll: { flexGrow: 1, width: '100%', minHeight: '100%', alignItems: 'center', paddingTop: 48, paddingBottom: 40 },

        bgCircle: {
            position: 'absolute',
            width: 700,
            height: 900,
            borderRadius: 350,
            left: -280,
            top: -30,
            backgroundColor: colors.surfaceAccent + 'AC',
        },

        title: {
            marginTop: 24,
            marginBottom: 10,
            fontSize: 32,
            fontFamily: 'Lora-Bold',
            color: colors.textMuted + '8C'
        },
    });