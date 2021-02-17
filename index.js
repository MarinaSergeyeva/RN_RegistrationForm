/**
 * @format
 */
import React, { createContext, useCallback, useMemo, useState } from 'react';
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App';
import fontConfig from './src/assets/fonts/fontConfig';
import store from './src/redux/store';
import merge from 'deepmerge';
import { PreferencesContext } from './src/PreferencesContext';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function Main() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <Provider store={store}>
      {console.log('preferences', preferences)}
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <App />
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
