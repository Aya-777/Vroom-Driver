import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { useFont, useImage } from '@shopify/react-native-skia';
import { generateRoadPaths } from '../utils/SplashPathUtils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const LOGO_SIZE = 150;
const LOGO_CENTER_X = SCREEN_WIDTH / 2;

export const useSplashLayout = () => {

    const loraFont = useFont(require('../../../assets/fonts/Lora-Bold.ttf'), 56);
  const logoImage = useImage(require('../../../assets/images/logo.png'));

  const isReady = !!loraFont && !!logoImage;

  const layoutData = useMemo(() => {
    if (!loraFont) {
      return { roadPath: null, customDashPath: null, textChars: [], textY: 0 };
    }

    const logoY = SCREEN_HEIGHT * 0.36 - LOGO_SIZE / 2;
    const vanishingPointY = logoY + LOGO_SIZE * 0.7;
    const computedTextY = SCREEN_HEIGHT * 0.20;

    const paths = generateRoadPaths({
      screenWidth: SCREEN_WIDTH,
      screenHeight: SCREEN_HEIGHT + 50,
      logoCenterX: LOGO_CENTER_X,
      vanishingPointY,
      roadTopWidth: 33,
    });

    const word = 'VROOM';
    let currentX = SCREEN_WIDTH / 2 - loraFont.getTextWidth(word) / 2;
    const chars = word.split('').map((char) => {
      const charX = currentX;
      currentX += loraFont.getTextWidth(char);
      return { char, x: charX };
    });

    return {
      roadPath: paths.roadPath,
      customDashPath: paths.customDashPath,
      textChars: chars,
      textY: computedTextY,
    };
  }, [loraFont]);

  return {
    loraFont,
    logoImage,
    isReady,
    ...layoutData,
  };
};