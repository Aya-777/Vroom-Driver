import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import StarIcon from './StarIcon';
import { createStyles } from '../styles/review.styles';
import { useTheme } from '../../../core/theme/useTheme';

type Props = {
    rating: number;
    onChange: (rating: number) => void;
};

export default function RatingStars({
    rating,
    onChange,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                    key={star}
                    activeOpacity={0.8}
                    onPress={() => onChange(star)}
                >
                    <StarIcon active={star <= rating} />

                </TouchableOpacity>
            ))}
        </View>
    );
}