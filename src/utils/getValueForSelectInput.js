import i18n from 'i18next';

export const getValueForSelectInput = nameInput => {
  switch (nameInput) {
    case 'date':
      return i18n.t('selectFormPlaceholder.date');

    case 'time':
      return i18n.t('selectFormPlaceholder.time');

    case 'category':
      return i18n.t('selectFormPlaceholder.category');

    case 'priority':
      return i18n.t('selectFormPlaceholder.priority');

    default:
      return;
  }
};
