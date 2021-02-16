import * as yup from 'yup';

export const infoValidationSchema = yup.object().shape({
  country: yup
    .string()
    .min(2, 'min number of characters: 2')
    .max(16, 'max number of characters: 16')
    .matches(
      /^[A-Za-zА-Яа-яЇїІіА-Яа-яËё]+$/,
      'name must contain only alphabetic characters',
    ),
  city: yup
    .string()
    .min(3, 'min number of characters: 3')
    .max(30, 'max number of characters: 30')
    .required('required field'),

  age: yup.number(1, 'enter your age').positive().integer(),
});
