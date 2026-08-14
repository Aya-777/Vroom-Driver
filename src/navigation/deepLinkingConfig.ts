import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './rootTypes';

export const deepLinkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: ['vroomrider://', 'https://vroomrider.com'],
  config: {
    screens: {
      Splash: 'splash',
      Notifications: 'notifications',
      Main: {
        screens: {
          MainTabs: {
            screens: {
              HomeTab: {
                screens: {
                  HomeScreen: 'home',
                  Trip: 'trip/:tripId',
                },
              },
            },
          },
        },
      },
    },
  },
};
