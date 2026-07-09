import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import { Spacing, Typography, Radius } from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        gradientContainer: {
            flex: 1,
        },
        container: {
            flex: 1,
        },
        scrollContent: {
            flexGrow: 1,
            paddingBottom: Spacing.xxl,
        },

        tabsContainer: {
            flexDirection: 'row',
            paddingHorizontal: Spacing.md,
            paddingVertical: Spacing.xxl,
            gap: Spacing.sm,
        },
        tab: {
            paddingHorizontal: Spacing.md,
            paddingVertical: Spacing.xs,
        },
        tabActive: {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
        },
        tabText: {
            ...Typography.caption,
            color: colors.textMuted,
        },
        tabTextActive: {
            ...Typography.boldCaption,
            color: colors.primary,
        },

        emptyContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: Spacing.xxl,
            gap: Spacing.md,
        },
        emptyText: {
            ...Typography.body,
            color: colors.textMuted,
        },

        tabUnderline: {
            height: 1.5,
            width: '100%',
            backgroundColor: colors.surface,
        },
        tabIndicator: {
            height: 3,
            borderRadius: Radius.full,
            position: 'absolute',
            bottom: 0,
        },
    });