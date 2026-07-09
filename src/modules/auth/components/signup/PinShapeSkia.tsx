import React, { useState } from 'react';
import { Canvas, Path, Group } from '@shopify/react-native-skia';
import { LayoutChangeEvent, View } from 'react-native';
import { createStyles } from '../../styles/signup.styles';
import { useTheme } from '../../../../core/theme/useTheme';

const PATH = `
  M174 510
  C174 510, 95 425, 55 350
  C20 285, 5 225, 5 165
  C5 55, 95 0, 174 0
  C253 0, 343 55, 343 165
  C343 225, 328 285, 293 350
  C253 425, 174 510, 174 510
  Z
`;

type Props = {
  color?: string;
  strokeWidth?: number;
};

export default function PinShapeSkia({
  color = '#7B61FF',
  strokeWidth = 0,
}: Props) {
  const [[width, height], setSize] = useState([0, 0]);

  const onLayout = (e: LayoutChangeEvent) => {
    setSize([e.nativeEvent.layout.width, e.nativeEvent.layout.height]);
  };

  const svgW = 348;
  const svgH = 520;

  const scale = Math.min(width / svgW, height / svgH) || 1;
  const dx = (width - svgW * scale) / 2;
  const dy = (height - svgH * scale) / 2;

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.viewpinCanva} onLayout={onLayout}>
      <Canvas style={styles.pinCanva}>
        <Group transform={[{ translateX: dx }, { translateY: dy }, { scale }]}>
          <Path
            path={PATH}
            color={color}
            style="stroke"
          />
          {strokeWidth > 0 && (
            <Path
              path={PATH}
              color={color}
              style="stroke"
              strokeWidth={strokeWidth}
            />
          )}
        </Group>
      </Canvas>
    </View>
  );
}