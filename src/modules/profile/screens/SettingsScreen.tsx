import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../../core/theme/useTheme';
import { ProfileStackScreenProps } from '../../../navigation/main/profile/profileTypes';
import { useSettingsViewModel } from '../viewmodels/useSettingsViewModel';
import { createSettingsStyles } from '../styles/settings.styles';

import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import AccountCard from '../components/setting/AccountCard';
import LanguageSelector from '../components/setting/LanguageSelector';
import SettingsRow from '../components/setting/SettingsRow';
import DeleteAccountButton from '../components/setting/DeleteAccountButton';

import PrivacyIcon from '../../../assets/svg/profile/privacy.svg';
import AppearanceIcon from '../../../assets/svg/profile/appearance.svg';
import AccessibilityIcon from '../../../assets/svg/profile/accessibility.svg';
import RideCheckIcon from '../../../assets/svg/profile/rideCheck.svg';
import ManageIcon from '../../../assets/svg/profile/manage.svg';
import FacebookIcon from '../../../assets/svg/profile/facebook.svg';
import InstagramIcon from '../../../assets/svg/profile/instagram.svg';

export default function SettingsScreen() {
    const { colors } = useTheme();
    const styles = createSettingsStyles(colors);
    const { t } = useTranslation('profile');
    const navigation = useNavigation<ProfileStackScreenProps<'Settings'>['navigation']>();

    const {
        language,
        languageOpen,
        setLanguageOpen,
        selectLanguage,
        confirmDeleteAccount,
        isDeleting,
    } = useSettingsViewModel();

    const rows = [
        [PrivacyIcon, t('privacy'), t('privacyDesc')],
        [AppearanceIcon, t('appearance'), t('appearanceDesc')],
        [AccessibilityIcon, t('accessibility'), t('accessibilityDesc')],
        [RideCheckIcon, t('rideCheck'), t('rideCheckDesc')],
        [ManageIcon, t('manageVroomAccount'), t('manageVroomAccountDesc')],
        [FacebookIcon, t('facebook'), t('facebookDesc')],
        [InstagramIcon, t('instagram'), t('instagramDesc')],
    ] as const;

    return (
        <LinearBg style={styles.container} colors={[colors.backgroundSoft, colors.background]}>
            <SubHeader title={t('settings')} onBackPress={() => navigation.navigate('ProfileHome')} />

            <ScrollView contentContainerStyle={styles.content}>
                <AccountCard colors={colors} />

                <LanguageSelector
                    colors={colors}
                    language={language}
                    open={languageOpen}
                    onToggle={() => setLanguageOpen((v) => !v)}
                    onSelect={selectLanguage}
                />

                <Text style={styles.sectionTitle}>{t('appSettings')}</Text>

                {rows.map(([Icon, title, subtitle], index) => (
                    <View key={title}>
                        {index === 3 && <Text style={styles.sectionTitle}>{t('safety')}</Text>}
                        {index === 5 && <Text style={styles.sectionTitle}>{t('connectWithVroom')}</Text>}
                        <SettingsRow colors={colors} Icon={Icon} title={title} subtitle={subtitle} />
                    </View>
                ))}

                <DeleteAccountButton colors={colors} isDeleting={isDeleting} onPress={confirmDeleteAccount} />
            </ScrollView>
        </LinearBg>
    );
}