import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSplashViewModel } from '../viewmodels/useSplashViewModel';
import { useSplashAnimation } from '../hooks/useSplashAnimation';
import { useSplashLayout } from '../hooks/useSplashLayout';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/Splash.styles';
import { SplashRoad } from '../components/splash/SplashRoad';
import { SplashText } from '../components/splash/SplashText';
import { SplashLogo } from '../components/splash/SplashLogo';
import { SplashLoader } from '../components/splash/SplashLoader';
import LinearBg from '../../../shared/components/LinearBg';
import { Canvas } from '@shopify/react-native-skia';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

export default function SplashScreen({ onAnimationEnd }: SplashScreenProps) {
  const { handleAnimationComplete } = useSplashViewModel(onAnimationEnd);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { isReady, loraFont, logoImage, roadPath, customDashPath, textChars, textY } = useSplashLayout();

  const {
    roadProgress,
    textOpacity,
    textScale,
    textProgress,
    logoTranslateY,
    logoScale,
  } = useSplashAnimation(handleAnimationComplete, isReady);

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ scale: textScale.value }],
  }));

  if (!isReady || !logoImage) {
    return (
      <LinearBg
        style={[styles.container, styles.centered]}
        colors={[colors.backgroundSoft, colors.background, colors.background]}
      >
        <SplashLoader color={colors.primary} styles={styles} />
      </LinearBg>
    );
  }

  return (
    <LinearBg
      style={styles.container}
      colors={[colors.backgroundSoft, colors.background, colors.background]}
    >
      <View style={StyleSheet.absoluteFill}>
        <SplashRoad
          styles={styles}
          roadPath={roadPath}
          customDashPath={customDashPath}
          roadProgress={roadProgress}
        />
      </View>

      <Animated.View style={[StyleSheet.absoluteFill, animatedTextStyle]} pointerEvents="none">
        <Canvas style={styles.canvas}>
          <SplashText
            textChars={textChars}
            textY={textY}
            loraFont={loraFont}
            textProgress={textProgress}
            textColor={colors.primary}
          />
        </Canvas>
      </Animated.View>

      <SplashLogo
        logoImage={logoImage}
        primaryColor={colors.primary}
        logoScale={logoScale}
        logoTranslateY={logoTranslateY}
        styleLayer={styles.logoLayer}
      />
    </LinearBg>
  );
}