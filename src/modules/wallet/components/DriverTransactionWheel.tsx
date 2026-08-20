import { useMemo, useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../../core/theme/useTheme';
import LinearBg from '../../../shared/components/LinearBg';

import { DriverWalletTransaction } from '../types/wallet.types';
import { createWalletStyles } from '../styles/wallet.styles';

type Props = {
  transactions: DriverWalletTransaction[];
};

const normalizeType = (value: string) => {
  const type = value.toLowerCase().replace(/[-\s]+/g, '_');

  return type === 'top_up' ? 'topup' : type;
};

export default function DriverTransactionWheel({
  transactions,
}: Props) {
  const { t } = useTranslation('wallet');
  const { colors } = useTheme();

  const styles = createWalletStyles(colors);

  const [activeIndex, setActiveIndex] = useState(0);

  const indexRef = useRef(0);

  const offset = useRef(
    new Animated.Value(0),
  ).current;

  const ordered = useMemo(
    () => transactions ?? [],
    [transactions],
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dy) > 8 &&
        Math.abs(gesture.dy) > Math.abs(gesture.dx),

      onMoveShouldSetPanResponderCapture: (_, gesture) =>
        Math.abs(gesture.dy) > 8 &&
        Math.abs(gesture.dy) > Math.abs(gesture.dx),

      onPanResponderMove: (_, gesture) => {
        offset.setValue(gesture.dy);
      },

      onPanResponderTerminationRequest: () => false,

      onShouldBlockNativeResponder: () => true,

      onPanResponderRelease: (_, gesture) => {
        if (
          Math.abs(gesture.dy) < 35 ||
          ordered.length < 2
        ) {
          Animated.spring(offset, {
            toValue: 0,
            useNativeDriver: true,
          }).start();

          return;
        }

        const nextIndex =
          gesture.dy < 0
            ? (indexRef.current + 1) % ordered.length
            : (indexRef.current - 1 + ordered.length) %
            ordered.length;

        Animated.timing(offset, {
          toValue: gesture.dy < 0 ? -90 : 90,
          duration: 260,
          useNativeDriver: true,
        }).start(() => {
          indexRef.current = nextIndex;
          setActiveIndex(nextIndex);
          offset.setValue(0);
        });
      },
    }),
  ).current;

  if (!ordered.length) {
    return null;
  }

  const visible = [-1, 0, 1].map(
    relative =>
      ordered[
      (activeIndex + relative + ordered.length) %
      ordered.length
      ],
  );

  return (
    <View
      style={styles.wheel}
      {...panResponder.panHandlers}
    >
      {visible.map((item, position) => {
        const relative = position - 1;

        const type = normalizeType(item.type);

        const positive =
          type === 'topup' || type === 'refund';

        const labelKey = `types.${type}`;

        const label =
          t(labelKey) === labelKey
            ? positive
              ? t('types.topup')
              : t('types.trip_payment')
            : t(labelKey);

        const baseY = relative * 52;

        const translateY = offset.interpolate({
          inputRange: [-90, 0, 90],

          outputRange:
            relative === 0
              ? [-120, 0, 120]
              : relative === 1
                ? [0, baseY, baseY + 24]
                : [baseY - 24, baseY, 0],

          extrapolate: 'clamp',
        });

        const scale = offset.interpolate({
          inputRange: [-90, 0, 90],

          outputRange:
            relative === 0
              ? [0.86, 1, 0.86]
              : relative === 1
                ? [1, 0.92, 0.84]
                : [0.84, 0.92, 1],

          extrapolate: 'clamp',
        });

        const opacity = offset.interpolate({
          inputRange: [-90, 0, 90],

          outputRange:
            relative === 0
              ? [0, 1, 0]
              : relative === 1
                ? [1, 0.62, 0.28]
                : [0.28, 0.62, 1],

          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`${item.id}-${position}`}
            style={[
              styles.transactionCard,
              {
                transform: [
                  { perspective: 700 },
                  { translateY },
                  { scale },
                ],
                opacity,
                zIndex:
                  relative === 0
                    ? 3
                    : relative === 1
                      ? 2
                      : 1,
              },
            ]}
          >
            <LinearBg
              colors={[
                colors.surfaceAccent,
                colors.surface,
              ]}
              style={styles.transactionGradient}
            >
              <View style={styles.transactionTopRow}>
                <Text style={styles.transactionType}>
                  {label}
                </Text>

                <Text
                  style={[
                    styles.transactionAmount,
                    positive
                      ? styles.credit
                      : styles.debit,
                  ]}
                >
                  {positive ? '+' : '-'}
                  {Math.abs(item.amount).toFixed(2)} $
                </Text>
              </View>

              <Text
                numberOfLines={1}
                style={styles.transactionDescription}
              >
                {item.description || label}
              </Text>

              <Text style={styles.transactionDate}>
                {new Date(
                  item.createdAt,
                ).toLocaleDateString()}
              </Text>
            </LinearBg>
          </Animated.View>
        );
      })}
    </View>
  );
}