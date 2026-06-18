import React from 'react';
import { Text } from '@shopify/react-native-skia';
import { useDerivedValue, SharedValue } from 'react-native-reanimated';
import { View } from 'react-native';

interface AnimatedCharacterProps {
  char: string;
  x: number;
  y: number;
  font: any;
  index: number;
  progress: SharedValue<number>;
  textColor: string;
}

const AnimatedCharacter = ({ char, x, y, font, index, progress ,textColor }: AnimatedCharacterProps) => {

  const charOpacity = useDerivedValue(() => {
    return progress.value >= index ? 1 : 0;
  });

  return (
    <Text
      x={x}
      y={y}
      text={char}
      font={font}
      color={textColor}
      opacity={charOpacity}
      
    />
  );
};

interface SplashTextProps {
  textChars: Array<{ char: string; x: number }>;
  textY: number;
  loraFont: any;
  textProgress: SharedValue<number>;
  textColor : string;
}

export const SplashText = ({ textChars, textY, loraFont, textProgress , textColor}: SplashTextProps) => {
  return (
    <View>
      {textChars.map((item, index) => (
        <AnimatedCharacter
          key={index}
          char={item.char}
          x={item.x}
          y={textY}
          font={loraFont}
          index={index}
          progress={textProgress}
          textColor={textColor}
        />
      ))}
    </View>
  );
};