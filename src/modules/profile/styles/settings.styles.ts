import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import {
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '../../../core/theme/tokens';

export const createSettingsStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: Spacing.md,
      paddingBottom: Spacing.xxl,
    },

    languageBlock: { marginBottom: Spacing.sm },
    languageSelector: {
      minHeight: 52,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: Radius.sm,
      backgroundColor: colors.surface,
    },
    languageValue: { ...Typography.body, color: colors.textPrimary },
    languageOptions: {
      marginTop: Spacing.xs,
      borderRadius: Radius.sm,
      overflow: 'hidden',
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    languageOption: { padding: Spacing.md },
    languageOptionActive: { backgroundColor: colors.primary + '18' },
    languageOptionText: { ...Typography.body, color: colors.textPrimary },
    // Section
    sectionTitle: {
      ...Typography.h3,
      color: colors.textPrimary,
      marginTop: Spacing.md,
      marginBottom: Spacing.xs,
    },

    // Account Card
    accountCard: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    avatar: {
      width: 58,
      height: 58,
      borderRadius: Radius.full,
      backgroundColor: colors.surfaceAccent,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: Spacing.md,
    },
    avatarText: {
      ...Typography.h2,
      color: colors.primary,
    },
    accountCopy: {
      flex: 1,
    },
    accountName: {
      ...Typography.semiBoldBody,
      color: colors.textPrimary,
    },
    accountDetail: {
      ...Typography.caption,
      color: colors.textSecondary,
      marginTop: Spacing.xxs,
    },

    // Row
    row: {
      minHeight: 66,
      flexDirection: 'row',
      columnGap: 16,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    rowIcon: {
      width: 22,
      alignItems: 'center',
      marginRight: 0,
    },
    rowIconText: {
      fontSize: 20,
      color: colors.primary,
    },
    rowCopy: {
      flex: 1,
    },
    rowTitle: {
      ...Typography.semiBoldBody,
      color: colors.textPrimary,
    },
    rowSubtitle: {
      ...Typography.caption,
      color: colors.textSecondary,
      marginTop: Spacing.xxs,
    },
    arrow: {
      color: colors.textMuted,
      fontSize: 26,
      marginLeft: Spacing.sm,
    },

    deleteButton: {
      marginTop: Spacing.lg,
      paddingVertical: Spacing.md,
      borderRadius: Radius.sm,
      borderWidth: 1,
      borderColor: colors.error,
      backgroundColor: colors.error + '18',
      alignItems: 'center',
    },
    deleteText: {
      ...Typography.semiBoldBody,
      color: colors.error,
    },
    // Social Card
    socialCard: {
      marginTop: Spacing.lg,
      padding: Spacing.md,
      borderRadius: Radius.md,
      backgroundColor: colors.surface,
      ...Shadows.small,
    },
    socialTitle: {
      ...Typography.semiBoldBody,
      color: colors.textPrimary,
      marginBottom: Spacing.xs,
    },
  });
