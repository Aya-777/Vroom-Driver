import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createSafetyStyles } from '../../styles/safety.styles';

export default function SafetyIntro({ colors }: { colors: ThemeColors }) {
    const { t } = useTranslation('safety');
    const styles = createSafetyStyles(colors);

    return (
        <View style={styles.introCard}>
            <Text style={styles.introTitle}>{t('introTitle')}</Text>
            <Text style={styles.introSubtitle}>{t('introSubtitle')}</Text>
        </View>
    );
}