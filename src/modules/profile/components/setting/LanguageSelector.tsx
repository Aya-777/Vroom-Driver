import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { SupportedLanguage } from '../../../../core/i18n/types';
import ArrowIcon from '../../../../assets/svg/arrows/arrow.svg';
import { createSettingsStyles } from '../../styles/settings.styles';

const languageOptions: { code: SupportedLanguage; labelKey: string }[] = [
    { code: 'en', labelKey: 'english' },
    { code: 'ar', labelKey: 'arabic' },
];

interface LanguageSelectorProps {
    colors: ThemeColors;
    language: SupportedLanguage;
    open: boolean;
    onToggle: () => void;
    onSelect: (lang: SupportedLanguage) => void;
}

export default function LanguageSelector({
    colors,
    language,
    open,
    onToggle,
    onSelect,
}: LanguageSelectorProps) {
    const { t } = useTranslation('profile');
    const styles = createSettingsStyles(colors);

    return (
        <View style={styles.languageBlock}>
            <Text style={styles.sectionTitle}>{t('language')}</Text>

            <TouchableOpacity style={styles.languageSelector} onPress={onToggle}>
                <Text style={styles.languageValue}>
                    {language === 'ar' ? t('arabic') : t('english')}
                </Text>
                <ArrowIcon width={18} height={18} fill={colors.textMuted} />
            </TouchableOpacity>

            {open && (
                <View style={styles.languageOptions}>
                    {languageOptions.map((option) => (
                        <TouchableOpacity
                            key={option.code}
                            style={[
                                styles.languageOption,
                                language === option.code && styles.languageOptionActive,
                            ]}
                            onPress={() => onSelect(option.code)}
                        >
                            <Text style={styles.languageOptionText}>{t(option.labelKey)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}