import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createSafetyStyles } from '../../styles/safety.styles';

export default function SafetyTipsCard({ colors }: { colors: ThemeColors }) {
    const { t } = useTranslation('safety');
    const styles = createSafetyStyles(colors);
    const tips = t('tips', { returnObjects: true }) as string[];

    return (
        <View style={styles.tipsCard}>
            <Text style={styles.tipsTitle}>{t('safetyTips')}</Text>

            {tips.map((tip, index) => (
                <View style={styles.tipRow} key={index}>
                    <Text style={styles.tipBullet}>•</Text>
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
            ))}
        </View>
    );
}