import { StyleSheet } from 'react-native';
import {
  Typography,
  Spacing,
  Shadows,
  Radius,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    riderHeader: {
      alignItems: 'center',
      marginBottom: Spacing.md,
    },

    avatarCircle: {
      width: 84,
      height: 84,
      borderRadius: 42,
      overflow: 'hidden',
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.sm,
      ...Shadows.small,
    },

    avatarImage: {
      width: '95%',
      height: '95%',
      resizeMode: 'cover',
    },

    pinHint: {
      ...Typography.caption,
      color: colors.textSecondary,
      marginBottom: Spacing.xs,
    },

    avatarPlaceholder: {
      width: '80%',
      height: '80%',
      borderRadius: 100,
      backgroundColor: colors.surface,
    },

    riderName: {
      ...Typography.h3,
      color: colors.textPrimary,
      marginBottom: Spacing.xs,
    },

    pinBoxError: {
      borderWidth: 1.5,
      borderColor: colors.error,
    },

    communicationRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 28,
      marginBottom: Spacing.md,
    },

    iconButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },

    pinBoxesRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.sm,
      marginBottom: Spacing.md,
    },

    pinBox: {
      width: 40,
      height: 48,
      borderRadius: Radius.md,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      ...Shadows.small,
    },

    pinBoxText: {
      ...Typography.semiBoldBody,
      color: colors.textPrimary,
    },

    hiddenInput: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1,
    },

    detailsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: Spacing.lg,
    },

    detailsBox: {
      width: '48%',
      borderRadius: 12,
      padding: 12,
      marginBottom: Spacing.sm,
      backgroundColor: colors.surface,
      ...Shadows.small,
    },

    detailsBoxHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Spacing.xs,
    },
    detailsBoxTitle: {
      marginStart: Spacing.xs,
      color: colors.textPrimary,
      ...Typography.boldCaption,
    },
    detailsBoxValue: {
      color: colors.textPrimary,
      ...Typography.semiBoldCaption,
    },

    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: Radius.full,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: Spacing.md,
    },

    secondaryButton: {
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: Radius.full,
      paddingVertical: 10,
      alignItems: 'center',
      marginBottom: Spacing.md,
    },

    secondaryButtonText: { color: colors.primary },

    dangerButton: {
      backgroundColor: colors.error,
      borderRadius: Radius.full,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: Spacing.md,
    },
  });
