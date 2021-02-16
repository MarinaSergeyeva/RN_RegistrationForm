import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import InfoScreen from '../screens/InfoScreen';
import SuccessScreen from '../screens/SuccessScreen';
import Modal from '../components/Modal';
import screenOptions from '../screens/screenOptions';

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  const { colors } = useTheme();
  const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
  };

  return (
    <AuthStackNavigator.Navigator
      screenOptions={defaultNavOptions}
      initialRouteName="Auth"
    >
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={screenOptions.authScreen}
      />
      <AuthStackNavigator.Screen
        name="Info"
        component={InfoScreen}
        options={screenOptions.infoScreen}
      />
      <AuthStackNavigator.Screen
        name="Success"
        component={SuccessScreen}
        options={screenOptions.successScreen}
      />
      <AuthStackNavigator.Screen
        name="MyModal"
        component={Modal}
        options={screenOptions.modalScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};
