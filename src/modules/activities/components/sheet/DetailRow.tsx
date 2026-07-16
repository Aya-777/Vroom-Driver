import React from 'react';
import { View, Text } from 'react-native';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createStyles } from '../../styles/activityDetails.styles';

type Props = {
    label: string;
    value: string;
    colors: ThemeColors;
};

export default function DetailRow({ label, value, colors }: Props) {
    const styles = createStyles(colors);

    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}
