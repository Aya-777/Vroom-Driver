import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import LinearBg from '../../../shared/components/LinearBg';

type Props = {
  title: string;
  Icon: React.ElementType;
  onPress?: () => void;
};

export default function GridCard({ title, Icon, onPress }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.7 : 1} disabled={!onPress}>
      <LinearBg
        colors={[colors.surface, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gridCard}
      >
        <View style={styles.iconCircle}>
          <Icon width={30} height={30} fill={colors.primary} />
        </View>

        <Text style={styles.gridText}>
          {title}
        </Text>
      </LinearBg>
    </TouchableOpacity>
  );
}