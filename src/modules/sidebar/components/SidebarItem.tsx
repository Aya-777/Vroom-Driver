import React from 'react';
import {Pressable, Text} from 'react-native';

import {SidebarItem as SidebarItemType} from '../types/sidebar.types';
import {createStyles} from '../styles/sidebar.styles';
import { useTheme } from '../../../core/theme/useTheme';
import { useTranslation } from 'react-i18next';


type Props = {
  item: SidebarItemType;
  onPress: () => void;
};

const SidebarItem = ({item, onPress}: Props) => {
  const Icon = item.icon;
  
  const { colors } = useTheme();
  const styles = createStyles(colors);    
  const {t} = useTranslation('sidebar');

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.menuItem,
        pressed && styles.menuItemPressed,
      ]}>
      <Icon width={18} height={18} style={styles.menuIcon as any} />
      
      <Text style={styles.menuLabel}>
        {t(item.label)}
      </Text>
    
    </Pressable>
  );
};

export default SidebarItem;