import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../core/theme/useTheme';

type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;

  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

const LinearBg = ({
  children,
  style,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
}: Props) => {
  const theme = useTheme();
  const themeColors = theme?.colors || {};
  const resolvedColors = colors && colors.length > 0 ? colors : [themeColors.surface || '#FFFFFF', themeColors.background || '#F7F7F7'];
  return (
    <LinearGradient
      colors={resolvedColors}
      start={start}
      end={end}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearBg;