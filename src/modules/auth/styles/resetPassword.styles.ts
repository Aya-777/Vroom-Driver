import { StyleSheet } from 'react-native';
import { Spacing, Radius, Typography, Shadows } from '../../../core/theme/tokens';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: Spacing.xl,
      alignItems: 'center',
      paddingTop: Spacing.xxl,
    },
    description: {
      ...Typography.body,
      color: colors.textSecondary,
      textAlign: 'left',
      alignSelf: 'flex-start',
      lineHeight: 26,
      marginBottom: Spacing.xxl,
    },
    form: {
      width: '100%',
      marginTop: Spacing.md,
    },
    label: {
      ...Typography.body,
      color: colors.primary,
      marginBottom: Spacing.sm,
      fontWeight: '600',
    },
    inputContainer: {
      backgroundColor: colors.backgroundSoft,
      borderRadius: Radius.full,
      borderWidth: 2,
      borderColor: colors.surface,
      height: 54,
      justifyContent: 'center',
      paddingHorizontal: Spacing.md,
      marginBottom: Spacing.lg,
      ...Shadows.medium,
    },
    inputText: {
      color: colors.primary,
    },

    button: {
      width: '70%',
      height: 48,
      backgroundColor: colors.primary,
      borderRadius: Radius.full,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: Spacing.xl,
      ...Shadows.large,
    },
    buttonText: {
      ...Typography.semiBoldBody,
      color: colors.surface,
    },
  });