import React from 'react';
import {Image, Text, View} from 'react-native';

import StarIcon from '../../../assets/svg/common/star.svg';
import {createStyles} from '../styles/sidebar.styles';
import { useTheme } from '../../../core/theme/useTheme';

type Props = {
  name: string;
  rating: number;
  avatar?: string;
};

const SidebarHeader = ({
  name,
  rating,
  avatar,
}: Props) => {

  const { colors } = useTheme();
  const styles = createStyles(colors);
      
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image
            source={{uri: avatar}}
            style={styles.avatar}
          />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {name}
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            {rating.toFixed(1)}
          </Text>

          <StarIcon
            width={14}
            height={14}
          />
        </View>
      </View>
    </View>
  );
};

export default SidebarHeader;