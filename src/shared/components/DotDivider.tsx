import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../core/theme/useTheme';

export default function DotDivider() {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={[styles.line, { backgroundColor: colors.border }]} />
            <View style={[styles.dot, { backgroundColor: colors.border }]} />
            <View style={[styles.line, { backgroundColor: colors.border }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 12,
    },
    line: { flex: 1, height: 1 },
    dot: { width: 4, height: 4, borderRadius: 2, marginHorizontal: 6 },
});