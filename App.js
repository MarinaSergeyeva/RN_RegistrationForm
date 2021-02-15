/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AuthScreen from './screens/AuthScreen';
import SuccessScreen from './screens/SuccessScreen';

const App = () => {
 
  return (
    <View>
      <AuthScreen />
      {/* <SuccessScreen/> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
