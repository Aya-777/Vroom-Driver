import React from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createSafetyStyles } from '../../styles/safety.styles';

interface SafetyRowProps {
    colors: ThemeColors;
    Icon: React.FC<SvgProps>;
    title: string;
    subtitle: string;
}

export default function SafetyRow({ colors, Icon, title, subtitle }: SafetyRowProps) {
    const styles = createSafetyStyles(colors);

    return (
        <View style={styles.row}>
            <Icon width={22} height={22} fill={colors.primary} />

            <View style={styles.rowCopy}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowSubtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}