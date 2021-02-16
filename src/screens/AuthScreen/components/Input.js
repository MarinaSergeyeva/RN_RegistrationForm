import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import authActions from '../../../redux/actions/authActions';

const Input = props => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const {
    fieldName,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = props;

  const saveInputToState = () => {
    if (fieldName === 'password') {
      return;
    }
    const result = {
      [fieldName]: values[fieldName],
    };
    dispatch(authActions.authSuccess(result));
  };

  return (
    <View>
      <TextInput
        name={fieldName}
        placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
        onChange={saveInputToState}
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
        value={values[fieldName]}
        style={styles.input}
      />
      <Text style={{ ...fonts.light, ...styles.errorMessage }}>
        {touched[fieldName] && errors[fieldName]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Input;
