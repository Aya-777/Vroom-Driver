import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from './Input';
import LinearBg from './LinearBg';
import { useTheme } from '../../core/theme/useTheme';
import { createStyles } from '../styles/changePhoneForm.styles';

type Props = {
    descriptionLabel: string;
    fieldLabel: string;
    placeholder: string;
    nextLabel: string;
    loadingLabel: string;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
    error?: string;
};

export default function ChangePhoneForm({
    descriptionLabel,
    fieldLabel,
    placeholder,
    nextLabel,
    loadingLabel,
    value,
    onChangeText,
    onSubmit,
    isLoading,
    error,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.content}>
            <Text style={styles.description}>{descriptionLabel}</Text>

            <View style={styles.form}>
                <Text style={styles.label}>{fieldLabel}</Text>

                <Input
                    type="phone"
                    placeholder={placeholder}
                    placeholderTextColor={colors.textMuted}
                    value={value}
                    onChangeText={onChangeText}
                    error={error}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                />

                <TouchableOpacity onPress={onSubmit} disabled={isLoading}>
                    <LinearBg style={styles.button} colors={[colors.textPrimary, colors.surface]}>
                        <Text style={styles.buttonText}>{isLoading ? loadingLabel : nextLabel}</Text>
                    </LinearBg>
                </TouchableOpacity>
            </View>
        </View>
    );
}