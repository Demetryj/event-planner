import { object, string } from 'yup';

export const editSchema = object({
  title: string()
    // .min(4, 'Min 4 characters')
    // .max(30, 'Max 30 characters')
    .matches(/^[a-zA-Zа-яА-Я ]+$/, 'Invalid input'),

  description: string(),
  // .min(4, 'Min 4 characters')
  // .max(105, 'Max 105 characters')
  // .required('Required'),
  date: string(),
  // .required('Required'),
  time: string(),
  // .required('Required'),
  location: string().matches(/^[a-zA-Zа-яА-Я ]+$/, 'Invalid input'),
  //   .min(4, 'Min 4 characters')
  //   .max(15, 'Max 15 characters')
  //   .required('Required'),
  category: string(),
  // .required('Required'),
  picture: string(),
  priority: string(),
  // .required('Required'),
});
