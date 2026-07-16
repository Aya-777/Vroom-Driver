import React from 'react';
import { Text, View } from 'react-native';
import LinearBg from '../../../shared/components/LinearBg';
import Header from '../../../shared/components/SubHeader';
import { useTheme } from '../../../core/theme/useTheme';
import { useResetPasswordViewModel } from '../viewmodels/useResetPasswordViewModel';
import { createStyles } from '../styles/resetPassword.styles';
import { AuthStackScreenProps } from '../../../navigation/auth/authTypes';
import { useTranslation } from 'react-i18next';
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm';

export default function ResetPasswordScreen({ navigation, route }: AuthStackScreenProps<'ResetPassword'>) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['auth']);

    const {
        password,
        confirmPassword,
        error,
        isLoading,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleUpdatePassword,
        handleBack,
    } = useResetPasswordViewModel(navigation , route);

    return (
        <LinearBg
            style={styles.container}
            colors={[colors.backgroundSoft, colors.background]}
        >
            <Header
                title={t('setNewPassword')}
                onBackPress={handleBack}
            />

            <View style={styles.content}>
                <Text style={styles.description}>
                    {t('setNewPasswordDescription')}
                </Text>

                <ResetPasswordForm
                    styles={styles}
                    colors={colors}
                    passwordValue={password}
                    confirmPasswordValue={confirmPassword}
                    error={error}
                    isLoading={isLoading}
                    onPasswordChange={handlePasswordChange}
                    onConfirmPasswordChange={handleConfirmPasswordChange}
                    onSubmit={handleUpdatePassword}
                />
            </View>
        </LinearBg>
    );
}