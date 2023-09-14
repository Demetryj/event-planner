export const translateData = string => {
  switch (string) {
    case 'by name':
      return string;

    case 'за назвою':
      return 'by name';

    case 'by date':
      return string;

    case 'за датою':
      return 'by date';

    case 'by priority':
      return string;

    case 'за пріоритетом':
      return 'by priority';
    //--------------------------//
    case 'Art':
      return string;

    case 'Мистецтво':
      return 'Art';

    case 'Music':
      return string;

    case 'Музика':
      return 'Music';

    case 'Business':
      return string;

    case 'Бізнес':
      return 'Business';

    case 'Conference':
      return string;

    case 'Конференція':
      return 'Conference';

    case 'Workshop':
      return string;

    case 'Семінар':
      return 'Workshop';

    case 'Party':
      return string;

    case 'Вечірка':
      return 'Party';

    case 'Sport':
      return string;

    case 'Спорт':
      return 'Sport';

    default:
      break;
  }
};
