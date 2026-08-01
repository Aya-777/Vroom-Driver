import React from 'react';
import { Image, Text, View } from 'react-native';

import StarIcon from '../../../assets/svg/common/star.svg';
import ThemeToggleButton from './ThemeToggleButton';
import { createStyles } from '../styles/sidebar.styles';
import { useTheme } from '../../../core/theme/useTheme';
import { ThemeMode } from '../../../core/theme/theme.types';

type Props = {
  name: string;
  rating: number;
  avatar?: string;
  mode: ThemeMode;
  onToggleTheme: () => void;
};

const SidebarHeader = ({
  name,
  rating,
  avatar,
  mode,
  onToggleTheme,
}: Props) => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            {rating.toFixed(1)}
          </Text>

          <StarIcon
            width={14}
            height={14}
          />
        </View>

        <View style={styles.spacer} />

        <ThemeToggleButton mode={mode} onToggle={onToggleTheme} />
      </View>

      <Text style={styles.userName}>
        {name}
      </Text>
    </View>
  );
};

export default SidebarHeader;