import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import {
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '../../../core/theme/tokens';

export const createSafetyStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: Spacing.md,
      paddingBottom: Spacing.xxl,
    },

    // Intro
    introCard: {
      borderRadius: Radius.md,
      padding: Spacing.lg,
      marginBottom: Spacing.lg,
      backgroundColor: c.surfaceAccent,
    },
    introTitle: {
      ...Typography.h2,
      color: c.textPrimary,
      marginBottom: Spacing.xs,
    },
    introSubtitle: {
      ...Typography.body,
      color: c.textSecondary,
      lineHeight: 20,
    },

    // Section
    sectionTitle: {
      ...Typography.h3,
      color: c.textPrimary,
      marginTop: Spacing.md,
      marginBottom: Spacing.xs,
    },

    // Row (Ù†ÙØ³ Ù†Ù…Ø· settings.styles)
    row: {
      minHeight: 66,
      flexDirection: 'row',
      columnGap: 16,
      paddingVertical: Spacing.md,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: c.border,
    },
    rowCopy: {
      flex: 1,
      paddingVertical: Spacing.xs,
    },
    rowTitle: {
      ...Typography.semiBoldBody,
      color: c.textPrimary,
      marginBottom: Spacing.xs,
    },
    rowSubtitle: {
      ...Typography.caption,
      color: c.textSecondary,
      marginTop: Spacing.xxs,
    },

    // Tips
    tipsCard: {
      marginTop: Spacing.lg,
      padding: Spacing.md,
      borderRadius: Radius.md,
      backgroundColor: c.surface,
      ...Shadows.small,
    },
    tipsTitle: {
      ...Typography.semiBoldBody,
      color: c.textPrimary,
      marginBottom: Spacing.sm,
    },
    tipRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: Spacing.xs,
    },
    tipBullet: {
      ...Typography.body,
      color: c.primary,
      marginRight: Spacing.xs,
    },
    tipText: {
      ...Typography.caption,
      color: c.textSecondary,
      flex: 1,
      lineHeight: 18,
    },
  });

