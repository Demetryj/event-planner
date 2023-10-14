import { object, string } from 'yup';
import i18n from 'i18next';

export const editSchema = object({
  title: string().matches(
    /^[a-zA-Z\u0400-\u04FF' ]+$/,
    i18n.t('eventForm.errorMessageInvalid')
  ),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  description: string(),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  date: string(),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  time: string(),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  location: string().matches(
    /^[a-zA-Z\u0400-\u04FF' ]+$/,
    i18n.t('eventForm.errorMessageInvalid')
  ),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  category: string(),
  // .required(i18n.t('eventForm.errorMessageRequired')),
  picture: string(),
  priority: string(),
  // .required(i18n.t('eventForm.errorMessageRequired')),
});
