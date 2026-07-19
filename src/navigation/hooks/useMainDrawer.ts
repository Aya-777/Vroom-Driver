import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {MainDrawerParamList} from '../main/mainTypes';

type MainDrawerNavigation =
  DrawerNavigationProp<MainDrawerParamList>;

export const useMainDrawer = () => {
  const navigation = useNavigation();

  const drawerNavigation =
    navigation.getParent<MainDrawerNavigation>('MainDrawer');

  const openSidebar = () => {
    drawerNavigation?.openDrawer();
  };

  const closeSidebar = () => {
    drawerNavigation?.closeDrawer();
  };

  const toggleSidebar = () => {
    drawerNavigation?.toggleDrawer();
  };

  return {
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};