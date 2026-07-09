import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';

import ArrowIcon from '../../../assets/svg/arrows/arrow.svg';

type Props = {
    title: string;
    Icon: React.ElementType;
    onPress?: () => void;
    isLast?: boolean;
};

export default function ListItem({ title, Icon, onPress }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.listItem,
            ]}
        >
            <View style={styles.listItemLeft}>
                <Icon width={20} height={20} fill={colors.textSecondary} />

                <Text
                    style={[
                        styles.listItemTitle,
                    ]}
                >
                    {title}
                </Text>
            </View>

            <ArrowIcon fill={colors.textSecondary} />
        </TouchableOpacity>
    );
}