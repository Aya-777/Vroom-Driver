import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import {
    Radius,
    Spacing,
    Typography,
} from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({

        container: {
            flex: 1,
        },

        sheetContent: {
            flex: 1,
            paddingHorizontal: 20,
        },

        title: {
            ...Typography.h2,
            color: colors.primary,
            marginBottom: Spacing.xl,
            textAlign: 'center',
        },

        scrollContent: {
            paddingBottom: Spacing.xxl,
        },

        sectionTitle: {
            ...Typography.boldBody,
            color: colors.primary,
            marginTop: Spacing.xl,
            marginBottom: Spacing.sm,
        },

        location: {
            ...Typography.body,
            color: colors.textSecondary,
            marginBottom: Spacing.md,
            lineHeight: 22,
        },

        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: Spacing.sm,
            borderBottomWidth: 1,
            borderBottomColor: colors.surface,
        },

        label: {
            ...Typography.body,
            color: colors.textSecondary,
        },

        value: {
            ...Typography.boldBody,
            color: colors.primary,
        },

        footer: {
            flexDirection: 'row',
            gap: 12,
            paddingVertical: 16,
        },

        reviewButton: {
            flex: 1,
            backgroundColor: colors.surface,
            borderRadius: Radius.lg,
            paddingVertical: Spacing.md,
            alignItems: 'center',
        },

        reviewText: {
            ...Typography.boldBody,
            color: colors.primary,
        },

        rerideButton: {
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: Radius.lg,
            paddingVertical: Spacing.md,
            alignItems: 'center',
        },

        rerideText: {
            ...Typography.boldBody,
            color: colors.background,
        },

        handleIndicatorStyle: {
            backgroundColor: colors.textMuted,
            width: 50,
        },

        sheetBackground: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
        },

        sheetClip: {
            flex: 1,
            overflow: 'hidden',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            paddingHorizontal: 20,
        },
    });