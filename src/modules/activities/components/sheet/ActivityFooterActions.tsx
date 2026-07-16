import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ActivityFooterActions({
    styles,
    onReview,
    onReride,
}: any) {
    return (
        <View style={styles.footer}>

            <TouchableOpacity
                style={styles.reviewButton}
                onPress={onReview}
            >
                <Text style={styles.reviewText}>Leave Review</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.rerideButton}
                onPress={onReride}
            >
                <Text style={styles.rerideText}>Re-Ride</Text>
            </TouchableOpacity>

        </View>
    );
}