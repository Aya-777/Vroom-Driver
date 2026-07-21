import { StyleSheet } from 'react-native';
import { Radius, Spacing, Typography } from '../../../core/theme/tokens';

export const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tripStartedMessage:{
    ...Typography.h3,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.mmd,
  },
  // DriverInfoCard Styles
  driverCard: {
    backgroundColor: colors.surface,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: Spacing.mmd,
  },
  driverInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: Radius.lg,
  },
  driverTextContainer: {
    flex: 1,
    marginLeft: Spacing.smm,
  },
  driverName: {
    ...Typography.boldBody,
    color: colors.textPrimary,
  },
  driverDetails: {
    ...Typography.mediumCaption,
    color: colors.textSecondary,
  },
  driverCar: {
    ...Typography.mediumCaption,
    color: colors.textSecondary,
    marginTop: Spacing.xxs,
  },
  callButton: {
    padding: Spacing.smm,
    backgroundColor: colors.surface,
    borderRadius: Radius.lg,
  },

  // TripSummaryGrid Styles
  summaryTitle: {
    ...Typography.h3,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  column: {
    width: '48%',
  },
  metricCard: {
    backgroundColor: colors.surface,
    padding: Spacing.smm,
    borderRadius: Radius.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metricLabel: {
    ...Typography.mediumCaption,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,

  },
  metricValue: {
    ...Typography.caption,
    color: colors.textPrimary,
  },
  tipLabel: {
    ...Typography.mediumCaption,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  tipInput: {
    backgroundColor: colors.surface,
    borderRadius: Radius.md,
    alignItems: 'center',
    height: 45,
  },
  tipValue: {
    ...Typography.semiBoldCaption,
    color: colors.textPrimary,
  },
  delayLabel: {
    ...Typography.mediumCaption,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  delayBox: {
    backgroundColor: colors.surface,
    padding: Spacing.smm,
    borderRadius: Radius.md,
  },
  delayValue: {
    ...Typography.semiBoldCaption,
    color: colors.note,
  },

verticalDivider: {
  width: 1,
  backgroundColor: colors.border,
  marginHorizontal: Spacing.md,
},

  // Footer Styles
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.smm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: Spacing.smd,
  },
  subtotalLabel: {
    ...Typography.semiBoldBody,
    color: colors.textSecondary,
  },
  subtotalValue: {
    ...Typography.h1,
    color: colors.textPrimary,
  },
  paymentMethod: {
    backgroundColor: colors.surface,
    paddingHorizontal: Spacing.smd,
    paddingVertical: Spacing.smm,
    borderRadius: Radius.sm,
  },
  paymentText:{
    color: colors.textPrimary,
    ...Typography.caption
  },
  disclaimerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: Spacing.md,
  },
  disclaimerText: {
    textAlign: 'center',
    color: colors.textMuted,
    ...Typography.smallCaption,
    marginBottom: Spacing.smm,
  },
});