import React from 'react';
import { View } from 'react-native';
import GridCard from './GridCard';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';

type Props = {
    items: {
        id: string;
        title: string;
        icon: React.ElementType;
    }[];
};

export default function GridSection({ items }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    return (
        <View
            style={styles.gridSection}
        >
            {items.map(item => (
                <GridCard
                    key={item.id}
                    title={item.title}
                    Icon={item.icon}
                />
            ))}
        </View>
    );
}