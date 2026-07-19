import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {SIDEBAR_ITEMS} from '../constants/sidebarItems';
import {SidebarItem} from '../types/sidebar.types';

type Navigation =
  DrawerContentComponentProps['navigation'];

export const useSidebarViewModel = (
  navigation: Navigation,
) => {
  const user = {
    name: 'John Doe',
    rating: 4.9,
    avatar: undefined,
  };

  const handleItemPress = (item: SidebarItem) => {
    if (!item.route) {
      return;
    }

    navigation.navigate('MainTabs', {
      screen: item.route,
    });

    // We will connect the actual routes here
    // once the destination screens are registered.

    navigation.closeDrawer();
  };

  return {
    user,
    items: SIDEBAR_ITEMS,
    version: '2.4.0',
    handleItemPress,
  };
};