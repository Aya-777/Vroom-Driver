import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, LayoutChangeEvent } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';

const ICON_SIZE = 70;
const ANIMATION_DURATION = 4000;

export default function AnimatedDivider() {
  const [lineWidth, setLineWidth] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef<LottieView>(null);

  const { colors } = useTheme();
  const styles = createStyles(colors);


  const handleLayout = (e: LayoutChangeEvent) => {
    setLineWidth(e.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (lineWidth > 0) {
      lottieRef.current?.play(); 

      Animated.timing(progress, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          lottieRef.current?.pause(); 
        }
      });
    }
  }, [lineWidth, progress]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [Math.max(lineWidth - ICON_SIZE, 0), 0],
  });

  return (
    <View style={styles.wrapper} onLayout={handleLayout}>
      <View style={[styles.line, { backgroundColor: colors.background + '40' }]} />

      {lineWidth > 0 && (
        <Animated.View style={[styles.iconWrapper, { transform: [{ translateX }] }]}>
          <LottieView
            ref={lottieRef}
            source={require('../../../assets/animations/Car.json')}
            loop
            autoPlay={false}
            style={styles.icon}
          />
        </Animated.View>
      )}
    </View>
  );
}
