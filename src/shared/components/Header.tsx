import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MenuIcon from '../../assets/svg/common/menu.svg';
import NotificationsIcon from '../../assets/svg/common/notifications.svg';

import {
  Typography,
  Spacing,
  Radius,
  Shadows,
} from '../../core/theme/tokens';

import { useTheme } from '../../core/theme/useTheme';

interface HeaderProps {
  title?: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

export default function Header({
  title = 'VROOM',
  onMenuPress,
  onNotificationPress,
}: HeaderProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Menu */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onMenuPress}
          activeOpacity={0.7}
        >
          <MenuIcon fill={colors.primary} />
        </TouchableOpacity>

        {/* Title */}
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        {/* Notifications */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}
          activeOpacity={0.7}
        >
          <NotificationsIcon fill={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- DYNAMIC STYLES ---------------- */

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingTop: Spacing.xl,
      backgroundColor: colors.surface,
      ...Shadows.small,
    },

    header: {
      height: 30,
      flexDirection: 'row',
      alignItems: 'stretch',
      paddingHorizontal: Spacing.lg,
    },

    iconButton: {
      width: 40,
      height: 40,
      borderRadius: Radius.full,
      backgroundColor: colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadows.small,
    },

    title: {
      flex: 1,
      textAlign: 'left',
      ...Typography.h2,
      color: colors.textSecondary,
      letterSpacing: 1,
    },
  });