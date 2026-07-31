import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { Spacing, Radius, Typography } from '../../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    gradientContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: Spacing.md,
      paddingBottom: Spacing.xxl,
    },
    headerWrapper: {
      marginBottom: Spacing.md,
    },
    greetingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.smm,
    },
    greetingText: {
      ...Typography.caption,
      color: colors.textSecondary,
    },
    statusIndicatorRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    onlineDot: {
      width: Spacing.sm,
      height: Spacing.sm,
      borderRadius: Radius.full,
      backgroundColor: '#22C55E',
      marginRight: Spacing.sm,
    },
    statusText: {
      ...Typography.h3,
      color: colors.textPrimary,
    },
    statusBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: Radius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    serviceStatusTitle: {
      ...Typography.mediumCaption,
      color: colors.textSecondary,
    },
    serviceStatusSubtitle: {
      ...Typography.semiBoldCaption,
      color: colors.textPrimary,
      marginTop: Spacing.xxs,
    },
    gridRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.sm,
    },
    statsCard: {
      width: '48%',
      backgroundColor: colors.backgroundSoft,
      borderRadius: Radius.md,
      padding: Spacing.smd,
      borderWidth: 1,
      borderColor: colors.border,
    },
    cardHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.sm,
    },
    trendBadge: {
      ...Typography.smallCaption,
      color: '#22C55E',
    },
    cardValue: {
      ...Typography.h2,
      color: colors.textPrimary,
    },
    cardLabel: {
      ...Typography.mediumCaption,
      color: colors.textSecondary,
      marginTop: Spacing.xxs,
    },
    bannerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.backgroundSoft,
      borderRadius: Radius.sm + 6,
      padding: Spacing.smd,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      borderLeftColor: colors.primary,
      borderLeftWidth: 2,
    },
    bannerText: {
      ...Typography.caption,
      color: colors.textPrimary,
      marginLeft: Spacing.sm,
      flex: 1,
    },
    actionButtonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.xl,
    },
    actionButtonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: Spacing.xs,
    },
    actionButtonText: {
      ...Typography.semiBoldCaption,
      color: colors.textPrimary,
      marginLeft: Spacing.sm,
    },
    card: {
      width: '100%',
      backgroundColor: colors.surface,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingTop: 16,
      paddingBottom: 12,
      overflow: 'hidden',
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      ...Typography.mediumCaption,
      color: colors.textSecondary,
      letterSpacing: 0.5,
    },
    period: {
      ...Typography.smallCaption,
      color: colors.primary,
    },
    chartContainer: {
      width: '100%',
      alignItems: 'center',
    },
    days: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
    },
    day: {
      ...Typography.smallCaption,
      color: colors.primary,
    },
  });
