import {SvgProps} from 'react-native-svg';
import {MainTabsParamList} from '../../../navigation/main/mainTypes';

export type SidebarRoute = keyof MainTabsParamList;

export type SidebarItem = {
  id: string;
  label: string;
  icon: React.ComponentType<SvgProps>;
  route?: SidebarRoute;
};