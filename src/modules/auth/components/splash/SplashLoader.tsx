import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Canvas, Circle, Path, Skia } from '@shopify/react-native-skia';
import Animated, {
    useSharedValue,
    withRepeat,
    withTiming,
    useAnimatedStyle,
    useDerivedValue
} from 'react-native-reanimated';

interface SplashLoaderProps {
    color: string;
    styles: any; 
}

const PIN_PATH_STRING = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";
const pinPath = Skia.Path.MakeFromSVGString(PIN_PATH_STRING);

export const SplashLoader = React.memo(({ color, styles }: SplashLoaderProps) => {
    const step = useSharedValue(0);

    useEffect(() => {
        step.value = withRepeat(
            withTiming(4, { duration: 1600 }),
            -1,
            false
        );
    }, [step]);

    const animatedPinStyle = useAnimatedStyle(() => {
        const translateX = (Math.floor(step.value) % 4) * 25;
        return {
            transform: [{ translateX }] as any,
        };
    });

    const dot1Opacity = useDerivedValue(() => (step.value >= 1 && step.value < 4 ? 1 : 0));
    const dot2Opacity = useDerivedValue(() => (step.value >= 2 && step.value < 4 ? 1 : 0));
    const dot3Opacity = useDerivedValue(() => (step.value >= 3 && step.value < 4 ? 1 : 0));

    return (
        <View style={styles.loaderWrapper}>
            <Canvas style={styles.loaderCanvas}>
                <Circle cx={12} cy={35} r={4} color={color} opacity={dot1Opacity} />
                <Circle cx={37} cy={35} r={4} color={color} opacity={dot2Opacity} />
                <Circle cx={62} cy={35} r={4} color={color} opacity={dot3Opacity} />
            </Canvas>

            <Animated.View style={[styles.pinContainer, animatedPinStyle]}>
                <Canvas style={styles.pinCanvas}>
                    {pinPath && (
                        <Path
                            path={pinPath}
                            color={color}
                            style="fill"
                            transform={[{ scale: 1.5 }]}
                        />
                    )}
                </Canvas>
            </Animated.View>
        </View>
    );
});