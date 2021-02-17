import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useStore } from 'react-redux';
import Card from '../../components/Card';
import CustomText from './components/CustomText';

const SuccessScreen = () => {
  const store = useStore();
  const { auth, info } = store.getState();
  const { username, email } = auth;
  const { country, city, age } = info;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Success!</Text>
        <Card style={styles.infoContainer}>
          <CustomText label="Name" text={username} />
          <CustomText label="Email" text={email} />
          <CustomText label="Country" text={country} />
          <CustomText label="City" text={city} />
          <CustomText label="Age" text={age} />
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
  },
  infoContainer: {
    minWidth: '50%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
});

export default SuccessScreen;
