/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { LanguageService } from './src/core/i18n/services/LanguageService';
import './src/core/i18n';
import { useEffect, useState } from 'react';


function App() {
  const [isReady, setIsReady] =
  useState(false);

  useEffect(() => {
  const initialize = async () => {
    try {
      await LanguageService.initializeLanguage();
    } catch (error) {
      console.error("Failed to initialize i18n:", error);
      // Optional: Fallback to a default language manually
    } finally {
      setIsReady(true);
    }
  };

  initialize();
}, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
