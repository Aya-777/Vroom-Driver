import React from 'react';
import { View, Image } from 'react-native';
import type { createStyles } from '../../styles/driver.styles';

type DriverAvatarProps = {
  uri: string;
  styles: ReturnType<typeof createStyles>;
};

export default function DriverAvatar({ uri, styles }: DriverAvatarProps) {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri }} style={styles.avatarImage} />
    </View>
  );
}