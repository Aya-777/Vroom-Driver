import React from 'react';
import { View } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';
import type { createStyles } from '../../styles/driver.styles';

type ProgressBarProps = {
  styles: ReturnType<typeof createStyles>;
  colors: ThemeColors;
};

export default function ProgressBar({ styles }: ProgressBarProps) {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.trackLine} />
    </View>
  );
}