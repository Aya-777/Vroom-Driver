import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import ArrowIcon from '../../../../assets/svg/arrows/arrow.svg';
import { createSettingsStyles } from '../../styles/settings.styles';

export default function AccountCard({ colors }: { colors: ThemeColors }) {
    const { t } = useTranslation('profile');
    const styles = createSettingsStyles(colors);

    return (
        <View style={styles.accountCard}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>V</Text>
            </View>

            <View style={styles.accountCopy}>
                <Text style={styles.accountName}>{t('vroomAccount')}</Text>
                <Text style={styles.accountDetail}>
                    {t('manageYourPersonalInformation')}
                </Text>
            </View>

            <ArrowIcon width={20} height={20} fill={colors.textMuted} />
        </View>
    );
}