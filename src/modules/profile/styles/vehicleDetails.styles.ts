import { StyleSheet, Dimensions } from 'react-native';
import { Radius, Spacing, Shadows, Typography } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

const { width } = Dimensions.get('window');

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        scrollContent: {
            padding: Spacing.md,
        },

        imageWrapper: {
            width: width - Spacing.md * 2,
            height: 220,
            borderRadius: Radius.md,
            overflow: 'hidden',
            alignSelf: 'center',
        },

        image: {
            width,
            height: 220
        },

        imageLabel: {
            textAlign: 'center',
            color: colors.textSecondary,
            marginTop: Spacing.xs,
            ...Typography.caption,
        },

        vehicleName: {
            color: colors.textPrimary,
            marginTop: Spacing.mmd,
            marginBottom: Spacing.smm,
            ...Typography.h2,
        },

        vehicleInfoCard: {
            backgroundColor: colors.primary + '40',
            borderRadius: Radius.md,
            borderWidth: 1,
            borderColor: colors.primary,
            padding: Spacing.mmd,
            marginBottom: Spacing.smm,
            ...Shadows.small,
        },

        infoLabel: {
            color: colors.textPrimary,
            textTransform: 'uppercase',
            marginBottom: 4,
            ...Typography.caption,
        },

        infoValue: {
            color: colors.textSecondary,
            ...Typography.boldBody,
        },
    });