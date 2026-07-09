import { StyleSheet } from 'react-native';
import { Shadows, Typography } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    timePriceRow: {
      flexDirection: 'row',
      marginBottom: 12,
      gap : 15,
    },

    vehicleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 24,
      zIndex: 1,
    },

    vehicleCard: {
      width: '30%',
      borderRadius: 12,
      paddingVertical: 12,
      alignItems: 'center',
      backgroundColor: colors.surface,
      ...Shadows.small,
    },

    activeVehicleCard: {
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor : colors.primary + '80'
    },

    vehicleImage: {
      width: 50,
      height: 35,
      marginBottom: 6,
    },

    vehicleText: {
      color: colors.textMuted,
      ...Typography.semiBoldCaption,
    },

    activeVehicleText: {
      color: colors.primary,
    },

  });