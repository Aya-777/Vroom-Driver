import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  percentage: number;
  size: number;
  strokeWidth: number;
  progressColor: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
};

const CircularProgress = ({
  percentage,
  size,
  strokeWidth,
  progressColor,
  backgroundColor = '#1E2D61',
  textColor = '#FFFFFF',
  textSize = 32,
}: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(Math.max(percentage, 0), 100);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}
    >
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="butt"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Center percentage */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.center}>
          <Text
            style={[
              styles.percentage,
              {
                color: textColor,
                fontSize: textSize,
              },
            ]}
          >
            {percentage}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  percentage: {
    fontWeight: '500',
  },
});

export default CircularProgress;