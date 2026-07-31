import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { Spacing, Radius, Typography } from '../../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: '#2C3D7E',
      borderRadius: 18,
      padding: 24,
    },

    title: {
      color: '#DED8FF',
      fontSize: 21,
      fontWeight: '500',
      letterSpacing: 0.5,
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 18,
    },

    legend: {
      flex: 1,
      marginLeft: 25,
      gap: 20,
    },

    legendRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    dot: {
      width: 13,
      height: 13,
      borderRadius: 7,
      marginRight: 12,
    },

    label: {
      flex: 1,
      color: '#E1DAFF',
      fontSize: 13,
      marginEnd: 5,
    },

    value: {
      color: '#E1DAFF',
      fontSize: 16,
      fontWeight: '400',
    },
  });
