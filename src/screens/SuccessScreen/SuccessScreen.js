import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useStore } from 'react-redux';

const SuccessScreen = () => {
  const store = useStore();
  const { auth, info } = store.getState();
  const { username, email } = auth;
  const { country, city, age } = info;

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Success!</Text>
      <Text style={styles.text}>{username}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{country}</Text>
      <Text style={styles.text}>{city}</Text>
      <Text style={styles.text}>{age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 16 },
});

export default SuccessScreen;
