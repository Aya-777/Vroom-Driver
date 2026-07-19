import { StyleSheet } from 'react-native';
import { Typography, Spacing, Shadows } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    driverInfoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
    driverName: {
      color: colors.textPrimary,
      ...Typography.h3,
      marginBottom: 8,
      marginTop: 10,
      marginStart: 10,
    },
    pinContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    pinCodeBox: {
      flexDirection: 'row',
      backgroundColor: colors.surface,
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
      marginTop: 10,
    },
    pinSubMessage:{
      ...Typography.caption,
      color: colors.textPrimary,
    },
    pinDigit: {
      marginHorizontal: 8,
      ...Typography.semiBoldBody,
      color: colors.textSecondary,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },

    statusText: {
      ...Typography.semiBoldBody,
      textAlign: 'center',
      marginBottom: Spacing.md,
      color: colors.textPrimary,
    },

    avatarContainer: {
      width: 84,
      height: 84,
      borderRadius: 42,
      overflow: 'hidden',
      alignSelf: 'center',
      marginBottom: Spacing.sm,
      marginEnd: 20,
      backgroundColor: colors.primary,
      ...Shadows.small,
    },

    avatarImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },

    communicationRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 28,
      marginBottom: 24,
    },

    iconButton: {
      padding: 4,
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },

    progressContainer: {
      width: '100%',
      height: 20,
      justifyContent: 'center',
      marginBottom: Spacing.md,
      alignItems: 'center',
    },

    trackLine: {
      width: '100%',
      position: 'absolute',
      height: 2,
      backgroundColor: colors.border,
    },

    carDetailsCard: {
      width: '100%',
      borderRadius: 18,
      padding: 18,
      flexDirection: 'row',
      alignItems: 'center',
      letterSpacing: 1.2,
      backgroundColor: colors.primary,
      ...Shadows.medium,
    },

    carIconContainer: {
      backgroundColor: colors.surface,
      width: 44,
      height: 44,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: 16,
    },

    carInfoTextDetails: {
      flex: 1,
    },

    carDetailsTitle: {
      ...Typography.semiBoldCaption,
      marginBottom: 4,
      color: colors.surface,
    },

    carModelText: {
      ...Typography.semiBoldBody,
      marginBottom: 6,
      color: colors.surface,
    },

    plateRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    carColorText: {
      ...Typography.caption,
      opacity: 0.8,
      color: colors.surface,
    },
  });
