import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';
import { Typography, Spacing, Radius } from '../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.mmd,
    gap: Spacing.smd,
    backgroundColor: colors.surface,
  },

  avatarContainer: {
    width: 54,
    height: 54,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    borderColor: colors.border,
    overflow: 'hidden',
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  avatarPlaceholder: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  userInfo: {
    justifyContent: 'center',
  },

  userName: {
    ...Typography.h3,
    color: colors.textPrimary,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    marginTop: Spacing.xs,
  },
  
  rating: {
    color: colors.textPrimary,
    ...Typography.caption,
  },

  content: {
    flex: 1,
  },

  menu: {
    paddingTop: Spacing.smd,
    paddingHorizontal: Spacing.mmd,
  },

  menuItem: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.xxs,
  },

  menuItemPressed: {
    opacity: 0.6,
  },

  menuIcon: {
    color: colors.textMuted,
  },

  menuLabel: {
    ...Typography.caption,
    color: colors.textSecondary,
  },

  footer: {
    marginTop: 'auto',
    paddingHorizontal: Spacing.mmd,
    paddingBottom: Spacing.mmd,
  },

  version: {
    ...Typography.smallCaption,
    color: colors.textMuted,
  },
});