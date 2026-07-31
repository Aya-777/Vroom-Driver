import React, { useMemo } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from 'react-native-svg';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home/home.styles';
import { useTranslation } from 'react-i18next';

type WeeklyTrend = {
  day: string;
  value: number;
};

type Props = {
  data: WeeklyTrend[];
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const CHART_WIDTH = SCREEN_WIDTH - 60;
const CHART_HEIGHT = 130;

export default function WeeklyTrendsFlowChart({ data }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  const { linePath, areaPath, peakPoint } = useMemo(() => {
    if (!data.length) {
      return {
        linePath: '',
        areaPath: '',
        peakPoint: null,
      };
    }

    const maxValue = Math.max(...data.map(item => item.value));

    const points = data.map((item, index) => ({
      x:
        data.length === 1
          ? CHART_WIDTH / 2
          : (index / (data.length - 1)) * CHART_WIDTH,

      y:
        maxValue === 0
          ? CHART_HEIGHT
          : CHART_HEIGHT - (item.value / maxValue) * CHART_HEIGHT,
    }));

    /*
     * Creates a smooth cubic-bezier curve between points.
     */
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];

      const controlPoint1X = current.x + (next.x - current.x) / 2;

      const controlPoint2X = next.x - (next.x - current.x) / 2;

      path += `
        C
        ${controlPoint1X} ${current.y},
        ${controlPoint2X} ${next.y},
        ${next.x} ${next.y}
      `;
    }

    const area = `
      ${path}
      L ${points[points.length - 1].x} ${CHART_HEIGHT}
      L ${points[0].x} ${CHART_HEIGHT}
      Z
    `;

    const highestPoint = points.reduce(
      (highest, point) => (point.y < highest.y ? point : highest),
      points[0],
    );

    return {
      linePath: path,
      areaPath: area,
      peakPoint: highestPoint,
    };
  }, [data]);

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{t('weeklyTrends')}</Text>

        <Text style={styles.period} numberOfLines={1} adjustsFontSizeToFit>
          {t('last7Days')}
        </Text>
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <Svg
          width={CHART_WIDTH}
          height={CHART_HEIGHT}
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        >
          <Defs>
            <LinearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#B9B5FF" stopOpacity="0.30" />

              <Stop offset="1" stopColor="#B9B5FF" stopOpacity="0" />
            </LinearGradient>
          </Defs>

          {/* Filled area */}
          {areaPath && <Path d={areaPath} fill="url(#areaGradient)" />}

          {/* Main line */}
          {linePath && (
            <Path
              d={linePath}
              fill="none"
              stroke="#D7D1FF"
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          )}

          {/* Peak point */}
          {peakPoint && (
            <Circle cx={peakPoint.x} cy={peakPoint.y} r={3} fill="#E2DDFF" />
          )}
        </Svg>
      </View>

      {/* Bottom labels */}
      <View style={styles.days}>
        {data.map(item => (
          <Text
            key={item.day}
            style={styles.day}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {t(item.day)}
          </Text>
        ))}
      </View>
    </View>
  );
}
