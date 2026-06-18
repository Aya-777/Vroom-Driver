import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MenuIcon from '../../../assets/svg/common/menu.svg';
import NotificationsIcon from '../../../assets/svg/common/notifications.svg';

import {
  //   Typography,
  Spacing,
  Radius,
  Shadows,
} from '../../../core/theme/tokens';

import { useTheme } from '../../../core/theme/useTheme';

interface HeaderTopAppBarProps {
  title?: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

const HeaderTopAppBar = ({
  title = 'VROOM',
  onMenuPress,
  onNotificationPress,
}: HeaderTopAppBarProps) => {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Menu Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.actionButton}
          onPress={onMenuPress}
        >
          <MenuIcon
            width={25}
            height={25}
            fill={colors.primary}
          />
        </TouchableOpacity>

        {/* Logo */}
        <Text numberOfLines={1} style={styles.logoText}>
          {title}
        </Text>

        {/* Notification Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.actionButton}
          onPress={onNotificationPress}
        >
          <NotificationsIcon
            width={25}
            height={25}
            fill={colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderTopAppBar;

/* ---------------- DYNAMIC STYLES ---------------- */

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingTop: Spacing.smm,
      //   backgroundColor: 'red',
    },

    header: {
      height: 64,
      paddingHorizontal: Spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    actionButton: {
      width: 40,
      height: 40,
      borderRadius: Radius.full,
      backgroundColor: colors.surface,
      justifyContent: 'center',
      alignItems: 'center',

      ...Shadows.small,
    },

    logoText: {
      flex: 1,
      textAlign: 'center',
      fontSize: 32,
      lineHeight: 42,
      letterSpacing: -1.6,
      color: colors.primary,
      fontFamily: 'Lora-Bold',
    },
  });