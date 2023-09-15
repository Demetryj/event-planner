import { object, string } from 'yup';
import i18n from 'i18next';

export const editSchema = object({
  title: string().matches(
    /^[a-zA-Z\u0400-\u04FF' ]+$/,
    i18n.t('eventForm.errorMessage')
  ),
  description: string(),
  date: string(),
  time: string(),
  location: string().matches(
    /^[a-zA-Z\u0400-\u04FF' ]+$/,
    i18n.t('eventForm.errorMessage')
  ),
  category: string(),
  picture: string(),
  priority: string(),
});
