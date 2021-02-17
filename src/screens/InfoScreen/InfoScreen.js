import React, { useRef } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import { infoValidationSchema } from '../../schemas/InfoValidationSchema';
import Card from '../../components/Card';
import Input from './components/Input';

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

  const { colors, fonts } = useTheme();
  const { navigation } = props;

  const onSubmit = data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;

        if (success) {
          resolve(data);
          navigation.navigate('Success');
        } else {
          const error = 'Something went wrong';
          reject(error);
          navigation.navigate('Error');
        }
      }, 1000);
    })
      .catch(error => console.log('promiseError', error))
      .finally(() => console.log('finished!'));
  };

    const cityInput = useRef(null);
  const ageInput = useRef(null);

  return (
    <KeyboardAvoidingView
      behavior="height" // for IOs
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <Card style={styles.infoContainer}>
        <ScrollView>
          <Input
            title="Where are you from?"
            control={control}
            name="country"
            fieldName="country"
            errors={errors}
            returnKeyType="next"
            onSubmitEditing={() => cityInput.current.focus()}
          />
          <Input
            title="Where were you born?"
            control={control}
            name="city"
            fieldName="city"
            errors={errors}
            returnKeyType="next"
            inputRef={cityInput}
            onSubmitEditing={() => ageInput.current.focus()}
          />
          <Input
            title="How old are you?"
            control={control}
            name="age"
            fieldName="age"
            errors={errors}
            keyboardType="numeric"
            inputRef={ageInput}
          />
          <View style={styles.buttonContainer}>
            <Button
              disabled={!isValid}
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              color={colors.primary}
            />
          </View>
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
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
  buttonContainer: {
    marginTop: 50,
  },
});

export default InfoScreen;
