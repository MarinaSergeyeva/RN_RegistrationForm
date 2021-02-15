import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { infoValidationSchema } from '../schemas/InfoValidationSchema';
import SuccessScreen from './SuccessScreen';

const InfoScreen = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: { touched, isDirty },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(infoValidationSchema),
  });

  const onSubmit = data => {
    console.log(data);
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(<SuccessScreen/>);
      }, 1000);
    });
      
    result
      .then(data => console.log(data))
      .catch(error => console.log(error))
      .finally(() => console.log('finished!'));

    return result;
  };

  return (
    <View style={styles.form}>
      <View style={styles.fieldsContainer}>
        <Text>Where are you from?</Text>
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
        <Text>Where where you born?</Text>
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
        <Text>How old are you?</Text>
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
      </View>

      <Button
        // disabled={isDirty || isValid}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
    alignItems: 'center',
    marginTop: 100, // must be removed
  },
  fieldsContainer: {
    width: '80%',
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
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});

export default InfoScreen;
