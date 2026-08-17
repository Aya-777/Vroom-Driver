import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createSettingsStyles } from '../../styles/settings.styles';

interface DeleteAccountButtonProps {
    colors: ThemeColors;
    isDeleting: boolean;
    onPress: () => void;
}

export default function DeleteAccountButton({
    colors,
    isDeleting,
    onPress,
}: DeleteAccountButtonProps) {
    const { t } = useTranslation('profile');
    const styles = createSettingsStyles(colors);

    return (
        <TouchableOpacity style={styles.deleteButton} onPress={onPress} disabled={isDeleting}>
            <Text style={styles.deleteText}>
                {isDeleting ? t('deleting') : t('deleteMyAccount')}
            </Text>
        </TouchableOpacity>
    );
}