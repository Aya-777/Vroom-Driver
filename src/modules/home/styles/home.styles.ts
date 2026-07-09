import { StyleSheet } from 'react-native';

import {
  Typography,
  Spacing,
  Radius,
  Shadows,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({

    gradientContainer: {
      flex: 1,
    },

    container: {
      flex: 1,
    },

    scrollContent: {
      paddingHorizontal: Spacing.lg,
      paddingBottom: 100,
    },

    sectionTitle: {
      ...Typography.h3,
    },

    gridContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    gridItemContainer: {
      alignItems: 'center',
      width: '23%',
      marginBottom: Spacing.md,
    },

    gridItem: {
      width: 60,
      height: 60,
      borderRadius: Radius.full,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: Spacing.sm,
    },

    activeGridItem: {
      ...Shadows.small,
    },

    gridLabel: {
      ...Typography.caption,
      textAlign: 'center',
    },

    destinationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Spacing.xl,
      marginBottom: Spacing.md,
    },

    forYouHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },

    destinationList: {
      gap: Spacing.sm,
    },

    destinationCard: {
      flexDirection: 'row',
      padding: Spacing.md,
      borderRadius: Radius.lg,
      alignItems: 'center',
      borderWidth: 1 ,
      borderColor: colors.surface,
    },

    destIconContainer: {
      width: 44,
      height: 44,
      borderRadius: Radius.full,
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: Spacing.md,
    },

    destTextContainer: {
      flex: 1,
    },

    destTitle: {
      ...Typography.boldBody,
      marginBottom: 2,
    },

    destSubtitle: {
      ...Typography.caption,
    },
  });