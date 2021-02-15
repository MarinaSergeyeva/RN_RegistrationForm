import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { authValidationSchema } from '../schemas/AuthValidationSchema';

const AuthScreen = props => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm({
          values: { username: '', email: '', password: '' },
        });
      }}
      validationSchema={authValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        dirty,
      }) => {
        return (
          <View style={styles.form}>
            <View style={styles.fieldsContainer}>
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
            </View>
            <Button
              disabled={!isValid || !dirty}
              onPress={handleSubmit}
              title="Next"
            />
          </View>
        );
      }}
    </Formik>
  );
};

export const screenOptions = {
  headerTitle: 'Authenticate',
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

export default AuthScreen;
