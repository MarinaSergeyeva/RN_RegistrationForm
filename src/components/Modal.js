import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { PreferencesContext } from '../PreferencesContext';

const Modal = props => {
  const { colors } = useTheme();
  const { navigation } = props;
    const { isThemeDark } = useContext(PreferencesContext);

  return (
    <View style={styles.screen}>
      <Text style={{ color: isThemeDark ? 'white' : '#000', ...styles.text }}>Something went wrong</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          onPress={() => navigation.goBack()}
          title="Try again"
        />
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 16 },
  buttonContainer: {
    marginTop: 50,
  },
});
