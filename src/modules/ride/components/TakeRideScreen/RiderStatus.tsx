import React from 'react';
import { Text } from 'react-native';
import type { createStyles } from '../../styles/driver.styles';

type RiderStatusProps = {
  text: string;
  styles: ReturnType<typeof createStyles>;
};

export default function RiderStatus({ text, styles }: RiderStatusProps) {
  return (
    <Text style={styles.statusText}>{text}</Text>
  );
}