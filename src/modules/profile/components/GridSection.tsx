import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import GridCard from './GridCard';

type GridItem = {
  id: string;
  title: string;
  icon: React.ElementType;
};

type Props = {
  items: GridItem[];
  onItemPress?: (itemId: string) => void;
};

export default function GridSection({ items, onItemPress }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.gridSection}>
      {items.map(item => (
        <GridCard
          key={item.id}
          title={item.title}
          Icon={item.icon}
          onPress={onItemPress ? () => onItemPress(item.id) : undefined}
        />
      ))}
    </View>
  );
}
