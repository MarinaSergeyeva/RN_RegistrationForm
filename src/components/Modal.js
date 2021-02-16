import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Modal = props => {
  const { colors } = useTheme();
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Something went wrong</Text>
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
