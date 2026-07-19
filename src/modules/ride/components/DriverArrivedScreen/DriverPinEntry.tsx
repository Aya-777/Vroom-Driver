import React from 'react';
import { View, Text } from 'react-native';

export const DriverPinEntry = ({ pin, styles, pinMessage }: { pin: string, styles: any, pinMessage: string }) => (
  <View style={styles.pinContainer}>
    <Text style={styles.pinSubMessage}>{pinMessage}</Text>
    <View style={styles.pinCodeBox}>
      {pin.split('').map((digit, i) => (
        <Text key={i} style={styles.pinDigit}>{digit}</Text>
      ))}
    </View>
  </View>
);