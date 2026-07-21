import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';
import { Spacing } from '../../../../core/theme/tokens';

type VerticalDividerProps = {
  colors: ThemeColors;
};

export default function VerticalDivider({ colors }: VerticalDividerProps) {
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: colors.border },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    width: 1,
    alignSelf: 'stretch',
    marginHorizontal: Spacing.md,
  },
});