import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import { Radius, Spacing, Typography } from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacing.xl,
    },

    modalContainer: {
      width: '100%',
      borderRadius: Radius.xl,
      paddingHorizontal: 33,
      paddingVertical: 20,
      overflow: 'hidden',
    },

    modalTitle: {
      ...Typography.h2,
      textAlign: 'center',
      color: colors.primary,
      marginBottom: Spacing.md,
    },

    Divider: {
      height: 2,
      backgroundColor: colors.border,
      marginBottom: Spacing.lg,
      marginTop: Spacing.md,
    },

    sectionTitle: {
      ...Typography.boldBody,
      color: colors.primary,
      textAlign: 'left',
      marginBottom: 12,
    },

    starsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 6,
    },

    reviewInputContainer: {
      marginTop: 12,
      marginBottom: Spacing.xl,
    },

    reviewInputBox: {
      height: undefined,
      minHeight: 90,
      alignItems: 'flex-start',
      paddingVertical: 10,
      borderWidth: 0,
      backgroundColor: colors.surface,
      borderRadius: Radius.md,
    },

    reviewInput: {
      textAlignVertical: 'top',
      ...Typography.body,
      color: colors.textPrimary,
    },

    actionsContainer: {
      flexDirection: 'row',
      gap: Spacing.smm,
    },

    cancelButton: {
      flex: 1,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Radius.md,
      backgroundColor: colors.backgroundSoft,
    },

    submitButton: {
      flex: 1,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: colors.primary,
    },

    cancelText: {
      ...Typography.boldBody,
      color: colors.primary,
    },

    submitText: {
      ...Typography.boldBody,
      color: colors.backgroundSoft,
    },
    complaintRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
    },

    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1.5,
      borderColor: colors.textSecondary,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkboxChecked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    checkmark: {
      color: colors.background,
      fontSize: 14,
      fontWeight: 'bold',
    },

    complaintLabel: {
      marginLeft: 8,
      fontSize: 14,
      color: colors.textPrimary,
    },
  });
