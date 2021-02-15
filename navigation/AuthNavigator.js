import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen, {
  screenOptions as authScreenOptions,
} from '../screens/AuthScreen';
import InfoScreen, {
  screenOptions as infoScreenOptions,
} from '../screens/InfoScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'green',
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="Info"
        component={InfoScreen}
        options={infoScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
