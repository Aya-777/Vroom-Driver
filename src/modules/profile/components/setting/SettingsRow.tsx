import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeColors } from '../../../../core/theme/theme.types';
import ArrowIcon from '../../../../assets/svg/arrows/arrow.svg';
import { createSettingsStyles } from '../../styles/settings.styles';

interface SettingsRowProps {
    colors: ThemeColors;
    Icon: React.FC<{ width: number; height: number; fill: string }>;
    title: string;
    subtitle: string;
}

export default function SettingsRow({ colors, Icon, title, subtitle }: SettingsRowProps) {
    const styles = createSettingsStyles(colors);

    return (
        <TouchableOpacity style={styles.row}>
            <Icon width={22} height={22} fill={colors.primary} />

            <View style={styles.rowCopy}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowSubtitle}>{subtitle}</Text>
            </View>

            <ArrowIcon width={20} height={20} fill={colors.textMuted} />
        </TouchableOpacity>
    );
}