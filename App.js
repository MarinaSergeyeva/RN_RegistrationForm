/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import NavigationStack from './navigation/NavigationStack';
import AuthScreen from './screens/AuthScreen';
import InfoScreen from './screens/InfoScreen';
import SuccessScreen from './screens/SuccessScreen';

const App = () => {
  return <NavigationStack />
  
};

const styles = StyleSheet.create({});

export default App;
