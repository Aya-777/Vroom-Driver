import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { SidebarItem } from '../types/sidebar.types';
import { useCurrentUser } from '../../../core/store/userStore';
import { useThemeMode, useThemeActions } from '../../../core/store/themeStore';
import { useProfileActions } from '../../profile/hooks/useProfileActions';
import { getMediaUrl } from '../../../core/network/media';

type Navigation = DrawerContentComponentProps['navigation'];

export const useSidebarViewModel = (
  navigation: Navigation,
) => {
  const cachedUser = useCurrentUser();
  const mode = useThemeMode();
  const { toggleMode } = useThemeActions();
  const { logout } = useProfileActions();

  const user = {
    name: cachedUser
      ? `${cachedUser.first_name} ${cachedUser.last_name}`
      : '',
    rating: cachedUser?.rating ?? 5.0,
    avatar: getMediaUrl(cachedUser?.profile_image),
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
    mode,
    toggleTheme: toggleMode,
    logout,
  };
};
