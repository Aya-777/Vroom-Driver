import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { PinMask } from './PinShape';

type Props = {
    width?: number;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const ASPECT_RATIO = 520 / 348; 

export default function PinFrame({
    width = 140,
    backgroundColor = 'rgba(0,0,0,0.15)',
    style,
    children,
}: Props) {
    const height = width * ASPECT_RATIO;

    return (
        <View style={[{ width, height }, style]}>
            <MaskedView style={StyleSheet.absoluteFill} maskElement={<PinMask />}>
                <View style={[StyleSheet.absoluteFill, { backgroundColor }]} />
                <View style={StyleSheet.absoluteFill}>{children}</View>
            </MaskedView>
        </View>
    );
}