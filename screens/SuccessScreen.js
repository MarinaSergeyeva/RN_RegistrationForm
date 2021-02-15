import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SuccessScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Success!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuccessScreen;
