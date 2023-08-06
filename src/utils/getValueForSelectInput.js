export const getValueForSelectInput = nameInput => {
  switch (nameInput) {
    case 'date':
      return 'Select date';

    case 'time':
      return 'Select time';

    case 'category':
      return 'Select category';

    case 'priority':
      return 'Select priority';

    default:
      return;
  }
};
