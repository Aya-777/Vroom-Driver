import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../../core/theme/theme.types';
import {
    Radius,
    Spacing,
    Typography,
} from '../../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            padding: Spacing.lg,
            borderRadius: Radius.lg,
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            marginBottom: Spacing.md,
        },

        rideType: {
            ...Typography.boldBody,
            color: colors.primary,
        },

        fare: {
            ...Typography.boldBody,
            color: colors.primary,
        },

        locations: {
            gap: Spacing.sm,
            marginBottom: Spacing.md,
        },

        locationRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        locationText: {
            flex: 1,

            ...Typography.body,
            color: colors.primary,

            marginLeft: Spacing.sm,
        },

        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        footerLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: Spacing.sm,
        },

        deleteButton: {
            padding: Spacing.xs,
        },

        date: {
            ...Typography.caption,
            paddingHorizontal: Spacing.sm,
            color: colors.textMuted,
        },

        distance: {
            ...Typography.caption,
            color: colors.textMuted,
        },
    });