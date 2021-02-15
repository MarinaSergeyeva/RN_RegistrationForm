import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { authValidationSchema } from '../schemas/AuthValidationSchema';
import Card from '../components/Card';

const AuthScreen = props => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
    },
    validationSchema: authValidationSchema,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    isValid,
    dirty,
  } = formik;

  const { navigation } = props;

  const onHandleFormSubmit = () => {
    handleSubmit();
    navigation.navigate('Info');
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <Card style={styles.infoContainer}>
        <ScrollView>
          <TextInput
            placeholder="Username"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>
            {touched.username && errors.username}
          </Text>
          <TextInput
            placeholder="email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>
            {touched.email && errors.email}
          </Text>
          <TextInput
            placeholder="password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input}
          />
          <Text style={styles.errorMessage}>
            {touched.password && errors.password}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              disabled={!isValid || !dirty}
              onPress={onHandleFormSubmit}
              title="Next"
            />
          </View>
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Authenticate',
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
  },
  buttonContainer: {
    marginTop: 50,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});

export default AuthScreen;
