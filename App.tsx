import { StyleProvider } from 'native-base';
import React, { useEffect } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import SplashScreen from 'react-native-splash-screen';
import App from './src/App';
import buildTheme from './src/custom-theme';
import { ThemeType } from './src/types/Theme';

export default function AppBootstrap() {
  const colorScheme = useColorScheme() as ThemeType;

  useEffect(() => {
    // Do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }, []);

  return (
    <AppearanceProvider>
      <StyleProvider style={buildTheme(colorScheme)}>
        <App themeType={colorScheme}/>
      </StyleProvider>
    </AppearanceProvider>
  )
}
