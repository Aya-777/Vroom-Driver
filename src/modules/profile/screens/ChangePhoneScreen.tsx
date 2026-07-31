import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import ChangePhoneForm from '../../../shared/components/ChangePhoneForm';
import { useTheme } from '../../../core/theme/useTheme';
import { useChangePhoneRequestViewModel } from '../../../shared/hooks/useChangePhoneRequestViewModel';
import { profileRepository } from '../repositories/profileRepository';
import { createStyles } from '../styles/profile.styles';

export default function ChangePhoneScreen() {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['profile', 'common']);

    const vm = useChangePhoneRequestViewModel({
        requestOtp: profileRepository.requestPhoneChange,
        onSuccess: (newPhone) => navigation.navigate('ChangePhoneOtp', { newPhone }),
    });

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <SubHeader title={t('changePhoneNumber')} onBackPress={() => navigation.goBack()} />
            <ChangePhoneForm
                descriptionLabel={t('enterNewPhoneDescription')}
                fieldLabel={t('newPhoneNumber')}
                placeholder={t('enterPhoneNumber')}
                nextLabel={t('common:next')}
                loadingLabel={t('common:loading')}
                value={vm.newPhone}
                onChangeText={vm.setNewPhone}
                onSubmit={vm.handleNext}
                isLoading={vm.isLoading}
                error={vm.error ? t(`common:${vm.error}`, { defaultValue: vm.error }) : undefined}
            />
        </LinearBg>
    );
}