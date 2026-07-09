/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';
import { Radius, Typography, Shadows, Spacing } from '../../../../core/theme/tokens';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    colors: any;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    activeOpacity?: number;
}

export default function Button({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    colors,
    style,
    textStyle,
    activeOpacity = 0.8,
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: colors.primary },
                style,
                (disabled || isLoading) && { opacity: 0.7 }
            ]}
            onPress={onPress}
            activeOpacity={activeOpacity}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={colors.background} />
            ) : (
                <Text style={[styles.buttonText, { color: colors.surface }, textStyle]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '70%',
        height: 48,
        borderRadius: Radius.full,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Spacing.xl,
        ...Shadows.large,
    },
    buttonText: {
        ...Typography.semiBoldBody,
    },
});