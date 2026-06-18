import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';

interface Props {
  title: string;
  actionText?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
}

export default function SectionHeader({
  title,
  actionText,
  onPress,
  icon,
}: Props) {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.destinationHeader}>

      <View
        style={styles.forYouHeader}
      >
        {icon}

        <Text
          style={[
            styles.sectionTitle,
            { color: colors.textPrimary },
          ]}
        >
          {title}
        </Text>
      </View>

      {actionText && (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: colors.primary }} adjustsFontSizeToFit={true}>
            {actionText}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}