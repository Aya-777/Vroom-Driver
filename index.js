/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { getApp } from '@react-native-firebase/app';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';

setBackgroundMessageHandler(getMessaging(getApp()), async remoteMessage => {
    console.log('Background message:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
