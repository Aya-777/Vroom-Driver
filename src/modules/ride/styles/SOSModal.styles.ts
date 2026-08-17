import { StyleSheet } from 'react-native';
import { Typography, Spacing, Shadows } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacing.lg,
    },
  
    container: {
      width: '100%',
      maxWidth: 380,
      borderRadius: Spacing.md,
      padding: Spacing.xl,
      alignItems: 'center',
      backgroundColor: colors.backgroundSoft,
    },
  
    icon: {
      fontSize: 40,
      marginBottom: Spacing.md,
    },
  
    title: {
      ...Typography.h2,
      textAlign: 'center',
      marginBottom: Spacing.smm,
      color: colors.textPrimary
    },
  
    message: {
      ...Typography.body,
      textAlign: 'center',
      marginBottom: Spacing.lg,
      lineHeight: 24,
      color: colors.textSecondary
    },
  
    sosButton: {
      width: '100%',
      paddingVertical: Spacing.md,
      borderRadius: Spacing.sm,
      backgroundColor: colors.error,
      alignItems: 'center',
      marginBottom: Spacing.sm,
    },
  
    sosButtonText: {
      ...Typography.boldBody,
      color: colors.textSecondary,
    },
  
    cancelButton: {
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.md,
    },
  
    cancelText: {
      ...Typography.semiBoldBody,
      color: colors.textMuted
    },

    successIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  successIcon: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
  },
  });