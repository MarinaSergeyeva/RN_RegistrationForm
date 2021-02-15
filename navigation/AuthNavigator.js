import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen, {
  screenOptions as authScreenOptions,
} from '../screens/AuthScreen';
import InfoScreen, {
  screenOptions as infoScreenOptions,
} from '../screens/InfoScreen';
import SuccessScreen, {
  screenOptions as successScreenOptions,
} from '../screens/SuccessScreen';
import Modal, {
  screenOptions as modalScreenOptions,
} from '../components/Modal';

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
      initialRouteName="Info"
    >
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
      <AuthStackNavigator.Screen
        name="Success"
        component={SuccessScreen}
        options={successScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="MyModal"
        component={Modal}
        options={modalScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
