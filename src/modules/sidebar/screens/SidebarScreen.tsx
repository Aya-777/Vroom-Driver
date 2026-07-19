import React from 'react';
import {View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import SidebarHeader from '../components/SidebarHeader';
import SidebarItem from '../components/SidebarItem';
import SidebarFooter from '../components/SidebarFooter';

import {useSidebarViewModel} from '../viewmodels/useSidebarViewModel';
import {createStyles} from '../styles/sidebar.styles';
import { useTheme } from '../../../core/theme/useTheme';
import LinearBg from '../../../shared/components/LinearBg';

const SidebarScreen = ({
  navigation,
}: DrawerContentComponentProps) => {
  const {
    user,
    items,
    version,
    handleItemPress,
  } = useSidebarViewModel(navigation);

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View
      style={styles.container}
    >
      <SidebarHeader
        name={user.name}
        rating={user.rating}
        avatar={user.avatar}
      />

      <LinearBg 
        colors={[colors.backgroundSoft, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.content}>
        <View style={styles.menu}>
          {items.map(item => (
            <SidebarItem
              key={item.id}
              item={item}
              onPress={() => handleItemPress(item)}
            />
          ))}
        </View>

        <SidebarFooter version={version} />
      </LinearBg>
    </View>
  );
};

export default SidebarScreen;