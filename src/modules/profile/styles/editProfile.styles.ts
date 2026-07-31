import { StyleSheet } from 'react-native';
import { Typography, Radius } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        error: {
            color: 'red',
            textAlign: 'center',
            marginBottom: 10,
        },

        scrollContent: {
            flexGrow: 1,
            alignItems: 'center',
            paddingBottom: 120,
        },

        fieldLabel: {
            ...Typography.body,
            color: colors.primary,
            alignSelf: 'center',
            width: '80%',
        },

        top: {
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 30,
        },

        avatarWrapper: {
            position: 'relative',
        },

        avatarCircle: {
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: colors.primary + '20',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },

        avatarImage: {
            width: '100%',
            height: '100%',
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
        avatarPlaceholderInPin: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 26,
        },

        cameraBadge: {
            position: 'absolute',
            right: -1,
            bottom: 10,
        },

        middle: {
            width: '100%',
            alignItems: 'center',
            gap: 12,
        },

        inputBox: {
            width: '80%',
        },

        input: {
            flex: 1,
            marginStart: 12,
            ...Typography.body,
            color: colors.textSecondary,
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
            color: colors.backgroundSoft,
        },
        phoneRow: {
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            paddingHorizontal: 16,
            borderRadius: Radius.md,
            backgroundColor: colors.surface,
        },
        phoneLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        phoneLabel: {
            ...Typography.caption,
            color: colors.textMuted,
            marginBottom: 2,
        },
        phoneValue: {
            ...Typography.boldBody,
            color: colors.textPrimary,
        },
        avatarCircleInside: {
            width: 74,
            height: 74,
            borderRadius: 37,
            overflow: 'hidden',
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: colors.backgroundSoft,
        },

        avatarPlaceholder: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });