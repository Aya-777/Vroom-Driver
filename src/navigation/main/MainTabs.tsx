import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MainTabsParamList } from './mainTypes';

import { useTheme } from '../../core/theme/useTheme';
import { Typography, Radius, Shadows } from '../../core/theme/tokens';

import HomeStack from './home/HomeStack';
import ProfileStack from './profile/ProfileStack';
import ActivityStack from './activity/ActivityStack';

import { SvgProps } from 'react-native-svg';
import HomeActive from '../../assets/svg/common/home.svg';
import HomeInactive from '../../assets/svg/common/home.svg';
import CarActive from '../../assets/svg/common/ride.svg';
import CarInactive from '../../assets/svg/common/ride.svg';
import ProfileActive from '../../assets/svg/profile/profile.svg';
import ProfileInactive from '../../assets/svg/profile/profile.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../../core/i18n';

const Tab = createBottomTabNavigator<MainTabsParamList>();

const HIDE_TAB_ROUTES = [
  'SelectRide',
  'RideDetails',
  'ConfirmRide',
  'DriverFound',
];

const getTabIconComponent = (
  routeName: string,
  focused: boolean,
): React.FC<SvgProps> | null => {
  if (routeName === 'HomeTab') {
    return focused ? HomeActive : HomeInactive;
  }

  if (routeName === 'ActivityTab') {
    return focused ? CarActive : CarInactive;
  }

  if (routeName === 'ProfileTab') {
    return focused ? ProfileActive : ProfileInactive;
  }

  return null;
};

type TabBarIconProps = {
  routeName: 'HomeTab' | 'ActivityTab' | 'ProfileTab';
  focused: boolean;
  color: string;
};

const TabBarIcon = ({ routeName, focused, color }: TabBarIconProps) => {
  const Icon = getTabIconComponent(routeName, focused);

  return (
    <View style={styles.iconContainer}>
      {focused && <View style={[styles.activeLine, { backgroundColor: color }]} />}
      {Icon ? <Icon width={24} height={24} fill={color} style={styles.tabIcon} /> : null}
    </View>
  );
};

const tabBarIconRenderers: Record<
  TabBarIconProps['routeName'],
  ({ focused, color }: { focused: boolean; color: string }) => React.ReactElement | null
> = {
  HomeTab: ({ focused, color }) => (
    <TabBarIcon routeName="HomeTab" focused={focused} color={color} />
  ),
  ActivityTab: ({ focused, color }) => (
    <TabBarIcon routeName="ActivityTab" focused={focused} color={color} />
  ),
  ProfileTab: ({ focused, color }) => (
    <TabBarIcon routeName="ProfileTab" focused={focused} color={color} />
  ),
};

export default function MainTabs() {
  const { colors } = useTheme();
  const { t } = useTranslation(['navigation']);

  const tabBarStyle: ViewStyle = {
    height: 80,
    backgroundColor: colors.backgroundSoft,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    ...Shadows.small,
  };

  return (
    <Tab.Navigator
      key={i18n.language}
      screenOptions={({ route }) => {
        const activeRouteName = getFocusedRouteNameFromRoute(route) ?? '';
        const shouldHideTab = HIDE_TAB_ROUTES.includes(activeRouteName);

        return {
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarStyle: shouldHideTab ? styles.hiddenTabBar : tabBarStyle,
          tabBarLabelStyle: {
            ...Typography.caption,
            textTransform: 'none',
            marginBottom: 2,
          },
          tabBarIcon: tabBarIconRenderers[route.name],
        };
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: t('navigation:home') }}
      />

      <Tab.Screen
        name="ActivityTab"
        component={ActivityStack}
        options={{ tabBarLabel: t('navigation:activity') }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ tabBarLabel: t('navigation:profile') }}
      />
    </Tab.Navigator>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  hiddenTabBar: {
    display: 'none',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },

  activeLine: {
    width: 60,
    height: 3,
    borderRadius: Radius.full,
    marginBottom: 10,
  },

  tabIcon: {},
});