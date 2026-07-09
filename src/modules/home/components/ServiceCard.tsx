import React from 'react';

import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { SvgProps } from 'react-native-svg/lib/typescript/elements/Svg';

interface Props {
  title: string;
  icon: React.ElementType<SvgProps>; 
  active: boolean;
  onPress?: () => void;
}

export default function ServiceCard({
  title,
  icon,
  active,
  onPress,
}: Props) {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const Icon = icon;

  return (
    <View style={styles.gridItemContainer}>

      <TouchableOpacity
        style={[
          styles.gridItem,
          {
            backgroundColor: active
              ? colors.backgroundSoft
              : colors.border,
          },
          active && styles.activeGridItem,
        ]}
        onPress={onPress}
      >
        <Icon width={24} height={24} fill={active ? colors.textSecondary : colors.textMuted} />
      </TouchableOpacity>

      <Text
        style={[
          styles.gridLabel,
          { color: colors.textSecondary },
        ]}
      >
        {title}
      </Text>

    </View>
  );
}