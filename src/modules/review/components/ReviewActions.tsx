import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/review.styles';

type Props = {
    onCancel: () => void;
    onSubmit: () => void;
};

export default function ReviewActions({
    onCancel,
    onSubmit,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.actionsContainer}>

            <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCancel}
            >
                <Text style={styles.cancelText}>
                    Maybe Later
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={onSubmit}
            >
                <Text style={styles.submitText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}