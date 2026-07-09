import React from 'react';
import { Text } from 'react-native';
import type { DriverFoundStyles } from '../../styles/DriverFound.styles';

type DriverStatusProps = {
  text: string;
  styles: DriverFoundStyles;
};

export default function DriverStatus({ text, styles }: DriverStatusProps) {
  return (
    <Text style={styles.statusText}>{text}</Text>
  );
}