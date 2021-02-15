import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { infoValidationSchema } from '../schemas/InfoValidationSchema';
import Card from '../components/Card';

const InfoScreen = props => {
  const {
    control,
    handleSubmit,
    errors,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(infoValidationSchema),
  });
  const { navigation } = props;

  const onSubmit = data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        console.log('success', success);

        if (success) {
          resolve(data);
          navigation.navigate('Success');
        } else {
          const error = 'Something went wrong';
          reject(error);
          navigation.navigate('MyModal');
        }
      }, 1000);
    })
      .catch(error => console.log('promiseError', error))
      .finally(() => console.log('finished!'));
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <Card style={styles.infoContainer}>
        <ScrollView>
          <Text style={styles.text}>Where are you from?</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="country"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="country"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.country && (
            <Text style={styles.errorMessage}>{errors.country?.message}</Text>
          )}
          <Text style={styles.text}>Where where you born?</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="city"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="city"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.city && (
            <Text style={styles.errorMessage}>{errors.city?.message}</Text>
          )}
          <Text style={styles.text}>How old are you?</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="age"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                keyboardType="numeric"
              />
            )}
            name="age"
            defaultValue=""
          />
          {errors.age && (
            <Text style={styles.errorMessage}>{errors.age?.message}</Text>
          )}
          <View style={styles.buttonContainer}>
            <Button
              disabled={!isValid}
              title="Submit"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Your Information',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    minWidth: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  input: {
    textAlign: 'center',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
    text: {
        fontSize: 16,
        fontWeight:'700'
    },
  buttonContainer: {
    marginTop: 50,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});

export default InfoScreen;
