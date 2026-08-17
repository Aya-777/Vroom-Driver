import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { SafetySection } from '../../types/safety.types';
import { createSafetyStyles } from '../../styles/safety.styles';
import SafetyRow from './SafetyRow';

interface SafetySectionBlockProps {
    colors: ThemeColors;
    section: SafetySection;
}

export default function SafetySectionBlock({ colors, section }: SafetySectionBlockProps) {
    const { t } = useTranslation('safety');
    const styles = createSafetyStyles(colors);

    return (
        <View>
            <Text style={styles.sectionTitle}>{t(section.titleKey)}</Text>

            {section.items.map(({ id, Icon, titleKey, descKey }) => (
                <SafetyRow
                    key={id}
                    colors={colors}
                    Icon={Icon}
                    title={t(titleKey)}
                    subtitle={t(descKey)}
                />
            ))}
        </View>
    );
}