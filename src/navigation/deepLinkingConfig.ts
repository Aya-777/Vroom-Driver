import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './rootTypes';

export const deepLinkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [
    'vroomrider://',
    'https://vroomrider.com',
  ],

  // 2. Map URL paths to your specific screens
  config: {
    screens: {
      // If a user is not logged in, React Navigation will fall back gracefully or you can route them
      AuthStack: {
        screens: {
          Login: 'login',
        },
      },
      // Protected Routes layout
      MainTabs: {
        screens: {
          HomeTab: {
            screens: {
              HomeMain: 'home',
              RideDetails: 'ride/:rideId',    // like: vroomrider://ride/123-abc
              DriverFound: 'tracking/:rideId/:driverId',
            },
          },
          ProfileTab: {
            screens: {
              ProfileMain: 'profile',
            },
          },
        },
      },
    },
  },
};