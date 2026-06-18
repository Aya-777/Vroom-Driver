import React from 'react';
import ListItem from './ListItem';
import { View } from 'react-native';
import { createStyles } from '../styles/profile.styles';
import { useTheme } from '../../../core/theme/useTheme';

type Props = {
  items: {
    id: string;
    title: string;
    icon: React.ElementType;
  }[];
};

export default function ListSection({ items }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.listContainer}>
      {items.map(item => (
        <ListItem
          key={item.id}
          title={item.title}
          Icon={item.icon}
        />
      ))}
    </View>
  );
}