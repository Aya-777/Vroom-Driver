import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';

type Props = {
    length?: number;
    value: string;
    editable?: boolean;
    error?: boolean;
    onChangeValue?: (v: string) => void;
};

export default function PinBoxes({
    length = 4,
    value,
    editable = false,
    error = false,
    onChangeValue,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const inputRef = useRef<TextInput>(null);

    const digits = value.padEnd(length, ' ').split('').slice(0, length);

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => editable && inputRef.current?.focus()}
            style={styles.pinBoxesRow}
        >
            {digits.map((d, i) => (
                <View
                    key={i}
                    style={[styles.pinBox, error && styles.pinBoxError]}
                >
                    <Text style={styles.pinBoxText}>{d.trim()}</Text>
                </View>
            ))}

            {editable && (
                <TextInput
                    ref={inputRef}
                    value={value}
                    onChangeText={text => onChangeValue?.(text.replace(/[^0-9]/g, '').slice(0, length))}
                    keyboardType="number-pad"
                    maxLength={length}
                    style={styles.hiddenInput}
                    autoFocus
                />
            )}
        </TouchableOpacity>
    );
}