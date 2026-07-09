import { StyleSheet } from 'react-native';

import {
    Typography,
    Radius,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        signupWrapper: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 520,
        },

        pinShape: {
            position: 'absolute',
            top: 30,
            left: 25,
        },

        signupContent: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 24,
        },

        container: {
            flex: 1,
        },

        text: {
            ...Typography.caption,
        },

        link: {
            ...Typography.boldCaption,
        },
        top: {
            alignItems: 'center',
            marginBottom: 30,
        },

        middle: {
            width: '100%',
            alignItems: 'center',
            gap: 3,
        },

        inputBox: {
            width: '85%',
        },

        input: {
            flex: 1,
            marginStart: 12,
            ...Typography.caption,
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
        },
        wrapper: {
            width: '90%',
            maxWidth: 348,
            aspectRatio: 348 / 520,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        },

        background: {
            ...StyleSheet.absoluteFill,
        },

        flex: {
            flex: 1,
        },
        gradient: { flex: 1 },

        scroll: {
            flexGrow: 1,
            width: '100%',
            minHeight: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 24,
        },

        title: {
            marginTop: -30,
            marginBottom: 25,
            fontSize: 32,
            fontFamily: 'Lora-Bold',
            color: colors.textMuted,
        },

        row: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: 290,
            gap : 3
        },

        halfInput: {
            width: '52%',
        },

        halfInputText: {
            flex: 1,
            marginStart: 0,
            ...Typography.caption,
        },

        footerContainer: {
            alignItems: 'center',
            marginTop: 28,
        },

        footerText: {
            ...Typography.caption,
        },

        footerLink: {
            ...Typography.boldCaption,
            textDecorationLine: 'underline',
        },

        linksRow: {
            flexDirection: 'row',
            marginTop: 4,
        },

        logoWrapper: {
            position: 'relative',
            alignSelf: 'center',
        },

        cameraButton: {
            position: 'absolute',
            right: -2,
            bottom: 10,
        },

        cameraCircle: {
            width: 32,
            height: 32,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: colors.primary,
            backgroundColor: colors.surface,
        },
        glowWrapper: {
            position: 'absolute',
            width: 348,
            height: 600,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scale: 1.2 }, { translateX: 10 }],
            opacity: 0.60,
        },

        pinWrapper: {
            position: 'absolute',
            width: 348,
            height: 520,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ scale: 1.1 }],
        },

        viewpinCanva: {
            flex: 1,
            width: '100%',
            height: '100%'
        },

        pinCanva: {
            flex: 1,
            width: '100%',
            height: '100%'
        },

        viewglowCanva: {
            flex: 1,
            width: '100%',
            height: '100%'
        },

        glowCanva: {
            flex: 1,
            width: '100%',
            height: '100%'
        },

        pinContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1,
        },
    });