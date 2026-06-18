import React from 'react';
import { Canvas, Circle, BlurMask, Image, SkImage } from '@shopify/react-native-skia';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

const LOGO_SIZE = 150;
const GLOW_SIZE = 260;
const PADDING = (GLOW_SIZE - LOGO_SIZE) / 2;

interface SplashLogoProps {
  logoImage: SkImage;
  primaryColor: string;
  logoScale: SharedValue<number>;
  logoTranslateY: SharedValue<number>;
  styleLayer: any;
}

export const SplashLogo = React.memo(({ 
  logoImage, 
  primaryColor, 
  logoScale, 
  logoTranslateY, 
  styleLayer 
}: SplashLogoProps) => {
  
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: logoScale.value,
    transform: [
      { translateY: logoTranslateY.value },
      { scale: logoScale.value }
    ],
  }));

  return (
    <Animated.View style={[styleLayer, animatedStyle]}>
      <Canvas style={{ width: GLOW_SIZE, height: GLOW_SIZE }}>
        <Circle
          cx={PADDING + LOGO_SIZE / 2}
          cy={PADDING + LOGO_SIZE / 2}
          r={30}
          color={primaryColor}
          opacity={0.5}
        >
          <BlurMask blur={40} style="normal" />
        </Circle>
        
        <Image
          image={logoImage}
          x={PADDING}
          y={PADDING}
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          fit="contain"
        />
      </Canvas>
    </Animated.View>
  );
});