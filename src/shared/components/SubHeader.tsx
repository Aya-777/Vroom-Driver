import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '../../core/theme/useTheme';
import ArrowLeft from '../../assets/svg/arrows/arrowLeft.svg';
import { createStyles } from '../styles/SubHeader.styles';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
}

export default function Header({ title, onBackPress }: HeaderProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {onBackPress ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackPress}
            activeOpacity={0.7}
          >
            <ArrowLeft fill={colors.primary} />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.placeholder} />
      </View>
    </View>
  );
}

/* ---------------- DYNAMIC STYLES ---------------- */


// I moved the styles to shared/styles/SubHeader.styles.ts 🫶🏻
