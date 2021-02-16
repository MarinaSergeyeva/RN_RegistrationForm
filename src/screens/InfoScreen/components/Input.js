import React, { useEffect } from 'react';
import { useController } from 'react-hook-form';
import { useTheme } from 'react-native-paper';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import infoActions from '../../../redux/actions/infoActions';
import { useDispatch } from 'react-redux';

const Input = props => {
  const { fonts } = useTheme();
  const { control, name, fieldName, title, errors } = props;
  const {
    field: { ref, onChange, onBlur, value },
    meta: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const result = {
      [fieldName]: value,
    };
    dispatch(infoActions.infoSuccess(result));
  }, [value]);

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
        onBlur={onBlur}
        onChangeText={value => onChange(value)}
        value={value}
        onSubmitEditing={() => console.log('make focus for next input')}
        inputRef={ref}
        style={styles.input}
      />
      <Text style={{ ...fonts.light, ...styles.errorMessage }}>
        {errors[fieldName]?.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  input: {
    textAlign: 'center',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Input;
