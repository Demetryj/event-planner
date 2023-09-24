import { useTranslation } from 'react-i18next';

export const useTranslateMonth = date => {
  const { t } = useTranslation();
  const months = t('calendar.months', { returnObjects: true });
  const currentMonth = date.getMonth();

  let translatedMonth = '';

  months.forEach((month, index) => {
    if (currentMonth === index) {
      translatedMonth = month;
    }
  });

  return { translatedMonth };
};
