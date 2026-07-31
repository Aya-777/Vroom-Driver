import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Segment = {
  percentage: number;
  color: string;
};

type Props = {
  size: number;
  strokeWidth: number;
  segments: Segment[];
  centerText: string;
  centerTextColor?: string;
  centerTextSize?: number;
  backgroundColor?: string;
};

const SegmentedCircularProgress = ({
  size,
  strokeWidth,
  segments,
  centerText,
  centerTextColor = '#FFFFFF',
  centerTextSize = 30,
  backgroundColor = '#1B2B60',
}: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercentage = 0;

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
        {/* Base circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />

        {segments.map((segment, index) => {
          const segmentLength =
            (segment.percentage / 100) * circumference;

          const offset =
            circumference -
            (accumulatedPercentage / 100) * circumference;

          accumulatedPercentage += segment.percentage;

          return (
            <Circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${
                circumference - segmentLength
              }`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              rotation="-90"
              origin={`${size / 2}, ${size / 2}`}
            />
          );
        })}
      </Svg>

      {/* Center text */}
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.center}>
          <Text
            style={{
              color: centerTextColor,
              fontSize: centerTextSize,
            }}
            numberOfLines={1} adjustsFontSizeToFit
          >
            {centerText}
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
});

export default SegmentedCircularProgress;