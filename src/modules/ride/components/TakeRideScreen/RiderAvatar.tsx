import React from 'react';
import { View, Image } from 'react-native';
import type { createStyles } from '../../styles/driver.styles';

type RiderAvatarProps = {
  uri: string;
  styles: ReturnType<typeof createStyles>;
};

export default function RiderAvatar({ uri, styles }: RiderAvatarProps) {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri }} style={styles.avatarImage} />
    </View>
  );
}