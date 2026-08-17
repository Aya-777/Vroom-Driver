import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../../core/theme/useTheme';
import { ProfileStackScreenProps } from '../../../navigation/main/profile/profileTypes';
import { createSafetyStyles } from '../styles/safety.styles';
import { safetySections } from '../constants/safetyData';

import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import SafetyIntro from '../components/safety/SafetyIntro';
import SafetySectionBlock from '../components/safety/SafetySectionBlock';
import SafetyTipsCard from '../components/safety/SafetyTipsCard';

export default function SafetyScreen() {
    const { colors } = useTheme();
    const styles = createSafetyStyles(colors);
    const { t } = useTranslation('safety');
    const navigation = useNavigation<ProfileStackScreenProps<'Safety'>['navigation']>();

    return (
        <LinearBg style={styles.container} colors={[colors.backgroundSoft, colors.background]}>
            <SubHeader title={t('screenTitle')} onBackPress={() => navigation.goBack()} />

            <ScrollView contentContainerStyle={styles.content}>
                <SafetyIntro colors={colors} />

                {safetySections.map((section) => (
                    <SafetySectionBlock key={section.id} colors={colors} section={section} />
                ))}

                <SafetyTipsCard colors={colors} />
            </ScrollView>
        </LinearBg>
    );
}