import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../core/theme/theme.types';
import {
    Spacing,
    Typography,
    Radius,
} from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        gradientContainer: {
            flex: 1,
        },

        scrollContent: {
            flexGrow: 1,
            paddingBottom: Spacing.xl,
        },

        emptyContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: Spacing.xxl,
            gap: Spacing.md,
        },

        emptyText: {
            ...Typography.body,
            color: colors.primary,
            textAlign: 'center',
        },

        container: {
            borderRadius: Radius.lg,
            padding: 18,
            marginBottom: 16,
            overflow: 'hidden',
        },

        iconWrapper: {
            width: 42,
            height: 42,
            borderRadius: Radius.full,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: Spacing.md,
            position: 'relative',
        },

        unreadDot: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            borderRadius: Radius.full,
            backgroundColor: colors.primary,
            borderWidth: 2,
            borderColor: colors.background,
        },

        title: {
            flex: 1,
            ...Typography.boldBody,
            color: colors.primary,
            marginRight: Spacing.sm,
        },

        titleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        body: {
            ...Typography.caption,
            color: colors.textSecondary,
            lineHeight: 22,
            marginTop: Spacing.sm,
        },

        time: {
            ...Typography.smallCaption,
            color: colors.textMuted,
        },

        divider: {
            height: 1.2,
            backgroundColor: colors.surface,
            marginTop: Spacing.lg,
            marginBottom: Spacing.md,
        },

        actionsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: Spacing.xs,

        },

        actionsRowRead: {
            justifyContent: 'flex-end',
        },

        actionButton: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        actionText: {
            ...Typography.caption,
            marginLeft: Spacing.xs,
        },

        markReadText: {
            color: colors.success,
        },

        deleteText: {
            color: colors.error,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: Spacing.md,
        },
        headerContent: {
            flex: 1,
        },

    });