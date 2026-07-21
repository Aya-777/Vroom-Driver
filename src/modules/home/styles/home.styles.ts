import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import { Spacing, Radius, Typography } from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    gradientContainer:{
      flex:1,
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
    },
    bannerText: {
      ...Typography.caption,
      color: colors.textPrimary,
      marginLeft: Spacing.sm,
      flex: 1,
    },
    sectionCard: {
      backgroundColor: colors.surface,
      borderRadius: Radius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    monthlySection:{
      padding: Spacing.md,
      marginBottom: Spacing.md,
    },
    sectionHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.md,
    },
    sectionTitle: {
      ...Typography.boldCaption,
      color: colors.textSecondary,
      letterSpacing: 1,
    },
    sectionSubtitle: {
      ...Typography.smallCaption,
      color: colors.textSecondary,
    },
    chartContainer: {
      height: 120,
      justifyContent: 'flex-end',
      position: 'relative',
    },
    chartAxisRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Spacing.sm,
    },
    chartDayText: {
      ...Typography.smallCaption,
      color: colors.textSecondary,
      textAlign: 'center',
      flex: 1,
    },
    metricRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Spacing.sm,
    },
    metricLegendBox: {
      marginLeft: Spacing.md,
      flex: 1,
    },
    legendItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: Spacing.xxs,
    },
    legendDotText: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dotIndicator: {
      width: 6,
      height: 6,
      borderRadius: Radius.full,
      marginRight: Spacing.sm,
    },
    legendText: {
      ...Typography.mediumCaption,
      color: colors.textSecondary,
    },
    legendValue: {
      ...Typography.boldCaption,
      color: colors.textPrimary,
    },
    monthlyContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: Spacing.sm,
    },
    monthlyItem: {
      alignItems: 'center',
    },
    monthlyText: {
      ...Typography.smallCaption,
      color: colors.textSecondary,
      marginTop: Spacing.xs,
      textAlign: 'center',
    },
    actionButtonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.xl,
    },
    actionButton: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.surface,
      borderRadius: Radius.sm + 6,
      paddingVertical: Spacing.smd,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      marginHorizontal: Spacing.xs,
    },
    actionButtonText: {
      ...Typography.semiBoldCaption,
      color: colors.textPrimary,
      marginLeft: Spacing.sm,
    },
  });