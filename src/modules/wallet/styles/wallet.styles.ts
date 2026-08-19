import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import {
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '../../../core/theme/tokens';
export const createWalletStyles = (c: ThemeColors) =>
  StyleSheet.create({
    screen: { flex: 1 },
    content: { flex: 1, padding: Spacing.md },
    walletCard: {
      minHeight: 220,
      borderRadius: Radius.xl,
      padding: Spacing.lg,
      marginBottom: Spacing.md,
      overflow: 'hidden',
      ...Shadows.medium,
    },
    cardLabel: {
      ...Typography.caption,
      color: c.textSecondary,
      marginBottom: Spacing.xs,
    },
    balanceAmount: {
      ...Typography.h1,
      color: c.textPrimary,
      marginBottom: Spacing.xl,
    },
    cardFooter: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    cardMeta: { ...Typography.smallCaption, color: c.textMuted },
    cardName: {
      ...Typography.semiBoldBody,
      color: c.textPrimary,
      marginBottom: Spacing.xs,
    },
    cardNumber: { ...Typography.caption, color: c.textSecondary },
    cardBrand: { ...Typography.h3, color: c.primary, letterSpacing: 2 },
    sectionTitle: {
      ...Typography.h3,
      color: c.textPrimary,
      marginBottom: Spacing.sm,
    },
    wheel: {
      height: 230,
      justifyContent: 'flex-start',
      paddingTop: Spacing.sm,
    },
    transactionCard: {
      position: 'absolute',
      width: '100%',
      height: 150,
      borderRadius: Radius.lg,
      overflow: 'hidden',
      ...Shadows.small,
    },
    transactionGradient: {
      flex: 1,
      padding: Spacing.md,
      borderRadius: Radius.lg,
    },
    transactionTopRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    transactionType: {
      ...Typography.semiBoldBody,
      color: c.textPrimary,
      textTransform: 'capitalize',
    },
    transactionAmount: { ...Typography.semiBoldBody },
    credit: { color: c.success },
    debit: { color: c.error },
    transactionDescription: {
      ...Typography.body,
      color: c.textSecondary,
      marginTop: Spacing.md,
    },
    transactionDate: {
      ...Typography.caption,
      color: c.textMuted,
      marginTop: Spacing.sm,
    },
    stateContainer: {
      minHeight: 190,
      alignItems: 'center',
      justifyContent: 'center',
      gap: Spacing.sm,
    },
    stateText: {
      ...Typography.body,
      color: c.textSecondary,
      textAlign: 'center',
    },
    stateTitle: { ...Typography.h3, color: c.textPrimary },
  });
