/**
 * @format
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import fontConfig from './src/assets/fonts/fontConfig';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
  fonts: configureFonts(fontConfig),
};

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
