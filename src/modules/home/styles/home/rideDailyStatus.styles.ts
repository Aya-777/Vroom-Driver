import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { Spacing, Radius, Typography } from '../../../../core/theme/tokens';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
    marginTop: 28,
    marginBottom: 40,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 28,
  },

  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  item: {
    alignItems: 'center',
    width: '31%',
  },

  label: {
    color: colors.textPrimary,
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
  });