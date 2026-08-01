import React, { useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import SunAnimation from '../../../assets/animations/Sun.json';
import MoonAnimation from '../../../assets/animations/Moon.json';
import { ThemeMode } from '../../../core/theme/theme.types';

type Props = {
    mode: ThemeMode;
    onToggle: () => void;
};

const ANIMATION_SIZE = 50;

export default function ThemeToggleButton({ mode, onToggle }: Props) {

    const lottieRef = useRef<LottieView>(null);

    useEffect(() => {
        lottieRef.current?.play();
    }, [mode]);

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onToggle} hitSlop={10}>
            <LottieView
                key={mode}
                ref={lottieRef}
                source={mode === 'dark' ? MoonAnimation : SunAnimation}
                autoPlay
                loop={false}
                style={{ width: ANIMATION_SIZE, height: ANIMATION_SIZE }}
            />
        </TouchableOpacity>
    );
}