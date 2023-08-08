import { object, string } from 'yup';

export const editSchema = object({
  title: string().matches(/^[a-zA-Zа-яА-Я ]+$/, 'Invalid input'),
  description: string(),
  date: string(),
  time: string(),
  location: string().matches(/^[a-zA-Zа-яА-Я ]+$/, 'Invalid input'),
  category: string(),
  picture: string(),
  priority: string(),
});
