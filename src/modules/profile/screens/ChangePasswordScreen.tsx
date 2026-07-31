import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import ChangePasswordForm from '../../../shared/components/ChangePasswordForm';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../../../shared/styles/changePasswordForm.styles';
import { useChangePasswordViewModel } from '../../../shared/hooks/useChangePasswordViewModel';
import { profileRepository } from '../repositories/profileRepository';

const LOCAL_ERROR_KEYS = ['pleaseFillAllFields', 'passwordsDoNotMatch', 'passwordLength'];

export default function ChangePasswordScreen() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['profile', 'common']);

    const vm = useChangePasswordViewModel({
        onSubmit: profileRepository.changePassword,
        onSuccess: () => navigation.goBack(),
    });

    const displayError = vm.error
        ? LOCAL_ERROR_KEYS.includes(vm.error)
            ? t(`common:${vm.error}`)
            : vm.error
        : undefined;

    return (
        <LinearBg style={styles.container} colors={[colors.backgroundSoft, colors.background]}>
            <SubHeader title={t('changePassword')} onBackPress={() => navigation.goBack()} />

            <View style={styles.content}>
                <Text style={styles.description}>{t('changePasswordDescription')}</Text>

                <ChangePasswordForm
                    oldPasswordLabel={t('oldPassword')}
                    oldPasswordPlaceholder={t('enterOldPassword')}
                    newPasswordLabel={t('newPassword')}
                    newPasswordPlaceholder={t('enterNewPassword')}
                    confirmPasswordLabel={t('confirmPassword')}
                    confirmPasswordPlaceholder={t('confirmNewPassword')}
                    submitLabel={t('updatePassword')}
                    oldPassword={vm.oldPassword}
                    newPassword={vm.newPassword}
                    confirmPassword={vm.confirmPassword}
                    onOldPasswordChange={vm.handleOldPasswordChange}
                    onNewPasswordChange={vm.handleNewPasswordChange}
                    onConfirmPasswordChange={vm.handleConfirmPasswordChange}
                    onSubmit={vm.handleSubmit}
                    isLoading={vm.isLoading}
                    error={displayError}
                />
            </View>
        </LinearBg>
    );
}