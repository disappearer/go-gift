import {
  OpenSans_400Regular, OpenSans_600SemiBold, useFonts
} from '@expo-google-fonts/open-sans';
import React from 'react';
import MainScreen from './src/MainScreen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({ OpenSans_400Regular, OpenSans_600SemiBold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MainScreen />
  );
}
