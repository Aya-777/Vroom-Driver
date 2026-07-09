import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Shadows,
  Radius,
  Spacing,
} from '../../../core/theme/tokens';

import { useTheme } from '../../../core/theme/useTheme';

import MyLocationIcon from '../../../assets/svg/common/myLocation.svg';
import LinearBg from '../LinearBg';

interface BottomSheetCardProps {
  children: React.ReactNode;
  onLocationPress?: () => void;
}

export default function BottomSheetCard({
  children,
  onLocationPress,
}: BottomSheetCardProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.bottomWrapper}>
      {/* Floating location button */}
      <TouchableOpacity
        style={[
          styles.locationButton,
          { backgroundColor: colors.surface },
        ]}
        onPress={onLocationPress}
        activeOpacity={0.8}
      >
        <MyLocationIcon fill={colors.primary} />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <LinearBg
        colors={[colors.backgroundSoft, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.sheet}
      >
        {children}
      </LinearBg>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  sheet: {
    width: '100%',
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xl,
    alignItems: 'center',
    ...Shadows.medium,
  },

  locationButton: {
    position: 'absolute',
    top: -22,
    right: Spacing.lg,

    width: 44,
    height: 44,
    borderRadius: Radius.full,

    justifyContent: 'center',
    alignItems: 'center',

    ...Shadows.small,
  },
});