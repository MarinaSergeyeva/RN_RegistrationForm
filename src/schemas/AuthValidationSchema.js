import * as yup from 'yup';

export const authValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'min number of characters: 2')
    .max(16, 'max number of characters: 16')
    .matches(
      /^[A-Za-zА-Яа-яЇїІіА-Яа-яËё]+$/,
      'name must contain only alphabetic characters',
    ),
  email: yup
    .string()
    .email('incorrect format email')
    .max(30, 'max number of characters: 30')
    .required('required field'),

  password: yup
    .string()
    .min(8, 'min number of characters: 8')
    .max(16, 'max number of characters: 16')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'password must contain latin uppercase, uppercase letters and numbers',
    )
    .required('required field'),
});
