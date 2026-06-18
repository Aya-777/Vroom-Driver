import React from 'react';
import { View } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';
import type { DriverFoundStyles } from '../../styles/DriverFound.styles';

type ProgressBarProps = {
  styles: DriverFoundStyles;
  colors: ThemeColors;
};

export default function ProgressBar({ styles }: ProgressBarProps) {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.trackLine} />
    </View>
  );
}