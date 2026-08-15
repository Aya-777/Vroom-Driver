import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';

type Props = {
    icon: React.ReactNode;
    title: string;
    value: string;
    icon2?: React.ReactNode;
    title2?: string;
    value2?: string;
};

export default function DetailBox({
    icon,
    title,
    value,
    icon2,
    title2,
    value2,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.box}>
            <View style={styles.boxHeader}>
                {icon}
                <Text style={styles.boxTitle}>{title}</Text>
            </View>

            <Text style={styles.boxValue}>{value}</Text>

            <View style={styles.line} />

            {value2 !== undefined && title2 && (
                <>
                    <View style={styles.boxHeader}>
                        {icon2}
                        <Text style={styles.boxTitle2}>{title2}{': '}</Text>
                    </View>
                    <Text style={styles.boxValue}>{value2}</Text>
                </>
            )}
        </View>
    );
}