import { StyleSheet } from 'react-native';

import {
  Shadows,
  Typography,
  Radius,
  Spacing,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: Spacing.lg,
    },

    box: {
      width: '45%',
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

    contactSection: {
      marginBottom: Spacing.lg,
    },

    contactHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Spacing.sm,
      gap: Spacing.sm,
    },

    input: {
      height: 35,
      width: 300,
      fontSize: 15,
      borderRadius: Radius.lg,
      paddingBottom: Spacing.sm,
      marginTop: Spacing.sm,
      backgroundColor: colors.background,
      color: colors.textPrimary,
      ...Shadows.small,
    },

    button: {
      flexDirection: 'row',
      width: '70%',
      paddingVertical: 14,
      borderRadius: Radius.full,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
      ...Shadows.small,
      marginBottom: Spacing.xl,
    },

    buttonText: {
      color: colors.background,
      ...Typography.semiBoldBody,
      marginEnd: 6,
      marginBottom: 4,
    },
  });