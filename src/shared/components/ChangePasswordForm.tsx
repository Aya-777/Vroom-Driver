import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Input from './Input';
import { useTheme } from '../../core/theme/useTheme';
import { createStyles } from '../styles/changePasswordForm.styles';

import PasswordIcon from '../../assets/svg/common/password.svg';
import VisibilityOnIcon from '../../assets/svg/common/visibilityOn.svg';
import VisibilityOffIcon from '../../assets/svg/common/visibilityOff.svg';

type Props = {
    oldPasswordLabel: string;
    oldPasswordPlaceholder: string;
    newPasswordLabel: string;
    newPasswordPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    submitLabel: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    onOldPasswordChange: (text: string) => void;
    onNewPasswordChange: (text: string) => void;
    onConfirmPasswordChange: (text: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
    error?: string;
};

export default function ChangePasswordForm({
    oldPasswordLabel,
    oldPasswordPlaceholder,
    newPasswordLabel,
    newPasswordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    submitLabel,
    oldPassword,
    newPassword,
    confirmPassword,
    onOldPasswordChange,
    onNewPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
    isLoading,
    error,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const renderVisibilityIcon = (isVisible?: boolean) =>
        isVisible ? (
            <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
        ) : (
            <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
        );

    return (
        <View style={styles.form}>
            <Text style={styles.label}>{oldPasswordLabel}</Text>
            <Input
                type="password"
                placeholder={oldPasswordPlaceholder}
                placeholderTextColor={colors.textMuted}
                value={oldPassword}
                onChangeText={onOldPasswordChange}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                renderLeftIcon={() => <PasswordIcon width={20} height={20} fill={colors.primary} />}
                renderRightIcon={renderVisibilityIcon}
            />

            <Text style={styles.label}>{newPasswordLabel}</Text>
            <Input
                type="password"
                placeholder={newPasswordPlaceholder}
                placeholderTextColor={colors.textMuted}
                value={newPassword}
                onChangeText={onNewPasswordChange}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                renderLeftIcon={() => <PasswordIcon width={20} height={20} fill={colors.primary} />}
                renderRightIcon={renderVisibilityIcon}
            />

            <Text style={styles.label}>{confirmPasswordLabel}</Text>
            <Input
                type="password"
                placeholder={confirmPasswordPlaceholder}
                placeholderTextColor={colors.textMuted}
                value={confirmPassword}
                onChangeText={onConfirmPasswordChange}
                error={error}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                renderLeftIcon={() => <PasswordIcon width={20} height={20} fill={colors.primary} />}
                renderRightIcon={renderVisibilityIcon}
            />

            <TouchableOpacity style={styles.button} onPress={onSubmit} disabled={isLoading} activeOpacity={0.85}>
                {isLoading ? (
                    <ActivityIndicator color={colors.surface} />
                ) : (
                    <Text style={styles.buttonText}>{submitLabel}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}