import React, { useState } from 'react';
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
import { useTheme } from 'react-native-paper';
import { authValidationSchema } from '../../schemas/AuthValidationSchema';
import Card from '../../components/Card';
import Input from './components/Input';
import { useDispatch, useStore } from 'react-redux';
import authActions from '../../redux/actions/authActions';
import { useTextInputValue } from '../../hooks/useInputValue';

const AuthScreen = props => {
  const dispatch = useDispatch();

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

  const { colors } = useTheme();
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
          <Input
            fieldName="username"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            touched={touched}
            errors={errors}
          />
          <Input
            fieldName="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            touched={touched}
            errors={errors}
          />
          <Input
            fieldName="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            touched={touched}
            errors={errors}
          />
          <View style={styles.buttonContainer}>
            <Button
              disabled={!isValid || !dirty}
              onPress={onHandleFormSubmit}
              title="Next"
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

export default AuthScreen;
