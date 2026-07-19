import React from 'react';
import { Text } from 'react-native';
import type { createStyles } from '../../styles/driver.styles';

type DriverStatusProps = {
  text: string;
  styles: ReturnType<typeof createStyles>;
};

export default function DriverStatus({ text, styles }: DriverStatusProps) {
  return (
    <Text style={styles.statusText}>{text}</Text>
  );
}