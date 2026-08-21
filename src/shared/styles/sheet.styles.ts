import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    bottomSheet: {
      zIndex: 1000,
      elevation: 1000,
    },
    handleIndicatorStyle: {
      backgroundColor: colors.textSecondary,
      width: 50,
    },

    sheetBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
    },
  });


