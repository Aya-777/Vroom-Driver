import React from 'react';
import { View, Image } from 'react-native';
import type { DriverFoundStyles } from '../../styles/DriverFound.styles';

type DriverAvatarProps = {
  uri: string;
  styles: DriverFoundStyles;
};

export default function DriverAvatar({ uri, styles }: DriverAvatarProps) {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri }} style={styles.avatarImage} />
    </View>
  );
}