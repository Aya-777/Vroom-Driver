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
    pinInputBox: {
      height: 54,
      backgroundColor: colors.backgroundSoft,
      borderRadius: Radius.md,
      borderWidth: 2,
      borderColor: colors.surface,
      ...Shadows.medium,
    },
    pinInput: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.primary,
      paddingVertical: 0,
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

    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: Spacing.lg,
    },

    box: {
      width: '48%',
      borderRadius: 12,
      paddingTop: 12,
      paddingHorizontal: 14,
      paddingBottom: 6,
      marginBottom: 15,
      backgroundColor: colors.surface,
      ...Shadows.medium,
    },

    boxHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Spacing.xs,
    },

    boxTitle: {
      marginStart: Spacing.xs,
      color: colors.textPrimary,
      ...Typography.boldCaption,
    },

    boxTitle2: {
      marginTop: 5,
      marginStart: Spacing.xs,
      color: colors.textPrimary,
      ...Typography.caption,
    },

    boxValue: {
      color: colors.textPrimary,
      textAlign: 'center',
      marginVertical: Spacing.xs,
      ...Typography.semiBoldCaption,
    },

    line: {
      height: 1,
      width: '100%',
      marginTop: -4,
      backgroundColor: colors.border,
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

    secondaryButtonText: { color: colors.surface },

    dangerButton: {
      backgroundColor: colors.primary,
      borderRadius: Radius.full,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: Spacing.md,
    },
  });
